import axios from 'axios';

const bookService = {
    getAllBooks: async () => {
        const response = await axios.get('/api/books');
        return response.data;
    },
    getBookById: async (id) => {
        const response = await axios.get(`/api/books/${id}`);
        return response.data;
    },
};

export default bookService;