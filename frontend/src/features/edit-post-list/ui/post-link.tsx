import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface PostLinkProps {
  boardTranslitedTitle: string;
  postTranslitedTitle: string;
}

export function PostLink({
  boardTranslitedTitle,
  postTranslitedTitle,
}: PostLinkProps) {
  const postUrl = `/b/${boardTranslitedTitle}/p/${postTranslitedTitle}`;

  return (
    <a className="btn" target="_blank" href={postUrl}>
      Перейти <ArrowUpRightIcon strokeWidth="2" className="w-5 h-5" />
    </a>
  );
}
