import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import './Carousel.css'


function Carousel() {
  const useStyles = makeStyles(() => ({
    carouselItems: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textDecoration: "uppercase",
      color: "white",
    }
  }))
  const [data, setData] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

  const fetchData = async () => {
    const {data} = await axios.get(url)

    setData(data)
  }
  console.log(data)

  useEffect(() => {
    fetchData()
  }, [])

  const items = data.map((coin) => {

    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link 
      className={classes.carouselItem} 
      to={`/coin/${coin.id}`}
      >
       <img 
       src={coin?.image}
       alt={coin?.name}
       height="50"
       style={{ marginBottom: 10}}
       />

       <span>
        {coin?.symbol}
        &nbsp;
       
        <span>
          {profit && "+"} {coin?.price_change_percentage_24h.toFixed(2)}%
        </span>
       </span>

       <span style={{ fontSize: 18, fontWeight: 500}}>
        {coin?.symbol} {coin?.current_price.toLocaleString()}
       </span>
      </Link>
    )
  })

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 8,
    }
  }



  const classes = useStyles()
  return (
    <div className={classes.carousel}>
        <AliceCarousel
         mouseTracking
         infinite
         autoPlayInterval={1000}
         animationDuration={1500}
         disableDotsControls
         responsive={responsive}
         disableButtonsControls
         autoPlay
         items={items}
        />
      <div className='container'>
      </div>
    </div>
  )
}

export default Carousel
