import { CSSProperties } from "react";

import FacebookIcon from "../../assets/icons/Facebook.tsx";
import TelegramIcon from "../../assets/icons/Telegram.tsx";
import YoutubeIcon from "../../assets/icons/Youtube.tsx";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <section className="main-footer__social-media">
        <h2 className="social-media__title">Follow US</h2>
        <ul className="social-media__accounts">
          <li className="social-media__account">
            <a
              href="https://www.facebook.com"
              target="_blank"
              data-social-name="Facebook"
              className="social-media__account-link"
              style={{ "--color": "#0566ff" } as CSSProperties}
            >
              <FacebookIcon />
            </a>
          </li>
          <li className="social-media__account">
            <a
              href="https://www.telegram.com"
              target="_blank"
              data-social-name="Telegram"
              className="social-media__account-link"
              style={{ "--color": "#2aa3dc" } as CSSProperties}
            >
              <TelegramIcon />
            </a>
          </li>
          <li className="social-media__account">
            <a
              href="https://www.youtube.com"
              target="_blank"
              data-social-name="Youtube"
              className="social-media__account-link"
              style={{ "--color": "#fe0000" } as CSSProperties}
            >
              <YoutubeIcon />
            </a>
          </li>
        </ul>
        <p>
          <a href="#">Back to top</a>
        </p>
      </section>
    </footer>
  );
}
