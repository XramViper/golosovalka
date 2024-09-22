import { AddPostForm, Header } from "@/features";
import { PostList } from "@/features/post-list/ui/post-list";

type Props = {
  boardName: string;
};

export function BoardPublicPage(props: Props) {
  const { boardName } = props;

  return (
    <>
      <Header boardName={boardName} />
      <main className="min-h-screen max-w-5xl mx-auto max-lg:px-4 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-12 items-start">
        <div className="md:max-w-sm w-full md:sticky md:top-6">
          <AddPostForm boardName={boardName} />
          <div className="mt-3 text-sm text-base-content/80 text-center font-semibold">
            Создано{" "}
            <a
              className="link text-base-content"
              href={`https://insigh.to/?ref=board_{66d7613b642aa95ea1433a61}`}
            >
              Голосовалкой
            </a>
          </div>
        </div>
        <div className="space-y-6 w-full">
          <PostList boardName={boardName} />
        </div>
      </main>
    </>
  );
}
