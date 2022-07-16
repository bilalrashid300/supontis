import React from "react";
import seal from "../../assets/seal.svg";
import Timer from "../timer/Timer";
import "./header.css";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="spt__header section__padding" id="home">
      <img src={seal} className="seal" />
      <div className="spt-cont">
        <div className="spt__header-content">
          <h1 className="hdr-txt">{t('site_title')}</h1>
          <p>{t('bridge_between')}</p>
          <h3>ETH, BNB, TRX, FTM</h3>
          <p>{t('faster_than')}</p>

          <div className="spt__btn-cnt">
            <a href="#">
              <button type="button" className="spt-btn pr-btn">
              {t('enter_presale')}
              </button>
            </a>
            <a href="#">
              <button type="button" className="spt-btn wt-btn">
              {t('whitepaper')}
              </button>
            </a>
          </div>
        </div>

        <div className="spt__header-col-2">
          <h3>{t('presale_begins_in')}</h3>
          <div>
            {" "}
            <Timer />{" "}
          </div>
          <div className="rdn-cont">
            <div className="rdn-itm">
              <h3>{t('presale_round')} 1</h3>
              <p>15% {t('allocation')}</p>
              <p>15% {t('bonuses')}</p>
              <p>18th July - 18th September</p>
            </div>

            <div className="rdn-itm">
              <h3>{t('presale_round')} 2</h3>
              <p>10% {t('allocation')}</p>
              <p>10% {t('bonuses')}</p>
              <p>19th Sept - 18th Nov</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
