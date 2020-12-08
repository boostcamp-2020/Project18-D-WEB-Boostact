export const style = {
  isClicked: { display: "flex", flexDirection: "column" },
  isNotClicked: { display: "none" },
  titleClicked: {
    cursor: "pointer",
    fontWeight: "bold",
  },
  titleNotClicked: {
    cursor: "pointer",
  },
  buttonClicked: {
    cursor: "pointer",
    fontSize: "14px",
    padding: "10px",
    border: "0px",
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "bold",
  },
  buttonNotClicked: {
    cursor: "pointer",
    fontSize: "14px",
    padding: "10px",
    border: "0px",
    backgroundColor: "transparent",
    color: "#6d6d6d",
    fontWeight: "bold",
  },
  iconClicked: { marginLeft: "3px", fontSize: "10px", color: "black" },
  iconNotClicked: { marginLeft: "3px", fontSize: "10px" },
  li: { cursor: "pointer" },

  // hover 되었을 때: #6d6d6d
  // click 되었을 때: fontWeight: "bold"
};
