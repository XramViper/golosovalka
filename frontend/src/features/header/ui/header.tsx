"use client";

import { UserAvatar } from "@/entities";
import { useBoardByTitleQuery } from "@/entities/board/api";
import { BackButton, FeedbackButton, Logo } from "@/shared";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

type Props = {
  boardName?: string;
};

export const Header: FC<Props> = (props) => {
  const { boardName: serverSideBoardTitle } = props;

  const { data } = useBoardByTitleQuery(serverSideBoardTitle);

  console.log("serverSideBoardTitle", serverSideBoardTitle);

  const boardInfo = data?.data;

  const pathname = usePathname();

  const [, firstLevelRoute, firstLevelId, , secondLevelId] =
    pathname.split("/");

  if (firstLevelRoute === "auth") {
    return null;
  }

  const boardName = boardInfo?.title || serverSideBoardTitle;

  const boardTitle = <h3 className="text-2xl font-black">{boardName}</h3>;

  let headerContent = (
    <>
      <Logo />
      <div className="ml-auto">
        <UserAvatar />
      </div>
    </>
  );

  const isPublicBoardRoute = firstLevelRoute === "b";

  if (isPublicBoardRoute && !serverSideBoardTitle) {
    return null;
  }

  // /b/boardPublicId
  if (isPublicBoardRoute) {
    headerContent = (
      <>
        <div className="mr-auto">
          <BackButton label={boardTitle} />
        </div>
        <UserAvatar />
      </>
    );
  }

  // /b/boardPublicId/p/postName
  if (isPublicBoardRoute && firstLevelId && secondLevelId) {
    headerContent = (
      <BackButton href={`/b/${firstLevelId}`} label={boardTitle} />
    );
  }

  // /dashboard
  if (firstLevelRoute === "dashboard" && !firstLevelId) {
    headerContent = (
      <>
        <div className="mr-auto">
          <UserAvatar />
        </div>
        <FeedbackButton />
      </>
    );
  }

  // /dashboard/boardId
  if (firstLevelRoute === "dashboard" && firstLevelId) {
    headerContent = (
      <>
        <div className="mr-auto">
          <BackButton
            href="/dashboard"
            label={<h3 className="text-lg font-bold">Назад</h3>}
          />
        </div>
        <FeedbackButton />
      </>
    );
  }

  return (
    <header
      className={clsx("relative z-50", {
        "bg-base-100": !isPublicBoardRoute,
        "bg-base-200": isPublicBoardRoute,
      })}
    >
      <div className="max-w-5xl py-3 max-lg:px-4 mx-auto flex gap-4">
        {headerContent}
      </div>
    </header>
  );
};
