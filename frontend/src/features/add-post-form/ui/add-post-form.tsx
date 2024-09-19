"use client";

import { useBoardByTitleQuery } from "@/entities/board/api";
import { usePostCreateMutation } from "@/entities/post/api/create";

type Props = {
  boardName: string;
};

export function AddPostForm(props: Props) {
  const { boardName } = props;

  const { data } = useBoardByTitleQuery(boardName);

  const boardInfo = data?.data;

  const boardId = boardInfo?.id;

  const { mutate: createPost } = usePostCreateMutation(boardId, {
    onSuccess: clearForm,
  });

  if (!boardInfo) {
    return <div>Загрузка...</div>;
  }

  function clearForm() {
    const form = document.querySelector("form") as HTMLFormElement;
    form.reset();
  }

  console.log("boardId", boardId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const boardId = boardInfo.id;

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    createPost({ boardId, title, description });
  };

  console.log("boardInfo", boardInfo);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-full bg-base-100 rounded-box p-8 hover:shadow-lg duration-200"
    >
      <h2 className="font-bold text-lg">Предложи идею</h2>
      <div className="form-control w-full">
        <div className="label">
          <span className="label-text">Короткий, ёмкий заголовок</span>
        </div>
        <input
          required
          name="title"
          type="text"
          autoComplete="off"
          placeholder="Добавьте контакты на сайт"
          className="input border-base-content/10 w-full placeholder:opacity-60 font-medium"
        />
      </div>
      <div className="form-control w-full">
        <div className="label">
          <span className="label-text">Описание</span>
        </div>
        <textarea
          name="description"
          autoComplete="off"
          placeholder="Не хватает возможности связаться, добавьте телеграм-контакт"
          className="textarea border-base-content/10 w-full placeholder:opacity-60 text-base-content/90"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Прикрепить идею
      </button>
    </form>
  );
}
