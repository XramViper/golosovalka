"use client";

import { UserAvatar } from "@/entities";
import { useUserInfoQuery } from "@/entities/user/actions/useUserInfoQuery";
import { BackButton, FeedbackButton, Logo } from "@/shared";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

export const Header = () => {
  const { data } = useUserInfoQuery();

  const pathname = usePathname();

  const [, firstLevelRoute, firstLevelId, , secondLevelId] =
    pathname.split("/");

  // TODO: get board name
  const boardName = firstLevelId;

  const boardTitle = <h3 className="text-2xl font-black">{boardName}</h3>;
  // /
  let headerContent = (
    <>
      <Logo />
      <div className="ml-auto">
        <UserAvatar displayName={data?.displayName} />
      </div>
    </>
  );

  const isPublicBoardRoute = firstLevelRoute === "b";

  // /b/boardPublicId
  if (isPublicBoardRoute) {
    headerContent = <BackButton label={boardTitle} />;
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
          <UserAvatar displayName={data?.displayName} />
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
