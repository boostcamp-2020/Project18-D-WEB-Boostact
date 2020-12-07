export const container = {
  height: "100%",
};

export const isHover = {
  display: "flex",
  flexFlow: "column",
  padding: "10px 20px",
  color: "#61dafb",
  cursor: "pointer",
};

export const isNotHover = {
  display: "flex",
  flexFlow: "column",
  padding: "10px 20px",
  color: "white",
};

export const onPage = (length) => {
  const len = length * 18;
  return {
    position: "absolute",
    background: "#61dafb",
    width: String(len) + "px",
    height: "3px",
    top: "65px",
  };
};
