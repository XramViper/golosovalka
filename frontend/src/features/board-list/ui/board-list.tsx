"use client";

import { useBoardsListQuery } from "@/entities/board/api";

export function BoardList() {
  const { data: responseData, isPending } = useBoardsListQuery();

  if (!responseData) {
    return null;
  }

  const { data: boards } = responseData;

  return (
    <div className="space-y-6 col-span-full md:col-span-4">
      <h1 className="font-extrabold text-lg md:text-xl">
        {boards?.length} доски
      </h1>
      <ul
        style={{ opacity: isPending ? 0.5 : 1 }}
        className="grid md:grid-cols-2 gap-4"
      >
        {boards?.map((board, index) => (
          <li key={index}>
            <a
              className="rounded-box block p-6 bg-base-100 hover:bg-neutral hover:text-neutral-content duration-150"
              href={`/dashboard/${board.id}`}
            >
              <div className="space-y-2">
                <p className="font-bold">{board.title}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
