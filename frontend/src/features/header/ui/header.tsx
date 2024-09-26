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

export const Header: FC<Props> = ({ boardName: serverSideBoardTitle }) => {
  const { data } = useBoardByTitleQuery(serverSideBoardTitle);
  const pathname = usePathname();
  const [, firstLevelRoute, firstLevelId, , secondLevelId] =
    pathname.split("/");

  const isLandingPage = pathname === "/";

  if (firstLevelRoute === "auth") return null;

  const boardName = data?.data?.title || serverSideBoardTitle;
  const boardTitle = <h3 className="text-2xl font-black">{boardName}</h3>;
  const isPublicBoardRoute = firstLevelRoute === "b";

  if (isPublicBoardRoute && !serverSideBoardTitle) return null;

  const getHeaderContent = () => {
    if (isPublicBoardRoute && firstLevelId && secondLevelId) {
      return <BackButton href={`/b/${firstLevelId}`} label={boardTitle} />;
    }

    if (isPublicBoardRoute) {
      return (
        <>
          <div className="mr-auto">
            <BackButton label={boardTitle} />
          </div>
          <UserAvatar />
        </>
      );
    }

    if (firstLevelRoute === "dashboard") {
      return (
        <>
          <div className="mr-auto">
            {firstLevelId ? (
              <BackButton
                href="/dashboard"
                label={<h3 className="text-lg font-bold">Назад</h3>}
              />
            ) : (
              <UserAvatar />
            )}
          </div>
          <FeedbackButton />
        </>
      );
    }

    return (
      <>
        <Logo />
        <div className="ml-auto">
          <UserAvatar />
        </div>
      </>
    );
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50",
        {
          "bg-base-100": !isPublicBoardRoute || isLandingPage,
          "bg-base-200": isPublicBoardRoute,
        },
        isLandingPage ? "transition-colors duration-300" : ""
      )}
    >
      <div className="max-w-7xl py-3 max-lg:px-4 mx-auto flex gap-4">
        {getHeaderContent()}
      </div>
    </header>
  );
};
