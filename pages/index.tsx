import type { NextPage } from "next";
import { useState } from "react";
import { EmojiCategory, EmojiList, Layout } from "../components";
import { categories } from "../data/categories";
import emojisData from "../data/emojis";

const Home: NextPage = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(emojisData);

  const handleSearch = (term: string) => {
    if (term.trim().length > 0) {
      setFilteredEmojis(
        emojisData.filter((emoji) =>
          emoji.name.toUpperCase().includes(term.toUpperCase().trim())
        )
      );
    } else {
      setFilteredEmojis(emojisData);
    }
  };

  const handleFilter = (category: string) => {
    setFilteredEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide">
        Emojipedia UI improve 💡
      </h1>
      <div className="flex justify-center">
        <input
          className="w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1"
          id="name"
          type={"text"}
          placeholder="Search for an emoji"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {categories.map((category, index) => (
          <EmojiCategory
            key={index}
            emoji={category.emoji}
            handleFilter={handleFilter}
            group={category.group}
          />
        ))}
      </div>

      <EmojiList emojis={filteredEmojis} />
    </Layout>
  );
};

export default Home;
