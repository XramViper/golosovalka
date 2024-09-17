import { BoardInfo, EditPostList } from "@/features";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen max-w-5xl mx-auto max-lg:px-8 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-12">
      <BoardInfo boardId={params.id} />
      <EditPostList posts={[]} />
    </main>
  );
}
