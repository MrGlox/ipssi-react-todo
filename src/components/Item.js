const Item = ({ children, done = true }) => (
  <li style={{ textDecoration: done && "line-through" }}>{children}</li>
);

export default Item;
