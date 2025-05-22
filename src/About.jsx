import appStyles from "./App.module.css";
import aboutStyles from "./About.module.css";
import { Header } from "./Header";
import imgUrl from "./antquacking.png";

export function About() {
  return (
    <div className={appStyles.AppContainer}>
      <Header />
      <div className={aboutStyles.AboutDescription}>
        Hi,I'm An,love
        <span style={{ color: "#f41919" }}>
          {" "}
          drawing,coding,creating creative work
        </span>
        .Currently,i'm learning{" "}
        <span style={{ color: "#f41919" }}> Javascript,React</span>{" "}
      </div>
      <div className={aboutStyles.ImageContainer}>
        <img src={imgUrl} alt="antquackingishere" style={{ width: "100%" }} />
      </div>
    </div>
  );
}
