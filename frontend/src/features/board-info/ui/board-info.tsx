import {
  ArrowUpRightIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

interface BoardInfoProps {
  link: string;
}

export function BoardInfo(props: BoardInfoProps) {
  const { link } = props;

  return (
    <div>
      <p className="text-sm mb-1">Ссылка для ваших пользователей</p>
      <div className="relative px-4 py-2.5 rounded-box bg-base-100 select-all w-96">
        <div>{link}</div>
        <div className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
          <button
            className="btn btn-neutral btn-sm btn-square"
            data-tooltip-id="tooltip"
            data-tooltip-content="Copy link"
          >
            <DocumentDuplicateIcon className="w-5 h-5" />
          </button>
          <a
            href={link}
            target="_blank"
            className="btn btn-neutral btn-sm btn-square"
            data-tooltip-id="tooltip"
            data-tooltip-content="Go to board"
          >
            <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
