import { classify } from "@/shared";

type FeatureCardProps = {
  groupId?: string;
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
};

export function FeatureCard({
  groupId = "group",
  title,
  description,
  content,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={classify({
        layout: "flex flex-col",
        spacing: "gap-6",
        sizes: "h-[22rem] w-full xl:h-[25rem]",
        colors: "border border-white/5 bg-white/5 text-primary-content",
        borders: "rounded-3xl",
        effects: "overflow-hidden",
        padding: "pt-6",
        other: groupId + " " + className,
      })}
    >
      <div
        className={classify({
          layout: "space-y-2",
          padding: "px-6",
        })}
      >
        <h3
          className={classify({
            typography: "text-xl tracking-tight lg:text-3xl",
          })}
        >
          {title}
        </h3>
        <div
          className={classify({
            effects: "opacity-80",
          })}
        >
          {description}
        </div>
      </div>
      <div
        className={classify({
          layout: "flex",
          sizes: "h-full",
          alignment: "items-stretch",
          effects: "overflow-hidden",
        })}
      >
        {content}
      </div>
    </div>
  );
}
