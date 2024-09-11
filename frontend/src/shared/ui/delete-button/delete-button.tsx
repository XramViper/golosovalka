import { TrashIcon } from "@heroicons/react/24/outline";

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton(props: DeleteButtonProps) {
  return (
    <button className="btn btn-ghost" onClick={props.onClick}>
      Удалить
      <TrashIcon strokeWidth="2" className="w-6 h-6" />
    </button>
  );
}
