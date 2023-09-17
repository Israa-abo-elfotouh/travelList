import React from "react";

export function Item({ item, onDelateItems, onTogeleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onTogeleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelateItems(item.id)}>❌</button>
    </li>
  );
}
