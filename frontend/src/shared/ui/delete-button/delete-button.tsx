import { TrashIcon } from "@heroicons/react/24/outline";

interface DeleteButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function DeleteButton(props: DeleteButtonProps) {
  const { onClick, disabled = false } = props;
  return (
    <button disabled={disabled} className="btn btn-ghost" onClick={onClick}>
      Удалить
      <TrashIcon strokeWidth="2" className="w-6 h-6" />
    </button>
  );
}
