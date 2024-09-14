"use client";

import { useBoardCreateMutation } from "@/entities/board/api";

export function AddBoardForm() {
  const { mutate } = useBoardCreateMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    mutate({ title });
  };

  return (
    <div className="col-span-full md:col-span-2">
      <div className="p-8 rounded-box bg-base-100 min-h-0">
        <form onSubmit={handleSubmit} className="space-y-8 w-full">
          <h2 className="font-bold text-lg">
            Делай только то, что твои пользователи{" "}
            <span className="bg-neutral text-neutral-content px-1.5">
              реально
            </span>{" "}
            хотят
          </h2>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Название доски</span>
            </div>
            <input
              name="title"
              required
              autoComplete="off"
              placeholder="Булочная «Сладкий кекс 🧁"
              className="input input-bordered w-full placeholder:opacity-60"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <button className="btn btn-primary group w-full" type="submit">
              Создать доску
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
