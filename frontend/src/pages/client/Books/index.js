// frontend/src/pages/client/Books/index.jsx
function Books() {
    return (
        <section className="featured" id="featured">
            <h1 className="heading">
                <span>sách nổi bật</span>
            </h1>

            <div className="swiper featured-slider">
                <div className="swiper-wrapper">
                    {[...Array(10)].map((_, index) => (
                        <div className="swiper-slide box" key={index}>
                            <div className="icons">
                                <a href="#" className="fas fa-search"></a>
                                <a href="#" className="fas fa-heart"></a>
                                <a href="#" className="fas fa-eye"></a>
                            </div>
                            <div className="image">
                                <img src={`/image/book-${index + 1}.png`} alt="" />
                            </div>
                            <div className="content">
                                <h3>sách nổi bật</h3>
                                <div className="price">
                                    150.000 VND <span>200.000 VND</span>
                                </div>
                                <a href="#" className="btn">thêm vào giỏ hàng</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    );
}

export default Books;