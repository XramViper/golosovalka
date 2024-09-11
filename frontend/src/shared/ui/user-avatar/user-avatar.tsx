"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export const UserAvatar = () => {
  const pathname = usePathname();

  const [_, firstLevelRoute, firstLevelId, secondLevelRoute, secondLevelId] =
    pathname.split("/");

  const isDashboard = firstLevelRoute === "dashboard";

  if (!isDashboard) {
    return (
      <a href="/dashboard">
        <button
          className="btn"
          type="button"
          aria-expanded="false"
          data-headlessui-state=""
          id="headlessui-popover-button-:r0:"
        >
          Даниил
        </button>
      </a>
    );
  }

  return (
    <div className="relative z-10" data-headlessui-state="">
      <button
        className="btn"
        type="button"
        aria-expanded="false"
        data-headlessui-state=""
        id="headlessui-popover-button-:r0:"
      >
        Даниил
        <ChevronDownIcon
          strokeWidth={3}
          className="w-4 h-4 duration-200 opacity-50"
        />
      </button>
    </div>
  );
};
