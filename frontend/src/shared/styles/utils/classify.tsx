/**
 * @example
 * ```tsx
 * const styles: TailwindStyles = {
 *   layout: "grid grid-cols-1 lg:grid-cols-12",
 *   spacing: "gap-8 md:gap-16 lg:gap-32",
 *   padding: "py-8 md:py-16 lg:py-32",
 *   height: "min-h-[calc(100vh-10rem)]",
 *   alignment: "place-items-center",
 * };
 *
 * @param styles Объект с классами Tailwind, сгруппированными по категориям
 * @returns Строка с объединенными классами Tailwind
 */

export function classify(styles: TailwindStyles): string {
  const classGroups: Array<keyof TailwindStyles> = [
    "layout",
    "spacing",
    "padding",
    "height",
    "alignment",
    "typography",
    "colors",
    "borders",
    "effects",
    "transitions",
    "sizes",
    "other",
    "position",
    "transform",
    "parallax",
    "zIndex",
  ];

  return classGroups
    .map((group) => styles[group] || "")
    .filter(Boolean)
    .join(" ")
    .trim();
}

interface TailwindStyles {
  layout?: string;
  spacing?: string;
  padding?: string;
  height?: string;
  alignment?: string;
  typography?: string;
  colors?: string;
  borders?: string;
  effects?: string;
  transitions?: string;
  position?: string;
  zIndex?: string;
  sizes?: string;
  transform?: string;
  parallax?: string;
  other?: string;
}
