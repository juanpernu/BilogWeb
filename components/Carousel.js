import React from 'react';
import ReactSwipe from 'react-swipe';
import Title from './Title'
import CardTestimonial from './Card/CardTestimonial'

import mockedTestimonials from '../mocks/testimonials'

const Carousel = () => {
  let reactSwipeEl;

  return (
    <div className="testimonial--container">
      <Title
        title="¿Qué piensan nuestros usuarios?"
        subtitle="Miles de profesionales como vos usan Bilog"
        alignCenter={true}
      />
      <ReactSwipe
        className="carousel"
        swipeOptions={{
          continuous: false,
          auto: 3000,
          disableScroll: false,
        }}
        ref={el => (reactSwipeEl = el)}
      >
        {
          mockedTestimonials.map((testimonial, key) => {
            return (
              <div key={key}>
                <CardTestimonial
                  avatarSrc={testimonial.avatarSrc}
                  userName={testimonial.userName}
                  testimonialText={testimonial.testimonialText}
                />
              </div>
            )
          })
        }
      </ReactSwipe>
      <button className="carousel-button left" onClick={() => reactSwipeEl.prev()}>
        <svg width="32" height="32" viewBox="9 1 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" fill="#000"></path>
          </g>
        </svg>
      </button>
      <button className="carousel-button right" onClick={() => reactSwipeEl.next()}>
        <svg width="32" height="32" viewBox="9 1 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98" fill="#000"></path>
          </g>
        </svg>
      </button>
      <style jsx>
        {`
          {/* STYLES FOR MOBILE */}
          @media only screen and (max-width: 750px) {
            .testimonial--container {
              padding: 50px 0;
              background: #fff;
              border-bottom: 1px solid #eaeaea;
            }
            .carousel-button {
              display: none;
            }
          }

          {/* STYLES FOR DESKTOP */}
          @media only screen and (min-width: 751px) {
            .testimonial--container {
              padding: 90px 0 50px;
              background: #fff;
              border-bottom: 1px solid #eaeaea;
            }
            .carousel-button {
              position: relative;
              z-index: 20;
              color: #000;
              cursor: pointer;
              border: none;
              width: 32px;
              height: 32px;
              background: #fefefe;
              border-radius: 50%;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
            }
            .carousel-button:focus {
              outline: none;
            }
            .carousel-button.left {
              left: 20%;
              top: inherit;
              bottom: 200px;
              transform: rotateY(180deg)
            }
            .carousel-button.right {
              left: 78%;
              top: inherit;
              bottom: 200px;
            }
          }
        `}
        </style>
    </div>
  );
};

export default Carousel
