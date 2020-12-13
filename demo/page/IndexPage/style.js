import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styleSheet = {
  Content: { display: "flex", minWidth: "100%", minHeight: "450px", marginBottom: "30px" },
  contentBox: { minWidth: "calc(33% - 26.7px)", height: "450px", overflow: "hidden" },
  centralContentBox: { minWidth: "calc(33% - 26.6px)", height: "400px", overflow: "hidden" },
  title: {
    textShadow: "0.5px 0.5px 0.5px #000",
    marginBottom: "5px",
    minWidth: "100%",
    color: "#282c34",
    maxWidth: "11em",
    paddingTop: "0",
    fontSize: "1.6em",
  },
  article: { fontSize: "20px", marginTop: "0px", marginBottom: "0px" },
  exampleCommon: {
    boxShadow: "5px 0px",
    borderRadius: "20px",
    marginLeft: "40px",
    height: "350px",
    border: "1px solid black",
    overflow: "hidden",
  },
  exampleBox1: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "calc(67% - 13.3px)",
  },
  exampleCode: {
    textAlign: "center",
    color: "gray",
    fontSize: "50px",
    fontWeight: "1000",
  },
  exampleBox2: {
    display: "flex",
    alignItems: "center",
    flexShrink: 1,
    justifyContent: "center",
    height: "300px",
    minWidth: "calc(67% - 413.3px)",
    paddingLeft: "200px",
    paddingRight: "200px",
    paddingTop: "25px",
    paddingBottom: "25px",
  },
  exampleBox3: {
    minWidth: "calc(67% - 13.3px)",
  },
  banner: {
    backgroundColor: "#282c34",
    minWidth: "100%",
    paddingTop: "60px",
    paddingBottom: "60px",
    textAlign: "center",
    overflow: "hidden",
  },
  Boostact: { fontSize: "100px", color: "#61dafb", marginBottom: "0px", marginTop: "40px", textShadow: "10px 10px 10px #000" },
  description: { textShadow: "2px 2px 2px #000", fontSize: "28px", color: "white" },
  startButton: {
    paddingLeft: "calc(50% - 118px)",
    display: "flex",
    fontSize: "22px",
  },
  leftButton: { background: "#12aaaaaa" },
  contents: { minWidth: "70%", marginLeft: "15%", marginRight: "15%" },
  divider: { marginTop: "0px", marginBottom: "90px" },

  Gist: { width: "100%", height: "350px", display: "flex", marginTop: "100px", marginBottom: "100px", overflow: "hidden" },
  gistTitle: { marginBottom: "20px", color: "#6d6d6d", paddingTop: "0", fontWeight: "800", fontSize: "24px" },
  leftRightContents: { maxWidth: `calc(33% - 26.7px)` },
  gistWriting: { fontSize: "18px" },
  centerContents: { maxWidth: `calc(33% - 26.7px)`, marginLeft: "40px", marginRight: "40px" },
};

const { classes } = jss.createStyleSheet(styleSheet).attach();
export default classes;
