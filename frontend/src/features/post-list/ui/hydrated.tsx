import { Hydrated } from "@/shared/server/Hydrated";
import { prefetchBoardsInfoByTitleQuery } from "@/entities/board/api";
import { PostList as PostListClient } from "./post-list";

type Props = {
  boardName: string;
};

export const PostList = (props: Props) => {
  const { boardName } = props;

  return (
    <Hydrated
      prefetchTask={async (queryClient) =>
        await prefetchBoardsInfoByTitleQuery(boardName, queryClient)
      }
    >
      <PostListClient boardName={boardName} />
    </Hydrated>
  );
};
