import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Tutors_Testimonies from './Testimonies';
import './Testimony.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Testimony() {
  return (
    <section className="tutors-testimony">
      <div className="tutors-testimony-container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2>What our educators are saying about us.</h2>
            <p>
              Our educators are the heart of our success. Read firsthand accounts of their experiences and see why they’re passionate about teaching with us. These testimonials highlight the positive impact and rewarding moments they’ve encountered in their journey.
            </p>
          </div>
          <div className="col-lg-7">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 9000 }}
              slidesPerView="auto"
              pagination={{ clickable: true }}
            >
              {Tutors_Testimonies.map((testimony) => (
                <SwiperSlide key={testimony.name} className='swiper-slide'>
                  <article className="tutor_testimonies-item">
                    <div className="testimony_wrapper">
                      <img 
                        src={testimony.image} 
                        alt={`Image of ${testimony.name}`} 
                        className='testimonial-image' 
                      />
                      <div>
                        <h3>{testimony.name}</h3>
                        <h4>{testimony.subject}</h4>
                        <div className="rating_stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote right-icon"></i>
                      <span>{testimony.testimony}</span>
                      <i className="bi bi-quote left-icon"></i>
                    </p>
                  </article>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
