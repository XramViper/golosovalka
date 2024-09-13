"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useUserInfoQuery } from "../actions";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useSignOutMutation } from "@/entities/session";

export const UserAvatar = () => {
  const { data: userInfo } = useUserInfoQuery();
  const { mutate: signOut, isPending } = useSignOutMutation();

  const isAuth = userInfo !== undefined;

  const pathname = usePathname();
  const [, firstLevelRoute] = pathname.split("/");

  const isDashboard = firstLevelRoute === "dashboard";

  if (!isAuth) {
    return (
      <a href="/api/auth/signin">
        <button className="btn">Войти</button>
      </a>
    );
  }

  const { displayName } = userInfo;

  if (!isDashboard) {
    return (
      <a href="/dashboard">
        <button className="btn" type="button">
          {displayName}
        </button>
      </a>
    );
  }

  return (
    <Menu>
      <div className="relative z-10">
        <MenuButton disabled={isPending} className="btn">
          {displayName}
          <ChevronDownIcon
            strokeWidth={3}
            className="w-4 h-4 duration-200 opacity-50"
          />
        </MenuButton>
        <MenuItems className="absolute left-0 z-10 mt-3 w-screen max-w-[16rem] transform">
          <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-base-content ring-opacity-5 bg-base-100 p-1">
            <MenuItem>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 hover:bg-error/20 hover:text-error duration-200 py-1.5 px-4 w-full rounded-lg font-medium text-l"
              >
                <ArrowLeftStartOnRectangleIcon
                  strokeWidth={2}
                  className="w-6 h-6 "
                />
                <div className="text-sm">Выйти</div>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </div>
    </Menu>
  );
};
