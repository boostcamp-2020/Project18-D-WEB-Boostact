import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const style = {
  DocumentPage: { minWidth: "50%", minHeight: "700px", paddingLeft: "20%", marginRight: "30%" },
  ASide: { position: "fixed", right: "0px", marginTop: "-90px", paddingTop: "90px", width: "30%", minHeight: "100%", background: "#f7f7f7" },
  codeBox: { width: "100%", backgroundColor: "#1E1E1E", color: "white", paddingLeft: "10px", paddingBottom: "10px", borderRadius: "10px" },
  paddingRightAndBottom: { paddingRight: "100px", marginBottom: "100px" },
  innerCodeBox: { marginRight: "20px", color: "white", background: "red", borderRadius: "30px" },
  explaination: { marginTop: "30px" },
};

const { classes } = jss.createStyleSheet(style).attach();

export default classes;
