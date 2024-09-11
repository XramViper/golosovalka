import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

type BackButtonProps = {
  label: ReactNode;
  href?: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  const button = (
    <a className="btn btn-square bg-base-100" href={href}>
      <ArrowUturnLeftIcon strokeWidth={3} className="w-5 h-5" />
    </a>
  );

  return (
    <div className="flex items-center gap-4">
      {href && button}
      {label}
    </div>
  );
};
