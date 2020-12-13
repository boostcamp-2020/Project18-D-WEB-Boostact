import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  navContainer: {
    width: "30%",
    backgroundColor: "#f7f7f7",
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
