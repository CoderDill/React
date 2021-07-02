const Item = ({ id, name, qty }) => {
  return (
    <ul>
      <li>Product Name: {name}</li>
      <li>Product Quantity: {qty}</li>
    </ul>
  );
};

export default Item;
