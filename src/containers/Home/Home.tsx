import React from 'react';
import './Home.css';

import headerImg from '../../assets/headerImg.svg';

const Home = () => {
  return (
    <div className='homeBlock'>
      <div className='container'>

        <div className='offerHome'>
          <span> Welcome to my portfolio </span>
          <h1>Я Полушин Дмитрий</h1>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Corporis culpa enim esse exercitationem mollitia nisi nostrum recusandae repellendus sint,
            sit, tempora, ut voluptas voluptate? Cupiditate placeat quam sint voluptate voluptates!
          </p>
        </div>

        <img className='offerImg' src={headerImg} alt='header'/>
      </div>
    </div>
  );
};

export default Home;