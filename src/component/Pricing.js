import './pricing.css'

import React from 'react'
import { Link } from 'react-router-dom'


const Pricing = () => {
    return (
        <>
            <div className='pricing'>
                <div className='card-container'>
                    {/* first card */}
                    <div className='card'>
                        <h3 >- Basic -</h3>
                        <span className='bar'></span>
                        <p className='btc'> $ 100</p>
                        <p >- 3 Days -</p>
                        <p >- 3 Pages -</p>
                        <p >- Featured -</p>
                        <p >- Responsive Design -</p>
                        <Link to="/contct" className='btn'> Purchase </Link>
                    </div>

                    {/* second card */}

                    <div className='card'>
                        <h3 >- Premium -</h3>
                        <span className='bar'></span>
                        <p className='btc'> $ 200</p>
                        <p >- 2 Days -</p>
                        <p >- 5 Pages -</p>
                        <p >- Featured -</p>
                        <p >- Responsive Design -</p>
                        <Link to="/contct" className='btn'> Purchase </Link>
                    </div>

                    {/* third card */}

                    <div className='card'>
                        <h3 >- Business -</h3>
                        <span className='bar'></span>
                        <p className='btc'> $ 300</p>
                        <p >- 5 Days -</p>
                        <p >- 8 Pages -</p>
                        <p >- Featured -</p>
                        <p >- Responsive Design -</p>
                        <Link to="/contct" className='btn'> Purchase </Link>
                    </div>
                </div>
                Pricing</div>

        </>
    )
}


export default Pricing