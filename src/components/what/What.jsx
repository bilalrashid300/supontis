import React from 'react'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'

import { useTranslation } from 'react-i18next';
import './what.css'

function What() {
  const { t } = useTranslation();
  
  return (
    <div className='wht' id='about'>
        <div className='wht-cnt'>
            <div className='wht-itm itm-1'>
                <h3>{t('what_is_supontis')}?</h3>
            </div>

            <div className='wht-itm itm-2'>
                <img src ={icon1}/>
                <p>{t('what_is_supontis_para_1')}</p>

            </div>
            
            <div className='wht-itm itm-3'>
                <img src ={icon2}/>
                <p>{t('what_is_supontis_para_2')}</p>

            </div>
           

        </div>
    </div>
  )
}

export default What