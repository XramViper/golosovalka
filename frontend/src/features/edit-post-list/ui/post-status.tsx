"use client";

import { Board } from "@/entities/board/api/get-info-by-id/types";

type PostStatus = Board["posts"][0]["status"];

interface PostStatusProps {
  status: PostStatus;
  onChange: (status: PostStatus) => void;
  disabled?: boolean;
}

export function PostStatus({ status, onChange, disabled }: PostStatusProps) {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as PostStatus;
    onChange(newStatus);
  };

  return (
    <select
      className="select select-bordered border-base-300 font-semibold"
      value={status}
      onChange={handleStatusChange}
      disabled={disabled}
    >
      <option value="NEW">⭐️&nbsp;&nbsp;&nbsp;&nbsp;Новое</option>
      <option value="IN_PROGRESS">🏗️&nbsp;&nbsp;&nbsp;&nbsp;В работе</option>
      <option value="DONE">✅&nbsp;&nbsp;&nbsp;&nbsp;Готово</option>
      <option value="CANCELLED">❌&nbsp;&nbsp;&nbsp;&nbsp;Отменено</option>
    </select>
  );
}
