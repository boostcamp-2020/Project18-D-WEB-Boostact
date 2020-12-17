import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styles = {
  container: {
    position: "fixed",
    background: "#20232a",
    display: "flex",
    justifyContent: "space-between",
    height: "60px",
    padding: "0px 80px",
    fontSize: "18px",
    color: "white",
    minWidth: "calc(70% + 20px)",
    paddingLeft: "calc(15% - 20px)",
    paddingRight: "15%",
    zIndex: "3",
  },

  commonHeaderDiv: {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    font: "18px",
  },

  centerHeaderDiv: {
    paddingLeft: "40px",
  },

  buttonStyle: {
    display: "flex",
    flexFlow: "column",
    padding: "10px 20px",
    color: "white",
    textDecoration:"none",

    "&:hover": {
      color: "#61dafb",
      cursor: "pointer",
    },
  },

  github: {
    textDecoration: "none",
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    color: "white",
    verticalAlign: "baseline",
  },
};

jss.setup(preset());

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;
