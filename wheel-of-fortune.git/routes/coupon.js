const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/create', async(req, res) => {
    const { access_token, discount_value } = req.body;

    const response = await axios.post('https://api.salla.dev/admin/v2/discounts', {
        name: 'جائزة عجلة الحظ',
        type: 'percentage',
        value: discount_value,
        usage_limit: 1,
        code: 'WHEEL-' + Math.floor(Math.random() * 10000),
    }, {
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        }
    });

    res.json(response.data);
});

module.exports = router;