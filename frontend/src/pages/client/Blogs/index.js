// frontend/src/pages/client/Blogs/index.jsx
function Blogs() {
    return (
        <section className="blogs" id="blogs">
            <h1 className="heading">
                <span>blog của chúng tôi</span>
            </h1>

            <div className="swiper blogs-slider">
                <div className="swiper-wrapper">
                    {[...Array(5)].map((_, index) => (
                        <div className="swiper-slide box" key={index}>
                            <div className="image">
                                <img src={`/image/blog-${index + 1}.jpg`} alt="" />
                            </div>
                            <div className="content">
                                <h3>tiêu đề blog ở đây</h3>
                                <p>Tại sao bạn chon Shop Book Chúng tôi?</p>
                                <a href="#" className="btn">đọc thêm</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;