"use client";

import { Post, PostStatuses } from "@/entities";
import { useState } from "react";

interface PostStatusProps {
  status: Post["status"];
  onChange: (status: Post["status"]) => void;
}

export function PostStatus(props: PostStatusProps) {
  const [status, setStatus] = useState(props.status);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as Post["status"];
    setStatus(newStatus);
    props.onChange(newStatus);
  };

  return (
    <select
      className="select select-bordered border-base-300 font-semibold"
      value={status}
      onChange={handleStatusChange}
    >
      <option value={PostStatuses["NEW"]}>⭐️&nbsp;&nbsp;&nbsp;&nbsp;Новое</option>
      <option value={PostStatuses["IN_PROGRESS"]}>🏗️&nbsp;&nbsp;&nbsp;&nbsp;В работе</option>
      <option value={PostStatuses["DONE"]}>✅&nbsp;&nbsp;&nbsp;&nbsp;Готово</option>
      <option value={PostStatuses["CANCELLED"]}>❌&nbsp;&nbsp;&nbsp;&nbsp;Отменено</option>
    </select>
  );
}
