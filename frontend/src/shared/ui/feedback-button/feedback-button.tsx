import Link from "next/link";

export const FeedbackButton = () => {
  return (
    <div>
      <Link className="btn btn-ghost" href="/b/golosovalka" target="_blank">
        💡 Есть предложения?
      </Link>
    </div>
  );
};
