import Item from "./Item";

const List = ({ list, handleClick }) => (
  <ul>
    {list.map((item, index) => (
      <Item done={item.done} handleClick={handleClick} index={index}>
        {item.content}
      </Item>
    ))}
  </ul>
);

export default List;
