const express = require('express');
const dotenv = require('dotenv');
const oauthRoutes = require('./routes/oauth');
const couponRoutes = require('./routes/coupon');
const cors = require('cors');

// تحميل متغيرات البيئة من ملف .env
dotenv.config();

const app = express();

// تفعيل CORS للسماح بالوصول من المتصفحات
app.use(cors());

// تمكين قراءة JSON من الطلبات
app.use(express.json());

// تعريف المسارات (Routes)
app.use('/oauth', oauthRoutes);
app.use('/coupon', couponRoutes);

// استخدام المنفذ من متغيرات البيئة أو 3000 كخيار افتراضي
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
