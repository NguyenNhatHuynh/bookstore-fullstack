// frontend/src/pages/client/Reviews/index.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ClientReviews() {
    return (
        <section className="reviews" id="reviews">
            <h1 className="heading">
                <span>Đánh Giá Của Khách Hàng</span>
            </h1>

            <Swiper
                className="reviews-slider"
                spaceBetween={10}
                grabCursor={true}
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
                {[...Array(3)].map((_, index) => (
                    <SwiperSlide className="box" key={index}>
                        <img src={`/image/pic-${index + 1}.png`} alt="" />
                        <h3>Mr.Lee</h3>
                        <p>Tôi Không Ngờ Shop Có Những Quyển Sách Tuyệt Vời!</p>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ClientReviews;