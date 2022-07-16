import React from 'react';
import './sponsor.css'

import sponsor2 from "../../assets/2.svg"
import sponsor3 from "../../assets/3.svg"
import sponsor4 from "../../assets/4.svg"
import sponsor5 from "../../assets/5.svg"
import sponsor6 from "../../assets/6.svg"
import sponsor7 from "../../assets/7.svg"
import sponsor8 from "../../assets/8.svg"
import sponsor9 from "../../assets/9.svg"
import sponsor10 from "../../assets/10.svg"
import sponsor11 from "../../assets/11.svg"
import sponsor12 from "../../assets/12.svg"
import sponsor13 from "../../assets/13.svg"
import sponsor14 from "../../assets/14.svg"
import sponsor15 from "../../assets/15.svg"
import sponsor16 from "../../assets/16.svg"
import sponsor17 from "../../assets/17.svg"
import sponsor18 from "../../assets/18.svg"
import sponsor19 from "../../assets/19.svg"
import sponsor20 from "../../assets/20.svg"



const sponsorsrc = [
 
  {
    src: sponsor2
  },
  {
    src: sponsor3
  },
  {
    src: sponsor4
  },
  {
    src: sponsor5
  },
  {
    src: sponsor6
  },
  {
    src: sponsor7
  },
  {
    src: sponsor8
  },
  {
    src: sponsor9
  },
  {
    src: sponsor10
  },
  {
    src: sponsor11
  },
  {
    src: sponsor12
  },
  {
    src: sponsor13
  },
  {
    src: sponsor14
  },
  {
    src: sponsor15
  },
  {
    src: sponsor16
  },
  {
    src: sponsor17
  },
  {
    src: sponsor18
  },
  {
    src: sponsor19
  },
  {
    src: sponsor20
  },
]





const Sponsor = () => {

    const sponsor1 = sponsorsrc.slice(0, 12) 
    const sponsor2 = sponsorsrc.slice(12, 20) 

    return (
        <div className='sponsor'>
            <div className='sponsor-cnt'> 
                <div className='spr-itm'>
                    {sponsor1.map((item,index)=>(    
                    <div className='sponsor-itm itm-1'>
                        <img src={item.src} key={index}/>
                    </div>
                    ))}
                </div>
             
                <div className='spr-itm'>
                    {sponsor2.map((item,index)=>(
                        <div className='sponsor-itm itm-2'>
                            <img src={item.src} key={index}/>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    )
}

export default Sponsor;
