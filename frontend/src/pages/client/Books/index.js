// frontend/src/pages/client/Books/index.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ClientBooks() {
    return (
        <section className="featured" id="featured">
            <h1 className="heading">
                <span>Sách Nổi Bật</span>
            </h1>

            <Swiper
                className="featured-slider"
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 9500, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    450: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Autoplay, Navigation]}
            >
                {[...Array(8)].map((_, index) => (
                    <SwiperSlide className="box" key={index}>
                        <div className="icons">
                            <a href="#" className="fas fa-search"></a>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-eye"></a>
                        </div>
                        <div className="image">
                            <img src={`/image/book-${(index % 6) + 1}.png`} alt="" />
                        </div>
                        <div className="content">
                            <h3>Sách Nổi Bật</h3>
                            <div className="price">
                                150.000 VND <span>200.000 VND</span>
                            </div>
                            <a href="#" className="btn">Thêm Vào Giỏ Hàng</a>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
        </section>
    );
}

export default ClientBooks;