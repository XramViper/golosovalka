"use client";

import { useBoardByIdQuery } from "@/entities/board/api";
import { DeleteButton } from "@/shared";
import {
  ArrowUpRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

interface BoardInfoProps {
  boardId: string;
}

export function BoardInfo(props: BoardInfoProps) {
  const { boardId } = props;

  const { data: responseData } = useBoardByIdQuery(boardId);

  const boardInfo = responseData?.data;

  if (!boardInfo) {
    return null;
  }

  const currentDomain = window.location.origin;
  const publicLink = `${currentDomain}/b/${boardInfo.translittedTitle}`;

  return (
    <section className="space-y-6 self-start md:sticky md:top-6">
      <h1 className="font-extrabold text-lg md:text-xl">{boardInfo.title}</h1>

      <div>
        <p className="text-sm mb-1">Ссылка для ваших пользователей</p>
        <div className="relative px-4 py-2.5 rounded-box bg-base-100 select-all w-96">
          <div>{publicLink}</div>
          <div className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <button
              className="btn btn-neutral btn-sm btn-square"
              data-tooltip-id="tooltip"
              data-tooltip-content="Copy link"
            >
              <DocumentDuplicateIcon className="w-5 h-5" />
            </button>
            <a
              href={publicLink}
              target="_blank"
              className="btn btn-neutral btn-sm btn-square"
              data-tooltip-id="tooltip"
              data-tooltip-content="Go to board"
            >
              <ArrowUpRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <DeleteButton
        onClick={function (): void {
          throw new Error("Delete board not implemented.");
        }}
      />
    </section>
  );
}
