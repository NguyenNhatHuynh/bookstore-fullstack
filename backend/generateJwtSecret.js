const crypto = require('crypto');

// Hàm sinh chuỗi ngẫu nhiên
function generateJwtSecret(length = 64) {
    return crypto.randomBytes(length).toString('hex');
}

// Sinh và in mã JWT_SECRET
const secret = generateJwtSecret();
console.log('Generated JWT_SECRET:', secret);

// Gợi ý thêm vào .env
console.log('\nAdd this to your .env file:');
console.log(`JWT_SECRET=${secret}`);