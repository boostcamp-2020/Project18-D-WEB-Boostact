import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  navContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
