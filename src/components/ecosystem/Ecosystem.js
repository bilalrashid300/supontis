import React from 'react'
import esyImg from '../../assets/esyImg.jpg'
import { useTranslation } from 'react-i18next';
import './ecosystem.css';

function Ecosystem() {
  const { t } = useTranslation();

  return (
    <div className='esy'>
        <div className='esy-cnt'>

            <div className='esy-itm'>
                <h2>{t('the_supontis_ecosystem')}</h2>
                <div>
                    <h3>{t('supontis_dao_heading')}</h3>
                    <p>{t('supontis_dao_desc')}</p>
                </div>

                <div>
                    <h3>{t('supontis_staking_heading')}</h3>
                    <p>{t('supontis_staking_desc')}</p>
              </div>

                <div>
                    <h3>{t('supontis_token_heading')}</h3>
                    <p>{t('supontis_token_desc')}</p>
                </div>
            </div>

            <div className='esy-itm-img'>
                <img src={esyImg}/>
            </div>
        </div>
    </div>
  )
}

export default Ecosystem