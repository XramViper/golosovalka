interface PostTitleProps {
  title: string;
}

export function PostTitle(props: PostTitleProps) {
  return <div className="font-bold mb-2">{props.title}</div>;
}
