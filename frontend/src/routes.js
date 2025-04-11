// frontend/src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import ClientHome from './pages/client/Home';
import ClientBooks from './pages/client/Books';
import ClientBookDetail from './pages/client/BookDetail';
import ClientCart from './pages/client/Cart';
import ClientArrivals from './pages/client/Arrivals';
import ClientReviews from './pages/client/Reviews';
import ClientBlogs from './pages/client/Blogs';
import AdminDashboard from './pages/admin/Dashboard';
import AdminBooks from './pages/admin/Books';
import ClientLayout from './pages/shared/ClientLayout';
import AdminLayout from './pages/shared/AdminLayout';

const AppRoutes = () => (
    <Routes>
        {/* Client Routes */}
        <Route
            path="/"
            element={
                <ClientLayout>
                    <ClientHome />
                </ClientLayout>
            }
        />
        <Route
            path="/books"
            element={
                <ClientLayout>
                    <ClientBooks />
                </ClientLayout>
            }
        />
        <Route
            path="/books/:id"
            element={
                <ClientLayout>
                    <ClientBookDetail />
                </ClientLayout>
            }
        />
        <Route
            path="/cart"
            element={
                <ClientLayout>
                    <ClientCart />
                </ClientLayout>
            }
        />
        <Route
            path="/arrivals"
            element={
                <ClientLayout>
                    <ClientArrivals />
                </ClientLayout>
            }
        />
        <Route
            path="/reviews"
            element={
                <ClientLayout>
                    <ClientReviews />
                </ClientLayout>
            }
        />
        <Route
            path="/blogs"
            element={
                <ClientLayout>
                    <ClientBlogs />
                </ClientLayout>
            }
        />

        {/* Admin Routes */}
        <Route
            path="/admin"
            element={
                <AdminLayout>
                    <AdminDashboard />
                </AdminLayout>
            }
        />
        <Route
            path="/admin/books"
            element={
                <AdminLayout>
                    <AdminBooks />
                </AdminLayout>
            }
        />
    </Routes>
);

export default AppRoutes;