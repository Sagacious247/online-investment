import React from 'react'

function Package({ header, price, firstPack, firstPackPrice, 
  secondPack, secondPackPrice, thirdPack, thirdPackPrice, fourthPack,
  fourthPackPrice, bonusPack, bonusPackPrice, duration, total}) {
  return (
    <div className='package'>
        <div className='container'>
         <div className='card'>
           <div className='content'>
            <h2>{header}</h2>
            <div className='price'>
                <small>$</small>
                <span>{price}</span>
            </div>

            <div className='content__wrapper'>
              <div className='content__link'> 
                <span>{firstPack}</span>
                <span>{firstPackPrice}</span>
              </div>
              <div className='content__link'> 
                <span>{secondPack}</span>
                <span>{secondPackPrice}</span>
              </div>
              <div className='content__link'> 
                <span>{thirdPack}</span>
                <span>{thirdPackPrice}</span>
              </div>
              <div className='content__link'> 
                <span>{fourthPack}</span>
                <span>{fourthPackPrice}</span>
              </div>
              <div className='content__link'> 
                <span>{bonusPack}</span>
                <span>{bonusPackPrice}</span>
              </div>
              <div className='content__link'> 
                <span>{duration}</span>
                <span>{total}</span>
              </div>
            </div>

            <div className='amountDiv'>
             <p></p>
             <p></p>
             <input type='number' placeholder='Enter amount'/>
            </div>

            <button className='btn'>Join Plan</button>
           </div>
         </div>
        </div>
       
    </div>
  )
}

export default Package
