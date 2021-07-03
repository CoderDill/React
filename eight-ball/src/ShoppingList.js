import { useState } from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { v4 as uuid } from "uuid";

const ShoppingList = () => {
  const initial_state = [
    { id: uuid(), name: "Peanut Butter", qty: 2 },
    { id: uuid(), name: "Whole Milk", qty: 1 },
  ];
  const [items, setItems] = useState(initial_state);
  const addItem = (newItem) => {
    setItems((items) => [...items, { ...newItem, id: uuid() }]);
  };
  return (
    <>
      <h3>Shopping List</h3>
      <NewItemForm addItem={addItem} />
      <div>
        {items.map(({ id, name, qty }) => (
          <Item id={id} name={name} qty={qty} key={id} />
        ))}
      </div>
    </>
  );
};

export default ShoppingList;
