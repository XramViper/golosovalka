import { Board } from "@/entities/board/api/get-info-by-title/types";
import { PostCard } from "./post-card";

type Props = {
  posts: Board["posts"];
};

export function PostList(props: Props) {
  return (
    <div className="space-y-6 col-span-full md:col-span-4">
      {props.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
