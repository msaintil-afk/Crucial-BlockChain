import { styled } from '@mui/system';
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { TrendingCoins } from "../../api";





const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  },[]);

  


  const items = trending.map((coin) => {
    let gain =coin['market_cap_change_percentage_24h'] >= 0;
    let gainNumber: number = coin['market_cap_change_percentage_24h'];
    let currentPrice: number = coin['current_price']
    let currentPricemod = currentPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    



    return (
      <div style={{display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      textTransform: 'uppercase',
      marginBottom: '20%', }}>
        <img 
          src={coin['image']}
          alt={coin['name']}
          height="80"
          style={{ marginBottom: 10}}
        />
        <span> {coin['symbol']}
          &nbsp;
          <span>{gain && '+'}{gainNumber.toFixed(2)}%</span>
          <br />
          <span style={{ fontSize: 22, fontWeight: 500 }}>${currentPricemod}</span>
        </span>
        </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
      <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
      </div>
      
  );
};

export default Carousel;