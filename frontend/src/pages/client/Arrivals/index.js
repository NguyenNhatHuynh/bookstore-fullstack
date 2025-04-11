// frontend/src/pages/client/Arrivals/index.jsx
function Arrivals() {
    return (
        <section className="arrivals" id="arrivals">
            <h1 className="heading">
                <span>sách mới</span>
            </h1>

            <div className="swiper arrivals-slider">
                <div className="swiper-wrapper">
                    {[...Array(5)].map((_, index) => (
                        <a href="#" className="swiper-slide box" key={index}>
                            <div className="image">
                                <img src={`/image/book-${index + 1}.png`} alt="" />
                            </div>
                            <div className="content">
                                <h3>sách mới</h3>
                                <div className="price">
                                    100.000 VND <span>200.000 VND</span>
                                </div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="swiper arrivals-slider">
                <div className="swiper-wrapper">
                    {[...Array(5)].map((_, index) => (
                        <a href="#" className="swiper-slide box" key={index + 5}>
                            <div className="image">
                                <img src={`/image/book-${index + 6}.png`} alt="" />
                            </div>
                            <div className="content">
                                <h3>sách mới</h3>
                                <div className="price">
                                    100.000 VND <span>200.000 VND</span>
                                </div>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Arrivals;