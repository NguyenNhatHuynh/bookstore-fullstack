// frontend/src/pages/shared/ClientLayout.jsx
import { Link, useNavigate } from 'react-router-dom';


function ClientLayout({ children }) {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.querySelector('input').value;
        console.log('Search:', searchQuery);
        // Logic tìm kiếm (có thể gọi API hoặc điều hướng)
    };

    return (
        <div className="client-layout">
            {/* Header */}
            <header className="header">
                <div className="header-1">
                    <Link to="/" className="logo">
                        <i className="fas fa-book"></i> XD Book
                    </Link>

                    <form onSubmit={handleSearch} className="search-form">
                        <input type="search" placeholder="search here..." id="search-box" />
                        <label htmlFor="search-box" className="fas fa-search"></label>
                    </form>

                    <div className="icons">
                        <div id="search-btn" className="fas fa-search"></div>
                        <Link to="/wishlist" className="fas fa-heart"></Link>
                        <Link to="/cart" className="fas fa-shopping-cart"></Link>
                        <div id="login-btn" className="fas fa-user"></div>
                    </div>
                </div>

                <div className="header-2">
                    <nav className="navbar">
                        <Link to="/">home</Link>
                        <Link to="/books">featured</Link>
                        <Link to="/arrivals">arrivals</Link>
                        <Link to="/reviews">reviews</Link>
                        <Link to="/blogs">blogs</Link>
                    </nav>
                </div>
            </header>

            {/* Bottom Navbar */}
            <nav className="bottom-navbar">
                <Link to="/" className="fas fa-home"></Link>
                <Link to="/books" className="fas fa-list"></Link>
                <Link to="/arrivals" className="fas fa-tags"></Link>
                <Link to="/reviews" className="fas fa-comments"></Link>
                <Link to="/blogs" className="fas fa-blog"></Link>
            </nav>

            {/* Login Form */}
            <div className="login-form-container">
                <div id="close-login-btn" className="fas fa-times"></div>
                <form>
                    <h3>sign in</h3>
                    <span>username</span>
                    <input type="email" className="box" placeholder="enter your email" />
                    <span>password</span>
                    <input type="password" className="box" placeholder="enter your password" />
                    <div className="checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me"> remember me</label>
                    </div>
                    <input type="submit" value="sign in" className="btn" />
                    <p>
                        forget password ? <Link to="#">click here</Link>
                    </p>
                    <p>
                        don't have an account ? <Link to="#">create one</Link>
                    </p>
                </form>
            </div>

            {/* Main Content */}
            <main>{children}</main>

            {/* Newsletter Section */}
            <section className="newsletter">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h3>đăng ký nhận cập nhật mới nhất</h3>
                    <input type="email" placeholder="enter your email" className="box" />
                    <input type="submit" value="subscribe" className="btn" />
                </form>
            </section>

            {/* Footer */}
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>địa điểm của chúng tôi</h3>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> vietnam
                        </a>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> USA
                        </a>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> Thailand
                        </a>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> Japan
                        </a>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> Korea
                        </a>
                    </div>

                    <div className="box">
                        <h3>đường dẫn</h3>
                        <Link to="/">
                            <i className="fas fa-arrow-right"></i> home
                        </Link>
                        <Link to="/books">
                            <i className="fas fa-arrow-right"></i> featured
                        </Link>
                        <Link to="/arrivals">
                            <i className="fas fa-arrow-right"></i> arrivals
                        </Link>
                        <Link to="/reviews">
                            <i className="fas fa-arrow-right"></i> reviews
                        </Link>
                        <Link to="/blogs">
                            <i className="fas fa-arrow-right"></i> blogs
                        </Link>
                    </div>

                    <div className="box">
                        <h3>liên kết phụ</h3>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> thông tin tài khoản
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> các mặt hàng đã đặt
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> Chính sách bảo mật
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> phương thức thanh toán
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> dịch vụ của chúng tôi
                        </a>
                    </div>

                    <div className="box">
                        <h3>thông tin liên lạc</h3>
                        <a href="#">
                            <i className="fas fa-phone"></i> +123-23123-4342
                        </a>
                        <a href="#">
                            <i className="fas fa-phone"></i> +123-5453-2342
                        </a>
                        <a href="#">
                            <i className="fas fa-envelope"></i> xoandev163@gmail.com
                        </a>
                        <img src="/image/worldmap.png" className="map" alt="" />
                    </div>
                </div>

                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-pinterest"></a>
                </div>

                <div className="credit">
                    created by <span>XD Book</span>
                </div>
            </section>

            {/* Loader */}
            <div className="loader-container">
                <img src="/image/loader-img.gif" alt="" />
            </div>
        </div>
    );
}

export default ClientLayout;