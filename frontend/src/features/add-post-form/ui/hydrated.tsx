import { Hydrated } from "@/shared/server/Hydrated";
import { AddPostForm as AddPostFormClient } from "./add-post-form";
import { prefetchBoardsInfoByTitleQuery } from "@/entities/board/api";

type Props = {
  boardName: string;
};

export const AddPostForm = (props: Props) => {
  const { boardName } = props;

  return (
    <Hydrated
      prefetchTask={async (queryClient) =>
        await prefetchBoardsInfoByTitleQuery(boardName, queryClient)
      }
    >
      <AddPostFormClient boardName={boardName} />
    </Hydrated>
  );
};
