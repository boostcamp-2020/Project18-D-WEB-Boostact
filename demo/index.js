import Boostact from "../src/boostact/Boostact";
import App from "./App";
/** @jsx Boostact.createElement */

const loadFonts = async () => {
  const font = new FontFace("IBMPlexSansKR-Regular", "url(https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff)");
  await font.load();
  document.fonts.add(font);
  document.body.classList.add("fonts-loaded");
};
loadFonts();

const container = document.getElementById("root");
Boostact.render(<App />, container);
