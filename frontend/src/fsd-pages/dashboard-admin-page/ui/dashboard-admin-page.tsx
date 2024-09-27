import { BoardInfo, EditPostList } from "@/features";

type Props = {
  boardId: string;
};

export function DashboardAdminPage(props: Props) {
  const { boardId } = props;

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-12 pb-24 bg-base-200 flex flex-col md:flex-row gap-12">
      <BoardInfo boardId={boardId} />
      <EditPostList boardId={boardId} />
    </main>
  );
}
