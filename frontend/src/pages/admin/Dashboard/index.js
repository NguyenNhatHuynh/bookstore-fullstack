function Dashboard() {
    return (
        <section className="admin-dashboard">
            <h1 className="heading">
                <span>Admin Dashboard</span>
            </h1>

            {/* Statistics Section (tương tự icons-container) */}
            <div className="icons-container">
                <div className="icons">
                    <i className="fas fa-book"></i>
                    <div className="content">
                        <h3>150</h3>
                        <p>Total Books</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="content">
                        <h3>50</h3>
                        <p>Pending Orders</p>
                    </div>
                </div>
                <div className="icons">
                    <i className="fas fa-users"></i>
                    <div className="content">
                        <h3>200</h3>
                        <p>Users</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div className="recent-activity">
                <h3>Recent Activity</h3>
                <ul>
                    <li>New order placed by user #123</li>
                    <li>Book "The Great Gatsby" added</li>
                    <li>User #456 registered</li>
                </ul>
            </div>
        </section>
    );
}

export default Dashboard;