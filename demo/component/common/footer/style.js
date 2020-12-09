import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#20232a",
    color: "#999999",
    fontSize: "16px",
    marginTop: "100px",
    padding: "70px",
  },
  developersContainer: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    marginTop: "10px",
    marginBottom: "10px",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
