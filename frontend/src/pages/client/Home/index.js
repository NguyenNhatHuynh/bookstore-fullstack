// frontend/src/pages/client/Home/index.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ClientHome() {
    return (
        <>
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Giảm Tới 75%</h3>
                        <p>Công Ty XD Book Là Một Công Ty Hết Sức Thành Công Trong Mảng Sách.</p>
                        <a href="#" className="btn">Mua Ngay</a>
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
                        {[...Array(3)].map((_, index) => (
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

            {/* Icons Container */}
            <section className="icons-container">
                <div className="icons">
                    <i className="fas fa-shipping-fast"></i>
                    <div className="content">
                        <h3>Miễn Phí Vận Chuyển</h3>
                        <p>Đặt Hàng Trên 100$</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-lock"></i>
                    <div className="content">
                        <h3>Thanh Toán An Toàn</h3>
                        <p>100% Thanh Toán An Toàn</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-redo-alt"></i>
                    <div className="content">
                        <h3>Đề Đăng Hoàn Đổi</h3>
                        <p>10 Ngày Trả Hàng</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-headset"></i>
                    <div className="content">
                        <h3>Hỗ Trợ 24/7</h3>
                        <p>Gọi Chỗ Chúng Tôi Bất Cứ Lúc Nào</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientHome;