import React from "react";
import logo from "../../assets/logo.svg";
import twt from "../../assets/twitter.svg";
import ig from "../../assets/instagram.svg";
import tlg from "../../assets/telegram.svg";
import { useTranslation } from "react-i18next";

import "./footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="ftr">
      <div className="ftr-cnt">
        <div className="ftr-itm-cnt">
          <div className="ftr-itm">
            <img src={logo} alt="logo" />
          </div>

          <div className="ftr-itm">
            <ul>
              <li>
                <a href="#about">{t("nav_about")}</a>
              </li>
              <li>
                <a href="#whysupontis">{t("nav_why_supontis")}</a>
              </li>
              <li>
                <a href="#tokenomics">{t("nav_tokenomics")}</a>
              </li>
              <li>
                <a href="#roadmap">{t("nav_roadmap")}</a>
              </li>
              <li>
                <a href="#faq">{t("nav_faq")}</a>
              </li>
            </ul>
          </div>

          <div className="ftr-itm">
            <a href="#">
              <button type="button" className="spt-btn lg-btn">
                {" "}
                {t("audit")}
              </button>
            </a>
          </div>
        </div>
        <span className="line"></span>

        <div className="ftr-lst">
          <h5>Supontis, 2022</h5>
          <div className="scl-cnt">
            <img src={twt} alt="twitter logo" />
            <img src={ig} alt="instagram logo" />
            <img src={tlg} alt="telegram logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
