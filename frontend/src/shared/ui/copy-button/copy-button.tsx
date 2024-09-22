import { useState } from "react";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";

interface Props {
  valueToCopy: string;
  disabled?: boolean;
}

export function CopyButton({ valueToCopy, disabled }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      className="btn btn-neutral btn-sm btn-square"
      data-tooltip-id="tooltip"
      data-tooltip-content="Copy link"
      onClick={handleCopy}
      disabled={disabled || copied}
    >
      {copied ? (
        <CheckIcon className="w-5 h-5" />
      ) : (
        <DocumentDuplicateIcon className="w-5 h-5" />
      )}
    </button>
  );
}
