import fs from "fs";
import Link from "next/link";
import path from "path";

interface PolicyItem {
  text: string;
  type: "title" | "subtitle-1" | "subtitle-2" | "text" | "list-item";
}

function parsePolicy(text: string): PolicyItem[] {
  const lines = text.split("\n");
  const result: PolicyItem[] = [];

  const title = lines.shift();

  result.push({
    text: title ?? "",
    type: "title",
  });

  lines.forEach((line) => {
    // 1. subtitle-1
    if (line.match(/^\d+\.\s/)) {
      result.push({
        text: line,
        type: "subtitle-1",
      });
      return;
    }
    // 1.1. subtitle-2
    if (line.match(/^\d+\.\d+\.\s/)) {
      result.push({
        text: line,
        type: "subtitle-2",
      });
      return;
    }

    // — list-item
    if (line.startsWith("—")) {
      result.push({
        text: line.slice(1).trim(),
        type: "list-item",
      });
      return;
    }

    // text
    if (line.trim() !== "") {
      result.push({
        text: line.trim(),
        type: "text",
      });
    }
  });

  return result;
}

export default function PrivacyPage() {
  const policyText = fs.readFileSync(
    path.join(
      process.cwd(),
      "src",
      "app",
      "(public)",
      "privacy",
      "policy-text.txt",
    ),
    "utf-8",
  );
  const parsedPolicy = parsePolicy(policyText);

  const cancelButton = (
    <Link href="/">
      <button className="btn btn-primary mb-6 inline-block rounded">
        Назад
      </button>
    </Link>
  );

  return (
    <div className="privacy-policy container mx-auto px-4 py-8">
      {cancelButton}

      {parsedPolicy.map((item, index) => {
        switch (item.type) {
          case "title":
            return (
              <h1 key={index} className="mb-6 text-4xl font-bold">
                {item.text}
              </h1>
            );
          case "subtitle-1":
            return (
              <h2 key={index} className="mb-6 mt-12 text-2xl font-semibold">
                {item.text}
              </h2>
            );
          case "subtitle-2":
            return (
              <h3
                key={index}
                className="mb-6 mt-6 text-lg font-normal text-slate-400"
              >
                {item.text}
              </h3>
            );
          case "list-item":
            return (
              <p
                key={index}
                className="mb-3 list-disc leading-relaxed text-slate-400"
              >
                • {item.text}
              </p>
            );
          default:
            return (
              <p key={index} className="mb-2 text-slate-400">
                {item.text}
              </p>
            );
        }
      })}

      {cancelButton}
    </div>
  );
}
