// frontend/src/pages/client/Blogs/index.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ClientBlogs() {
    return (
        <section className="blogs" id="blogs">
            <h1 className="heading">
                <span>Blog Của Chúng Tôi</span>
            </h1>

            <Swiper
                className="blogs-slider"
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
                        <div className="image">
                            <img src={`/image/blog-${(index % 5) + 1}.jpg`} alt="" />
                        </div>
                        <div className="content">
                            <h3>Tiêu Đề Blog Ở Đây</h3>
                            <p>Tại Sao Bạn Chọn Shop Book Chính Tỏi?</p>
                            <a href="#" className="btn">Đọc Thêm</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ClientBlogs;