import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  DocumentPage: { minWidth: "60%", paddingLeft: "20%" },
  ASide: { width: "20%", minHeight: "700px", background: "#f7f7f7" },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
