import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`/api/books/${id}`);
                setBook(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching book');
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Description: {book.description || 'No description available'}</p>
        </div>
    );
}

export default BookDetail;