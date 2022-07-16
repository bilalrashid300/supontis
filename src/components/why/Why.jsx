import React from 'react'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import icon5 from '../../assets/icon5.svg'
import { useTranslation } from 'react-i18next';
import './why.css'


function Why() {
  const { t } = useTranslation();

  return (
    <div className='why' id='whysupontis'>
        <div className='why-cnt'>
            <h2>{t('why_supontis')}?</h2>
            <div className='why-itm-cnt'>
                <div className='why-itm'>
                    <img src={icon3} alt='icon'/>
                    <h3>{t('why_supontis_h1')}</h3>
                    <p>{t('why_supontis_d1')}</p>
                </div>

                <div className='why-itm'>
                    <img src={icon4} alt='icon'/>
                    <h3>{t('why_supontis_h2')}</h3>
                    <p>{t('why_supontis_d2')}</p>
                </div>

                <div className='why-itm'>
                    <img src={icon5} alt='icon'/>
                    <h3>{t('why_supontis_h3')}</h3>
                    <p>{t('why_supontis_d3')}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Why