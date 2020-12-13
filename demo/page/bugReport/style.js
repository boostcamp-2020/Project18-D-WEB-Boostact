import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styleSheet = {
  developReport: { paddingLeft: "25%", paddingRight: "25%" },
  title: {
    textShadow: "1px 1px 1px #000",
    fontSize: "24px",
    fontWeight: "1000",
  },
  date: {
    textShadow: "1px 1px 1px #000",
    fontSize: "18px",
    fontWeight: "1000",
    color: "#61DAFB",
    marginBottom: "0px",
    marginTop: "0px",
    padding: "0px",
  },
  report: {
    fontSize: "14px",
  },
};

const { classes } = jss.createStyleSheet(styleSheet).attach();
export default classes;
