import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import anime from '../../assets/images/anime.png'
// import animegirl from '../../assets/images/animegirl.jpg'
// import animegirl2 from '../../assets/images/animegirl2.jpg'
import demonslayer from '../../assets/images/demonslayer.webp'
import boredape1 from '../../assets/images/boredape1.jpg'
import './Dapp.css';
// const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

const items = [
    <img src={anime} />,
    // <img src={animegirl}  />,
    // <img src={animegirl2}  />,
    // <img src={demonslayer}  />,
    <img src={boredape1}  />,
  ];
  
export const Nft = () => {
    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };

    return (
    <div className='container'>
      <AliceCarousel
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      autoPlay 
      mouseTracking
      responsive={responsive} 
      items={items} />
    </div>
    );
  }

export default Nft
