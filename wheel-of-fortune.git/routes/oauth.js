const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/callback', async(req, res) => {
    const { code } = req.query;

    const response = await axios.post('https://accounts.salla.sa/oauth2/token', null, {
        params: {
            grant_type: 'authorization_code',
            client_id: process.env.SALLA_CLIENT_ID,
            client_secret: process.env.SALLA_CLIENT_SECRET,
            code,
            redirect_uri: process.env.SALLA_REDIRECT_URI,
        }
    });

    const { access_token, store } = response.data;

    // حفظ التوكن حسب المتجر في قاعدة بياناتك
    console.log('Access Token:', access_token);
    console.log('Store Info:', store);

    res.send('تم التثبيت بنجاح! يمكنك الآن استخدام عجلة الحظ.');
});

module.exports = router;