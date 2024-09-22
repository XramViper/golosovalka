import { DashboardAdminPage } from "@/pages";

export default function Page({ params }: { params: { id: string } }) {
  return <DashboardAdminPage boardId={params.id} />;
}
