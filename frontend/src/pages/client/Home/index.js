// frontend/src/pages/client/Home/index.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ClientHome() {
    return (
        <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>giảm tới 75%</h3>
                    <p>Công Ty XD Book Là Một Công Ty Hết Sức Thành Công Trong Mảng Sách.</p>
                    <a href="#" className="btn">mua ngay</a>
                </div>

                <Swiper
                    className="books-slider"
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
                    {[...Array(6)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <a href="#">
                                <img src={`/image/book-${index + 1}.png`} alt="" />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <img src="/image/stand.png" className="stand" alt="" />
            </div>
        </section>
    );
}

export default ClientHome;