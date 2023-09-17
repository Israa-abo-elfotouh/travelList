import Form from "./Form";
import Logo from "./Logo";
// import PackingList from "./PackingList";
// import Stats from "./Stats";
import React, { useState } from "react";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats.1";

function App() {
  const [items, setItems] = useState([]);
  function handlAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handlDelateItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlTogeleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handlClearItems() {
    const confirmed = window.confirm(" ara you sure clear all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handlAddItems} />
      <PackingList
        items={items}
        onDelateItems={handlDelateItems}
        onTogeleItems={handlTogeleItems}
        onClearItems={handlClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
