import Item from "./Item";

const List = ({ list = [] }) => (
  <ul>
    {list.map((item) => (
      <Item done={item.done}>{item.content}</Item>
    ))}
  </ul>
);

export default List;
