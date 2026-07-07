const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { country, category, page, pageSize, apiKey } = req.query;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json(data);
        }
        
        res.json(data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news from NewsAPI" });
    }
});

module.exports = router;
