import React from 'react';
import './card.css';
import CardItem from './CardItem';
import image from '../../images/logo1.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Updates!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206825/india-leave-out-hardik-shaw-f.jpg'
              text='India leave out Hardik, Shaw for WTC Final, England Tests'
              label='Finals'
              path='/'
            />
             <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206825/india-leave-out-hardik-shaw-f.jpg'
              text='India leave out Hardik, Shaw for WTC Final, England Tests'
              label='Finals'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206825/india-leave-out-hardik-shaw-f.jpg'
              text='India leave out Hardik, Shaw for WTC Final, England Tests'
              label='Finals'
              path='/'
            />
            <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206825/india-leave-out-hardik-shaw-f.jpg'
              text='India leave out Hardik, Shaw for WTC Final, England Tests'
              label='Finals'
              path='/'
            />
            <CardItem
              src='https://www.cricbuzz.com/a/img/v1/420x235/i1/c206825/india-leave-out-hardik-shaw-f.jpg'
              text='India leave out Hardik, Shaw for WTC Final, England Tests'
              label='Finals'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
