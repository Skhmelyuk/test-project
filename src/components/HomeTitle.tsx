import { memo } from "react";

export const HomeTitle = memo(({ title }: { title: string }) => {
  console.log("--------------Рендер HomeTitle--------------");
  return <h2 className="text-xl font-bold text-gray-800">{title}</h2>;
});
