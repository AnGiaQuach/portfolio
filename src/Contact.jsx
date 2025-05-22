import appStyles from "./App.module.css";
import contactStyles from "./Contact.module.css";
import { Header } from "./Header";

export function Contact() {
  return (
    <div className={appStyles.AppContainer}>
      <Header />

      <div className={contactStyles.ContactContainer}>
        <div
          className={`${contactStyles.ContactCard} ${contactStyles.githubLink}`}
        >
          <a href="https://github.com/AnGiaQuach">
            https://github.com/AnGiaQuach
          </a>
        </div>
        <div
          className={`${contactStyles.ContactCard} ${contactStyles.emailLink}`}
        >
          <a href="mailto:fartinghous@gmail.com">fartinghous@gmail.com</a>
        </div>
        <div
          className={`${contactStyles.ContactCard} ${contactStyles.instaLink}`}
        >
          <a
            style={{ color: "deeppink" }}
            href="https://www.instagram.com/an_thich_uong_latte/"
          >
            https://www.instagram.com/an_thich_uong_latte/
          </a>
        </div>
      </div>
    </div>
  );
}
