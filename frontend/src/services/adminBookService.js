import axios from 'axios';

const adminBookService = {
    getAllBooks: async () => {
        const response = await axios.get('/api/admin/books');
        return response.data;
    },
    addBook: async (bookData) => {
        const response = await axios.post('/api/admin/books', bookData);
        return response.data;
    },
    updateBook: async (id, bookData) => {
        const response = await axios.put(`/api/admin/books/${id}`, bookData);
        return response.data;
    },
    deleteBook: async (id) => {
        const response = await axios.delete(`/api/admin/books/${id}`);
        return response.data;
    },
};

export default adminBookService;