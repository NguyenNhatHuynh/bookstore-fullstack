import { Link, useNavigate } from 'react-router-dom';

function AdminLayout({ children }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logic đăng xuất (xóa token, v.v.)
        navigate('/login');
    };

    return (
        <div className="admin-layout">
            {/* Header */}
            <header className="header">
                <div className="header-1">
                    <Link to="/admin" className="logo">
                        <i className="fas fa-book"></i> XoanDev Book Admin
                    </Link>
                    <div className="icons">
                        <div id="search-btn" className="fas fa-search"></div>
                        <div id="logout-btn" className="fas fa-sign-out-alt" onClick={handleLogout}></div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <nav className="admin-sidebar">
                <Link to="/admin" className="fas fa-tachometer-alt"> Dashboard</Link>
                <Link to="/admin/books" className="fas fa-book"> Books</Link>
                <Link to="/admin/orders" className="fas fa-shopping-cart"> Orders</Link>
                <Link to="/admin/users" className="fas fa-users"> Users</Link>
            </nav>

            {/* Main Content */}
            <main className="admin-content">
                {children}
            </main>

            {/* Footer */}
            <section className="footer">
                <div className="credit">
                    created by <span>XoanDev</span> |
                </div>
            </section>
        </div>
    );
}

export default AdminLayout;