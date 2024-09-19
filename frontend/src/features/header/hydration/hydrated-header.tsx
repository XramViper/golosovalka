import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Header } from "../ui/header";
import { prefetchUserInfoQuery } from "@/entities/user/api";
import { prefetchBoardsInfoByTitleQuery } from "@/entities/board/api";

type Props = {
  boardName?: string;
};

export async function HydratedHeader(props?: Props) {
  const { boardName } = props ?? {};
  const queryClient = new QueryClient();

  await prefetchUserInfoQuery(queryClient);

  if (boardName) {
    await prefetchBoardsInfoByTitleQuery(boardName, queryClient);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header boardName={boardName} />
    </HydrationBoundary>
  );
}
