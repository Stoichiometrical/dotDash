import axios from "axios";

export const getWeatherData =async (city)=> {
    // API endpoint
    const apiUrl = "http://api.weatherapi.com/v1/forecast.json";

    // API key (replace with your own key)
    const apiKey = "c78b306a6c4946c9ade192950240601";

    // Parameters for the API request
    const params = {
        key: apiKey,
        q: city,
        days: 1,
        aqi: "no",
        alerts: "no",
    };

    try {
        // Make the API request
        const response = await axios.get(apiUrl, { params });

        // Extract the required information
        const { location, current } = response.data;
        const { lat, lon } = location;
        const temp_c = current.temp_c;
        const wind_kph = current.wind_kph;
        const precip_mm = current.precip_mm;

        // Return the extracted data
        return {
            latitude: lat,
            longitude: lon,
            temp_c: temp_c,
            wind_kph: wind_kph,
            precip_mm: precip_mm,
        };
    } catch (error) {
        // If an error occurs, log the error message
        console.error(`Error: ${error.message}`);
        return null;
    }
}

