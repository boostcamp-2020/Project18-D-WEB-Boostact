import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styleSheet = {
  developReport: { paddingLeft: "30%", paddingRight: "30%" },
  date: {
    marginBottom: "0px",
    marginTop: "0px",
    padding: "0px",
  },
};

const { classes } = jss.createStyleSheet(styleSheet).attach();
export default classes;
