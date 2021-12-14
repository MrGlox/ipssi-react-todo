const Item = ({ children, done = false, handleClick, index }) => (
  <li
    onClick={() => handleClick(index)}
    style={{ textDecoration: done && "line-through" }}
  >
    {children}
  </li>
);

export default Item;
