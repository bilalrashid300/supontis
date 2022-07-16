import React from 'react'
import './token.css'

import tokenweb from '../../assets/tke-dstr.svg'
import tokenmbl from '../../assets/tke-dstr-mbl.svg'


function Token() {
  return (
    <div className='tkr-dstr'>
        <div className='tkr-dstr-cont'>

             <img src={tokenweb} className='tkr-web' width='100%'/>
             <img src={tokenmbl} className='tkr-mbl' width='100%'/>

        </div>
    </div>
  )
}

export default Token;