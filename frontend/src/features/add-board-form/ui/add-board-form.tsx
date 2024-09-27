"use client";

import { useBoardCreateMutation } from "@/entities/board/api/create";

export function AddBoardForm() {
  const { mutate, isPending } = useBoardCreateMutation({
    onSuccess: clearForm,
  });

  function clearForm() {
    const form = document.querySelector("form") as HTMLFormElement;
    form.reset();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    mutate({ title });
  };

  return (
    <div className="col-span-full md:col-span-2">
      <div className="min-h-0 rounded-box bg-base-100 p-8">
        <form onSubmit={handleSubmit} className="w-full space-y-8">
          <h2 className="text-lg font-bold">
            Делай только то, что твои пользователи
            <span className="mx-1 bg-neutral px-1 text-neutral-content">
              реально
            </span>
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
            <button
              disabled={isPending}
              className="group btn btn-primary w-full"
              type="submit"
            >
              Создать доску
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
