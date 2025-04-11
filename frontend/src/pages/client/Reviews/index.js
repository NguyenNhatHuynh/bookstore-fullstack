// frontend/src/pages/client/Reviews/index.jsx
function ClientReviews() {
    return (
        <section className="reviews" id="reviews">
            <h1 className="heading">
                <span>đánh giá của khách hàng</span>
            </h1>

            <div className="swiper reviews-slider">
                <div className="swiper-wrapper">
                    {[...Array(5)].map((_, index) => (
                        <div className="swiper-slide box" key={index}>
                            <img src={`/image/pic-${index + 1}.png`} alt="" />
                            <h3>Mr.Lee</h3>
                            <p>Tôi không ngờ shop có những quyển sách tuyệt vời!</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientReviews;