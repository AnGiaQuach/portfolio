import appStyles from "./App.module.css";
import contactStyles from "./Contact.module.css";
import { Header } from "./Header";

export function Contact() {
  return (
    <div className={appStyles.AppContainer}>
      <Header />

      <div className={contactStyles.ContactContainer}>
        <div
          onClick={() =>
            (window.location.href = "https://github.com/AnGiaQuach")
          }
          className={`${contactStyles.ContactCard} ${contactStyles.githubLink}`}
        >
          <a href="https://github.com/AnGiaQuach">
            https://github.com/AnGiaQuach
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={contactStyles.ArrowIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
        <div
          className={`${contactStyles.ContactCard} ${contactStyles.emailLink}`}
          onClick={() =>
            (window.location.href = "mailto:fartinghous@gmail.com")
          }
        >
          <a href="mailto:fartinghous@gmail.com">fartinghous@gmail.com</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={contactStyles.ArrowIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
        <div
          className={`${contactStyles.ContactCard} ${contactStyles.instaLink}`}
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/an_thich_uong_latte/")
          }
        >
          <a
            style={{ color: "deeppink" }}
            href="https://www.instagram.com/an_thich_uong_latte/"
          >
            https://www.instagram.com/an_thich_uong_latte/
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={contactStyles.ArrowIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
