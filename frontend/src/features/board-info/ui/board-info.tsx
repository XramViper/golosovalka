"use client";

import {
  useBoardByIdQuery,
  useBoardDeleteMutation,
} from "@/entities/board/api";
import { CopyButton, DeleteButton } from "@/shared";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useCurrentDomain } from "@/shared/hooks/useCurrentDomain";

interface BoardInfoProps {
  boardId: string;
}

export function BoardInfo(props: BoardInfoProps) {
  const { boardId } = props;

  const { data: responseData } = useBoardByIdQuery(boardId);
  const router = useRouter();
  const currentDomain = useCurrentDomain();

  const boardInfo = responseData?.data;

  const { mutate: deleteBoard, isPending } = useBoardDeleteMutation({
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  if (!boardInfo) {
    return null;
  }

  const publicLink = currentDomain
    ? `${currentDomain}/b/${boardInfo.translittedTitle}`
    : "";

  return (
    <section className="space-y-6 self-start md:sticky md:top-6">
      <h1 className="font-extrabold text-lg md:text-xl">{boardInfo.title}</h1>

      <div>
        <p className="text-sm mb-3">Ссылка для ваших пользователей</p>

        <div className="relative px-4 py-2.5 rounded-box bg-base-100 select-all w-30 md:w-96">
          {currentDomain ? (
            <div>{publicLink}</div>
          ) : (
            <div className="animate-pulse bg-base-200 h-6 w-[calc(100%-80px)] mr-8 rounded"></div>
          )}
          <div className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <CopyButton valueToCopy={publicLink} disabled={!currentDomain} />
            <a
              href={publicLink}
              target="_blank"
              className="btn btn-neutral btn-sm btn-square"
              data-tooltip-id="tooltip"
              data-tooltip-content="Go to board"
              aria-disabled={!currentDomain}
            >
              <ArrowUpRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <DeleteButton
        title="Вы действительно хотите удалить доску?"
        description="Все прикрепленные посты так же удалятся."
        disabled={isPending}
        onClick={() => deleteBoard(boardId)}
      />
    </section>
  );
}
