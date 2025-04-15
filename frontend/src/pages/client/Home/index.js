import { useState, useEffect } from 'react';

function ClientHome() {
    const [isSearchFormActive, setIsSearchFormActive] = useState(false);
    const [isLoginFormActive, setIsLoginFormActive] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const [isLoaderActive, setIsLoaderActive] = useState(true);

    // Toggle search form
    const toggleSearchForm = () => {
        setIsSearchFormActive(!isSearchFormActive);
    };

    // Toggle login form
    const toggleLoginForm = () => {
        setIsLoginFormActive(!isLoginFormActive);
    };

    // Close login form
    const closeLoginForm = () => {
        setIsLoginFormActive(false);
    };

    // Handle scroll behavior for header
    const handleScroll = () => {
        setIsSearchFormActive(false); // Close search form on scroll
        if (window.scrollY > 0) {
            setIsHeaderActive(true);
        } else {
            setIsHeaderActive(false);
        }
    };

    // Initial scroll check on load and add scroll listener
    useEffect(() => {
        if (window.scrollY > 80) {
            setIsHeaderActive(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // // Loader fade out after 4 seconds
    // useEffect(() => {
    //     console.log("Loader is active, waiting 4 seconds to fade out...");
    //     const timer = setTimeout(() => {
    //         console.log("Fading out loader...");
    //         setIsLoaderActive(false);
    //     }, 4000);

    //     return () => {
    //         console.log("Cleaning up loader timer...");
    //         clearTimeout(timer);
    //     };
    // }, []);

    return (
        <>
            {/* Loader */}
            {isLoaderActive && (
                <div className="loader-container">
                    <img src="/image/loader-img.gif" alt="Loader" />
                </div>
            )}

            {/* Header Section */}
            <header className="header">
                <div className="header-1">
                    <a href="#" className="logo">
                        <i className="fas fa-book"></i> XD Book
                    </a>

                    <form className={`search-form ${isSearchFormActive ? 'active' : ''}`}>
                        <input
                            type="search"
                            placeholder="search here..."
                            id="search-box"
                        />
                        <label htmlFor="search-box" className="fas fa-search"></label>
                    </form>

                    <div className="icons">
                        <div id="search-btn" className="fas fa-search" onClick={toggleSearchForm}></div>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <div id="login-btn" className="fas fa-user" onClick={toggleLoginForm}></div>
                    </div>
                </div>

                <div className={`header-2 ${isHeaderActive ? 'active' : ''}`}>
                    <nav className="navbar">
                        <a href="#home">home</a>
                        <a href="#featured">featured</a>
                        <a href="#arrivals">arrivals</a>
                        <a href="#reviews">reviews</a>
                        <a href="#blogs">blogs</a>
                    </nav>
                </div>
            </header>

            {/* Bottom Navbar */}
            <nav className="bottom-navbar">
                <a href="#home" className="fas fa-home"></a>
                <a href="#featured" className="fas fa-list"></a>
                <a href="#arrivals" className="fas fa-tags"></a>
                <a href="#reviews" className="fas fa-comments"></a>
                <a href="#blogs" className="fas fa-blog"></a>
            </nav>

            {/* Login Form */}
            <div className={`login-form-container ${isLoginFormActive ? 'active' : ''}`}>
                <div id="close-login-btn" className="fas fa-times" onClick={closeLoginForm}></div>

                <form>
                    <h3>sign in</h3>
                    <span>username</span>
                    <input
                        type="email"
                        className="box"
                        placeholder="enter your email"
                    />
                    <span>password</span>
                    <input
                        type="password"
                        className="box"
                        placeholder="enter your password"
                    />
                    <div className="checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">remember me</label>
                    </div>
                    <input type="submit" value="sign in" className="btn" />
                    <p>forget password ? <a href="#">click here</a></p>
                    <p>don't have an account ? <a href="#">create one</a></p>
                </form>
            </div>

            {/* Hero Section */}
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>giảm tới 75%</h3>
                        <p>Công Ty XD Book Là Một Công Ty Hết Sức Thành Công Trong Mảng Sách.</p>
                        <a href="#" className="btn">mua ngay</a>
                    </div>

                    <div className="books-slider">
                        <img src="/image/stand.png" className="stand" alt="Books on Shelf" />
                    </div>
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
                        <h3>Dễ Dàng Hoàn Đổi</h3>
                        <p>10 Ngày Trả Hàng</p>
                    </div>
                </div>

                <div className="icons">
                    <i className="fas fa-headset"></i>
                    <div className="content">
                        <h3>Hỗ Trợ 24/7</h3>
                        <p>Gọi Cho Chúng Tôi Bất Cứ Lúc Nào</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ClientHome;