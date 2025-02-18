const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`);
        res.json({ temp: response.data.main.temp, description: response.data.weather[0].description });
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

