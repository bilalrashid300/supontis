import React from 'react'
import { useTranslation } from 'react-i18next';
import './roadmap.css'

function Roadmap() {
  const { t } = useTranslation();

  return (
    <div className='rdmap' id='roadmap'>
        <div className='rdmap-cnt'>
            <h2>{t('roadmap')}</h2>
            <div className='rdmap-itm-cnt'>
                <div className='rdmap-itm'>
                    <h3>Q2 2022</h3>
                    <ul>
                        <li>{t('q2_1')}</li>
                        <li>{t('q2_2')}</li>
                        <li>{t('q2_3')}</li>
                        <li>{t('q2_4')}</li>
                        <li>{t('q2_5')}</li>
                        <li>{t('q2_6')}</li>
                        <li>{t('q2_7')}</li>
                    </ul>
                </div>

                <div className='rdmap-itm'>
                    <h3>Q3 2022</h3>
                    <ul>
                        <li>{t('q3_1')}</li>
                        <li>{t('q3_2')}</li>
                        <li>{t('q3_3')}</li>
                        <li>{t('q3_4')}</li>
                        <li>{t('q3_5')}</li>
                        <li>{t('q3_6')}</li>
                        <li>{t('q3_7')}</li>
                    </ul>
                </div>

                <div className='rdmap-itm'>
                    <h3>Q4 2022</h3>
                    <ul>
                        <li>{t('q4_1')}</li>
                        <li>{t('q4_2')}</li>
                        <li>{t('q4_3')}</li>
                        <li>{t('q4_4')}</li>
                        <li>{t('q4_5')}</li>
                        <li>{t('q4_6')}</li>
                        <li>{t('q4_7')}</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Roadmap