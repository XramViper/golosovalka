"use client"

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

interface UserAvatarProps {
  displayName: string; // Replace 'string' with the actual type of the user object
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { displayName } = props;
  const pathname = usePathname();
  const [, firstLevelRoute] = pathname.split("/");

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
          {displayName}
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
        {displayName}
        <ChevronDownIcon
          strokeWidth={3}
          className="w-4 h-4 duration-200 opacity-50"
        />
      </button>
    </div>
  );
};
