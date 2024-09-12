export const InputTodo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        // type="text"
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
