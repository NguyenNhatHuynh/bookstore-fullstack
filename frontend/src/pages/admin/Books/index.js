import { useEffect, useState } from 'react';
import axios from 'axios';

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/api/admin/books');
                setBooks(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching books');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/admin/books/${id}`);
            setBooks(books.filter((book) => book._id !== id));
        } catch (err) {
            setError('Error deleting book');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className="admin-books">
            <h1 className="heading">
                <span>Manage Books</span>
            </h1>

            <div className="swiper featured-slider">
                <div className="swiper-wrapper">
                    {books.length === 0 ? (
                        <p>No books available</p>
                    ) : (
                        books.map((book) => (
                            <div className="swiper-slide box" key={book._id}>
                                <div className="icons">
                                    <a href="#" className="fas fa-eye"></a>
                                    <a href="#" className="fas fa-edit"></a>
                                    <a
                                        href="#"
                                        className="fas fa-trash"
                                        onClick={() => handleDelete(book._id)}
                                    ></a>
                                </div>
                                <div className="image">
                                    <img src={`/image/book-${(book._id % 10) + 1}.png`} alt={book.title} />
                                </div>
                                <div className="content">
                                    <h3>{book.title}</h3>
                                    <div className="price">
                                        {book.price} VND
                                    </div>
                                    <a href="#" className="btn">
                                        Edit Book
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </section>
    );
}

export default Books;