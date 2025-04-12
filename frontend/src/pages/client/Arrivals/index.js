// frontend/src/pages/client/Arrivals/index.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ClientArrivals() {
    return (
        <section className="arrivals" id="arrivals">
            <h1 className="heading">
                <span>sách mới về</span>
            </h1>

            <Swiper
                className="arrivals-slider"
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 9500, disableOnInteraction: false }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay]}
            >
                {[...Array(5)].map((_, index) => (
                    <SwiperSlide className="box" key={index}>
                        <div className="image">
                            <img src={`/image/book-${(index % 6) + 1}.png`} alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrival {index + 1}</h3>
                            <div className="price">
                                150.000 VND <span>200.000 VND</span>
                            </div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ClientArrivals;