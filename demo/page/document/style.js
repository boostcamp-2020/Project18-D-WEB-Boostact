import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  DocumentPage: { minWidth: "50%", minHeight: "700px", paddingLeft: "20%", marginRight: "calc(30% + 100px)" },
  ASide: { position: "fixed", right: "0px", marginTop: "-90px", paddingTop: "90px", width: "30%", minHeight: "100%", background: "#f7f7f7" },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
