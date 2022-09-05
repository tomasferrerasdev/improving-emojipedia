import { FC } from "react";

interface Props {
  emoji: string;
  group: string;
  handleFilter: (group: string) => void;
}

export const EmojiCategory: FC<Props> = ({ emoji, group, handleFilter }) => {
  return (
    <>
      <button
        onClick={() => handleFilter(group)}
        className="flex items-baseline justify-start pl-7 rounded-md bg-[#F7f6f3] py-2 hover:bg-gray-100"
      >
        <span className="text-xl mr-4" role={"img"} aria-label={emoji}>
          {emoji}
        </span>
        <p>{group}</p>
      </button>
    </>
  );
};
