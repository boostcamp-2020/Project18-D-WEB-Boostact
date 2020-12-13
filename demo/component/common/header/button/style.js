import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const styles = {
  container: `
    height: 100%;
  `,

  isHover: {
    display: "flex",
    flexFlow: "column",
    padding: "10px 20px",
    color: "white",

    "&:hover": {
      color: "#61dafb",
      cursor: "pointer",
    },
  },
};

const onPage = (length) => {
  const len = length * 18;
  return {
    position: "absolute",
    background: "#61dafb",
    width: String(len) + "px",
    height: "3px",
    top: "57px",
  };
};

const { classes } = jss.createStyleSheet(styles).attach();

export { classes, onPage };
