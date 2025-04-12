// frontend/src/pages/shared/ClientLayout.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ClientLayout({ children }) {
    const [isSearchFormActive, setIsSearchFormActive] = useState(false);
    const [isLoginFormActive, setIsLoginFormActive] = useState(false);
    const [isHeader2Active, setIsHeader2Active] = useState(false);

    // Toggle search form
    const toggleSearchForm = () => {
        setIsSearchFormActive(!isSearchFormActive);
    };

    // Toggle login form
    const toggleLoginForm = () => {
        setIsLoginFormActive(!isLoginFormActive);
    };

    // Handle scroll to toggle header-2
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsHeader2Active(true);
        } else {
            setIsHeader2Active(false);
        }
        setIsSearchFormActive(false);
    };

    // Handle window load and scroll
    useEffect(() => {
        if (window.scrollY > 80) {
            setIsHeader2Active(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.querySelector('input').value;
        console.log('Search:', searchQuery);
    };

    return (
        <div className="client-layout">
            {/* Header */}
            <header className="header">
                <div className="header-1">
                    <Link to="/" className="logo">
                        <i className="fas fa-book"></i> XD Book
                    </Link>

                    <form onSubmit={handleSearch} className={`search-form ${isSearchFormActive ? 'active' : ''}`}>
                        <input type="search" placeholder="search here...." id="search-box" />
                        <label htmlFor="search-box" className="fas fa-search"></label>
                    </form>

                    <div className="icons">
                        <div id="search-btn" className="fas fa-search" onClick={toggleSearchForm}></div>
                        <Link to="/wishlist" className="fas fa-heart"></Link>
                        <Link to="/cart" className="fas fa-shopping-cart"></Link>
                        <div id="login-btn" className="fas fa-user" onClick={toggleLoginForm}></div>
                    </div>
                </div>

                <div className={`header-2 ${isHeader2Active ? 'active' : ''}`}>
                    <nav className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/books">Featured</Link>
                        <Link to="/arrivals">Arrivals</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/blogs">Blogs</Link>
                    </nav>
                </div>
            </header>

            {/* Login Form */}
            <div className={`login-form-container ${isLoginFormActive ? 'active' : ''}`}>
                <div id="close-login-btn" className="fas fa-times" onClick={toggleLoginForm}></div>
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
                    <h3>Đăng Ký Nhận Cập Nhật Mới Nhất</h3>
                    <input type="email" placeholder="enter your email" className="box" />
                    <input type="submit" value="Subscribe" className="btn" />
                </form>
            </section>

            {/* Footer */}
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Địa Điểm Của Chúng Tôi</h3>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> Vietnam
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
                        <h3>Đường Dẫn</h3>
                        <Link to="/">
                            <i className="fas fa-arrow-right"></i> Home
                        </Link>
                        <Link to="/books">
                            <i className="fas fa-arrow-right"></i> Featured
                        </Link>
                        <Link to="/arrivals">
                            <i className="fas fa-arrow-right"></i> Arrivals
                        </Link>
                        <Link to="/reviews">
                            <i className="fas fa-arrow-right"></i> Reviews
                        </Link>
                        <Link to="/blogs">
                            <i className="fas fa-arrow-right"></i> Blogs
                        </Link>
                    </div>

                    <div className="box">
                        <h3>Liên Kết Phụ</h3>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> Thông Tin Tài Khoản
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> Các Mặt Hàng Đã Đặt
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> Chính Sách Bảo Mật
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> Phương Thức Thanh Toán
                        </a>
                        <a href="#">
                            <i className="fas fa-arrow-right"></i> Dịch Vụ Của Chúng Tôi
                        </a>
                    </div>

                    <div className="box">
                        <h3>Thông Tin Liên Lạc</h3>
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
                    Created by <span>XD Book</span>
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