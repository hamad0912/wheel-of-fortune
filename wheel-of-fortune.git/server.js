const express = require('express');
const dotenv = require('dotenv');
const oauthRoutes = require('./routes/oauth');
const couponRoutes = require('./routes/coupon');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/oauth', oauthRoutes);
app.use('/coupon', couponRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});