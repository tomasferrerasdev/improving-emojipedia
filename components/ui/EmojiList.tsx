import { FC } from "react";
import { EmojiInterface } from "../../interfaces/EmojiInterface";
import { EmojiCard } from "./EmojiCard";

interface Props {
  emojis: EmojiInterface[];
}

export const EmojiList: FC<Props> = ({ emojis }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {emojis.map((emoji, index) => (
          <EmojiCard key={index} {...emoji} />
        ))}
      </div>
    </>
  );
};
