export const InputTodo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
