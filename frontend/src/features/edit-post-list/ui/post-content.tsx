import React from "react";

type PostContentProps = {
  description: string;
};

export function PostContent({ description }: PostContentProps) {
  return <p className="text-base-content-secondary">{description}</p>;
}
