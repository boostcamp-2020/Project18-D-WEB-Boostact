import Boostact from "../../src/boostact/Boostact";
import "@fortawesome/fontawesome-free/js/all";
/** @jsx Boostact.createElement */

const Todo = () => {
  const [todo, setTodo] = Boostact.useState([
    {
      id: 0,
      name: "useState 구현하기",
      isDone: false,
    },
    {
      id: 1,
      name: "TypeScript 공부하기",
      isDone: false,
    },
  ]);
  let id = Object.keys(todo).length;

  const onInsert = (name) => {
    id += 1;
    const unit = [
      {
        id,
        name,
        checked: false,
      },
    ];

    setTodo(todo.concat(unit));
  };

  const onDelete = (id) => {
    const afterDelete = todo.filter((todo) => todo.id !== id);
    setTodo(afterDelete);
  };

  const onToggle = (id) => {
    setTodo(todo.map((todoItem) => (todoItem.id === id ? { ...todoItem, isDone: !todoItem.isDone } : todoItem)));
  };

  return (
    <div>
      <div
        className="TodoPanel"
        style={{ width: "90%", marginLeft: "auto", marginTop: "5rem", marginRight: "auto", border: "1px solid #F2F2F2", borderRadius: "10px" }}
      >
        <div
          className="page-name"
          style={{
            backgroundColor: "#6976BF",
            margin: "0px",
            padding: "0px",
            height: "7rem",
            color: "white",
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          Boost to do
        </div>
        <TodoInsert onInsert={onInsert} />
        <TodoList todo={todo} onDelete={onDelete} onToggle={onToggle} />
      </div>
    </div>
  );
};

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = Boostact.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = (e) => {
    onInsert(value);
    setValue("");
    e.preventDefault();
  };
  return (
    <form style={{ display: "flex" }}>
      <input
        placeholder="할 일이 있나요?"
        value={value}
        onInput={onChange}
        style={{ margin: "0px", padding: "0px", paddingLeft: "10px", width: "90%", height: "3rem", backgroundColor: "#F2DFEB", border: "none" }}
      />
      <button
        onClick={onClick}
        style={{
          width: "9%",
          height: "3rem",
          margin: "0px",
          padding: "0px",
          backgroundColor: "#899DD9",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <i className="fas fa-plus" />
      </button>
    </form>
  );
};

const TodoList = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="TodoList" style={{ minHeight: "40rem" }}>
      {todo.map((todoItem) => (
        <TodoListItem todoItem={todoItem} key={todoItem.id} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

const TodoListItem = ({ todoItem, onDelete, onToggle }) => {
  const { id, name, isDone } = todoItem;
  const clilckDone = () => {
    if (isDone)
      return (
        <div className="checkbox" onClick={() => onToggle(id)} style={{ display: "flex", cursor: "pointer", fontSize: "1.5rem", flex: "1" }}>
          <i className="fas fa-check-square" style={{ color: "lightgray" }} />
          <div className="name" style={{ marginLeft: "1rem", textDecoration: "line-through" }}>
            {name}
          </div>
        </div>
      );
    return (
      <div className="checkbox" onClick={() => onToggle(id)} style={{ display: "flex", cursor: "pointer", fontSize: "1.5rem", flex: "1" }}>
        <i className="far fa-square" style={{ color: "lightgray" }} />
        <div className="name" style={{ marginLeft: "1rem" }}>
          {name}
        </div>
      </div>
    );
  };
  return (
    <div className="TodoListItem" style={{ display: "flex", alignItems: "center", padding: "1.5rem", border: "1px solid #F2F2F2" }}>
      {clilckDone()}
      <div
        className="remove"
        onClick={() => onDelete(id)}
        style={{
          width: "10%",
          height: "50px",
          backgroundColor: "#899DD9",
          display: "flex",
          color: "white",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-minus"></i>
      </div>
    </div>
  );
};

export default Todo;
