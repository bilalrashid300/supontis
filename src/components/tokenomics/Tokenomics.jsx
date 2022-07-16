import React from 'react'
import { useTranslation } from 'react-i18next';
import './tokenomics.css'

function Tokenomics() {
  const { t } = useTranslation();

  return (
    <div className='tke' id='tokenomics'>
        <div className='tke-cnt'>
            <div className='tke-itm-1'>
                <h2>{t('nav_tokenomics')} </h2>
                <p>{t('tokenomics_desc')} </p>
                <a href='#'><button type="button" className='spt-btn pr-btn tke-btn'>{t('enter_presale')}</button></a>
            </div>

            <div className='tke-dstr tke-itm-2'>
                <div className='tke-dstr-itm'>
                    <h6>{t('tokenomics_box1')} </h6>
                    <h3>$PON (BEP20)</h3>
                </div>

                <div className='tke-dstr-itm'>
                    <h6>{t('tokenomics_box2')}  </h6>
                    <h3>10,000,000,000</h3>
                </div>

                <div className='tke-dstr-itm'>
                    <h6>{t('tokenomics_box3')} </h6>
                    <h3>2,500,000,000</h3>
                </div>

                <div className='tke-dstr-itm'>
                    <h6>{t('tokenomics_box4')} </h6>
                    <h3>1 $PON = 0.0056</h3>
                </div>

                <div className='tke-dstr-itm'>
                    <h6>{t('tokenomics_box5')} </h6>
                    <h3>18 July 2022 - 18th November 2022</h3>
                </div>

                <div className='tke-dstr-itm'>
                    <h6>{t('tokenomics_box6')} </h6>
                    <h3>18th November 2022</h3>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Tokenomics