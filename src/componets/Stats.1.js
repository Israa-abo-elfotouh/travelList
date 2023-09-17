import React from "react";

export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">please add some items to your packing list🚀</p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const present = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {present === 100
          ? "you got everything! Ready to go✈️"
          : `you have ${numItems} item on your list, and you already packed
        ${numPacked} is (${present}) % }`}
      </em>
    </footer>
  );
}
