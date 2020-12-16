import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  isClicked: { display: "flex", flexDirection: "column" },
  isNotClicked: { display: "none" },
  buttonClicked: {
    cursor: "pointer",
    fontSize: "14px",
    padding: "10px",
    border: "0px",
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "bold",
  },
  buttonNotClicked: {
    cursor: "pointer",
    fontSize: "14px",
    padding: "10px",
    border: "0px",
    backgroundColor: "transparent",
    color: "#6d6d6d",
    fontWeight: "bold",
  },
  li: { cursor: "pointer", fontWeight: "normal", "&:hover": { color: "#6d6d6d" } },
  liClicked: { cursor: "pointer", fontWeight: "bold" },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
