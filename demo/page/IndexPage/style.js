import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styleSheet = {
  Content: { display: "flex", minWidth: "100%", minHeight: "400px", marginBottom: "30px" },
  contentBox: { minWidth: "calc(33% - 26.7px)", height: "400px", overflow: "hidden" },
  centralContentBox: { minWidth: "calc(33% - 26.6px)", height: "400px", overflow: "hidden" },
  title: { marginBottom: "5px", minWidth: "100%", color: "#282c34", maxWidth: "11em", paddingTop: "0", fontSize: "1.6em" },
  article: { fontSize: "20px", marginTop: "0px", marginBottom: "0px" },
  exampleCommon: {
    borderRadius: "20px",
    marginLeft: "40px",
    height: "350px",
    border: "1px solid black",
    overflow: "hidden",
  },
  exampleBox1: {
    minWidth: "calc(67% - 13.3px)",
  },
  exampleCode: { textAlign: "center", color: "gray", fontSize: "50px", fontWeight: "1000", paddingTop: "150px" },
  exampleBox2: {
    minWidth: "calc(67% - 413.3px)",
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "50px",
  },
  exampleBox3: {
    minWidth: "calc(67% - 13.3px)",
  },
};

const { classes } = jss.createStyleSheet(styleSheet).attach();
export default classes;
