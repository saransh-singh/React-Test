// import npm packages
import React, { Component } from 'react';
import Slider from "react-slick";
import LinesEllipsis from 'react-lines-ellipsis';
import ReactPlayer from 'react-player';

// import local files
import Tweets from './tweets.json';
import './tweets.css';

class Tweet extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <Slider {...settings}>
          {
            Tweets.tweets.map((tweet, index) => (
              <div className='container' key={index}>
                <div className="card" >
                  {
                    tweet.type === 'image' ?
                      <img src={tweet.image} className="card-img-top" alt={tweet.subject} />
                    :
                      <ReactPlayer
                        url={tweet.video}
                        width='100%'
                        height='100%'
                        controls={true}
                      />
                  }
                  <div className='user container'>
                    <div className='user-profile-pic-container'>
                      <img className='user-profile-pic' src={tweet.userPic || '/images/no-user.png'} alt={tweet.user} />
                    </div>
                    <div className='user-name-container'>
                      <p className='user-name'>
                        <strong>
                          {tweet.user}
                        </strong>
                      </p>
                      <span className='user-id'>{tweet.userId}</span>
                    </div>

                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <LinesEllipsis
                        text={tweet.subject}
                        maxLine='1'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                      />
                    </h5>
                    <LinesEllipsis
                      text={tweet.description}
                      maxLine='5'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                    />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    )
  }
}

export default Tweet;
