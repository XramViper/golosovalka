import { TrashIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

interface DeleteButtonProps {
  onClick: () => void;
  disabled?: boolean;
  title?: string;
  description?: string;
}

export function DeleteButton(props: DeleteButtonProps) {
  const { onClick, disabled = false, title, description } = props;

  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        disabled={disabled}
        className="btn"
        onClick={() => ref.current?.showModal()}
      >
        Удалить
        <TrashIcon strokeWidth="2" className="w-6 h-6" />
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          {title && <h3 className="font-bold text-lg text-center">{title}</h3>}
          {description && <p className="py-4 text-center">{description}</p>}
          <div className="flex justify-center gap-3 pt-4">
            <form method="dialog">
              <button
                disabled={disabled}
                className="btn"
                onClick={() => ref.current?.showModal()}
              >
                Отмена
              </button>
            </form>
            <button
              disabled={disabled}
              className="btn btn-error"
              onClick={onClick}
            >
              Да, удалить
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
