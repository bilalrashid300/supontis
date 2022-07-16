import React, { useState } from "react";
import "flag-icon-css/css/flag-icons.min.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/mainLogo.svg";

import "./navbar.css";
import ReactFlagsSelect from "react-flags-select";
import { getCode, getCodeForFlag } from "../../helper/utilityHelper"
import i18n from "../../i18n";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [selected, setSelected] = useState(getCodeForFlag('en'));
  
  const handleLocaleChange = (code) => {
    setSelected(code);
    i18n.changeLanguage(getCode(code));
  }; 

  return (
    <div className="header">
      <div className="container">
        <div>
          <img src={logo} width="200px" alt="logo" className="logo" />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#about">{t('nav_about')}</a>
          </li>
          <li>
            <a href="#whysupontis">{t('nav_why_supontis')}</a>
          </li>
          <li>
            <a href="#tokenomics">{t('nav_tokenomics')}</a>
          </li>
          <li>
            <a href="#roadmap">{t('nav_roadmap')}</a>
          </li>
          <li>
            <a href="#faq">{t('nav_faq')}</a>
          </li>
          <li className="locale-switcher">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => handleLocaleChange(code)}
              countries={["US", "DE", "ES", "FR", "TR"]}
              customLabels={{
                US: t("lang_english"),
                DE: t("lang_german"),
                ES: t("lang_spanish"),
                FR: t("lang_french"),
                TR: t("lang_turkish"),
              }}
            />
          </li>

          <div className="btn-cnt">
            <button className="spt-btn lg-btn hd-btn">{t('audit')}</button>
          </div>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes className="menu" size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={24} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
