import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styles = {
  hoverA: {
    color: "white",
    marginTop: "10px",
    paddingLeft: "5px",
    textDecoration: "none",
    fontSize: "14px",
    "&:hover": {
      color: "#61dafb",
    },
  },
};

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;
