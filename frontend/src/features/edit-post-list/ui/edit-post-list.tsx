import { Post } from "@/entities";
import { EditPostCard } from "./edit-post-card";

type Props = {
  posts: Post[];
};

export function EditPostList(props: Props) {
  return (
    <section className="flex flex-col gap-6 w-full">
      {props.posts.map((post) => (
        <EditPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
