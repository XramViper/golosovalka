"use client";

import { useBoardByTitleQuery } from "@/entities/board/api";

type Props = {
  boardName: string;
};

export function AddPostForm(props: Props) {
  const { boardName } = props;

  const { data } = useBoardByTitleQuery(boardName);

  const boardInfo = data?.data;

  if (!boardInfo) {
    return <div>Загрузка...</div>;
  }

  return (
    <form className="space-y-4 w-full bg-base-100 rounded-box p-8 hover:shadow-lg duration-200">
      {JSON.stringify(boardInfo)}
      <h2 className="font-bold text-lg">Предложи идею</h2>
      <div className="form-control w-full">
        <div className="label">
          <span className="label-text">Короткий, ёмкий заголовок</span>
        </div>
        <input
          required
          type="text"
          autoComplete="off"
          placeholder="Добавьте контакты на сайт"
          className="input border-base-content/10 w-full placeholder:opacity-60 font-medium"
          value=""
        />
      </div>
      <div className="form-control w-full">
        <div className="label">
          <span className="label-text">Описание</span>
        </div>
        <textarea
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
