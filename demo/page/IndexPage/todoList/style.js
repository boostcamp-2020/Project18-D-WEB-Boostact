import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  todoPanel: { width: "90%", marginLeft: "auto", marginTop: "5rem", marginRight: "auto", border: "1px solid #F2F2F2", borderRadius: "10px" },
  todoHeader: {
    backgroundColor: "#424857",
    margin: "0px",
    padding: "0px",
    height: "3rem",
    color: "white",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
  inputDiv: { display: "flex", flexDirection: "row" },
  input: {
    margin: "0px",
    padding: "0px",
    flex: 1,
    paddingLeft: "10px",
    width: "90%",
    height: "2.5rem",
    backgroundColor: "#61dafb",
    border: "none",
  },
  todoList: { minHeight: "0rem" },
  checkedName: { flex: 1, textDecoration: "line-through" },
  notCheckedName: { flex: 1 },
  TodoListItem: { display: "flex", height: "2rem", alignItems: "center", padding: "0px", border: "1px solid #F2F2F2" },
  remove: {
    width: "10%",
    height: "100%",
    padding: "0px",
    margin: "0px",
    backgroundColor: "#ffe564",
    display: "flex",
    color: "white",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  },
  addList: {
    width: "10%",
    backgroundColor: "#ffe564",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
