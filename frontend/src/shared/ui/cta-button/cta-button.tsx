import { classify } from "@/shared/styles";

type CTAButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CTAButton = ({ onClick, children }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classify({
        layout: "btn btn-primary h-fit w-full lg:w-fit",
        borders: "border-none",
        colors: "bg-white text-base-100 hover:bg-slate-100 hover:text-base-100",
        padding: "px-4 pb-4 pt-3 lg:px-6",
        typography: "text-base font-black lg:text-lg",
      })}
    >
      {children}
    </button>
  );
};
