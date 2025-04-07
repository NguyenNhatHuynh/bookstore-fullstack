BookShop/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   └── mail.js
│   │   ├── models/
│   │   │   ├── Book.js
│   │   │   ├── User.js
│   │   │   ├── Order.js
│   │   │   ├── Category.js
│   │   │   ├── Review.js
│   │   │   ├── Coupon.js
│   │   │   ├── Payment.js
│   │   │   ├── Wishlist.js
│   │   │   ├── Inventory.js
│   │   │   ├── Author.js
│   │   │   ├── Publisher.js
│   │   │   ├── Notification.js
│   │   │   └── LoyaltyPoint.js
│   │   ├── routes/
│   │   │   ├── public/
│   │   │   │   ├── bookRoutes.js      # camelCase
│   │   │   │   ├── authRoutes.js
│   │   │   │   ├── reviewRoutes.js
│   │   │   │   └── blogRoutes.js
│   │   │   ├── private/
│   │   │   │   ├── cartRoutes.js
│   │   │   │   ├── orderRoutes.js
│   │   │   │   ├── paymentRoutes.js
│   │   │   │   ├── wishlistRoutes.js
│   │   │   │   └── loyaltyRoutes.js
│   │   │   └── admin/
│   │   │       ├── bookRoutes.js
│   │   │       ├── orderRoutes.js
│   │   │       ├── userRoutes.js
│   │   │       ├── couponRoutes.js
│   │   │       ├── inventoryRoutes.js
│   │   │       └── analyticsRoutes.js
│   │   ├── controllers/
│   │   │   ├── public/
│   │   │   │   ├── bookController.js
│   │   │   ├── private/
│   │   │   │   ├── cartController.js
│   │   │   └── admin/
│   │   │       ├── bookController.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── admin.js
│   │   │   ├── validate.js
│   │   │   └── errorHandler.js
│   │   ├── services/
│   │   │   ├── emailService.js       # camelCase
│   │   │   ├── paymentService.js
│   │   │   ├── uploadService.js
│   │   │   ├── searchService.js
│   │   │   ├── recommendationService.js
│   │   │   └── notificationService.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── format.js
│   │   └── index.js
│   ├── tests/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── client/
│   │   ├── src/
│   │       ├── pages/
│   │       │   ├── Home/
│   │       │   │   ├── index.jsx
│   │       │   ├── Books/
│   │       │   │   ├── index.jsx
│   │       │   ├── BookDetail/
│   │       │   │   ├── index.jsx
│   │       │   ├── Cart/
│   │       │   │   ├── index.jsx
│   │       ├── services/
│   │       │   ├── bookService.js    # camelCase
│   │       │   ├── wishlistService.js
│   │       ├── App.jsx
│   │       ├── index.jsx
│   │       └── routes.jsx
│   ├── admin/
│   │   ├── src/
│   │       ├── pages/
│   │       │   ├── Dashboard/
│   │       │   │   ├── index.jsx
│   │       │   ├── Books/
│   │       │   │   ├── index.jsx
│   │       ├── services/
│   │       │   ├── bookService.js
│   │       ├── App.jsx
│   │       ├── index.jsx
│   │       └── routes.jsx
│   ├── shared/
│   ├── .env
│   ├── .gitignore
│   └── package.json
├── docs/
├── docker-compose.yml
└── package.json




nickyonepie1
162003.Huynh
