import React from 'react'
import './CSS/home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>

            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon banner" className='home__image'/>
                
            {/* Layout Home Row with 2  then 3 then 1 Components inside. This is inside the home Container */}
            <div className="home__row">
                {/* Component */}
                < Product />
                < Product />
                {/* Component */}
            </div>
            <div className="home__row">
                < Product />
                < Product />
                < Product />
                {/* Component */}
                {/* Component */}
                {/* Component */}
            </div>
            <div className="home__row">
                {/* Component */}
                < Product />
            </div>
            </div>

          
        </div>
    )
}

export default Home
