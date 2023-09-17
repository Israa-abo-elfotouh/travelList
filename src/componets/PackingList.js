import React, { useState } from "react";
import { Item } from "./Item.1";

export function PackingList({
  items,
  onDelateItems,
  onTogeleItems,
  onClearItems,
}) {
  const [sortby, setSortby] = useState("packed");

  let sortItems;
  if (sortby === "input") sortItems = items;
  if (sortby === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed") sortItems = items;
  sortItems.sort((a, b) => b.packed - a.packed);

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            onDelateItems={onDelateItems}
            onTogeleItems={onTogeleItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input"> sort by input order</option>
          <option value="description"> sort by description order</option>
          <option value="packed"> sort by input packed status</option>
        </select>

        <button onClick={onClearItems}>clear list</button>
      </div>
    </div>
  );
}
