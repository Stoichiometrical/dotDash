import React from "react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
    {
        "month": "January",
        "pH": 7.2,
        "moisture": 40,
        "nutrient": 120,
        "temperature": 25,
    },
    {
        "month": "February",
        "pH": 7.0,
        "moisture": 42,
        "nutrient": 118,
        "temperature": 26,
    },
    {
        "month": "March",
        "pH": 7.5,
        "moisture": 38,
        "nutrient": 125,
        "temperature": 27,
    },
    {
        "month": "April",
        "pH": 7.2,
        "moisture": 35,
        "nutrient": 123,
        "temperature": 28,
    },
    {
        "month": "May",
        "pH": 7.3,
        "moisture": 39,
        "nutrient": 121,
        "temperature": 29,
    },
    {
        "month": "June",
        "pH": 7.1,
        "moisture": 43,
        "nutrient": 119,
        "temperature": 30,
    },
    {
        "month": "July",
        "pH": 7.4,
        "moisture": 37,
        "nutrient": 124,
        "temperature": 31,
    },
    {
        "month": "August",
        "pH": 7.3,
        "moisture": 41,
        "nutrient": 122,
        "temperature": 32,
    },
    {
        "month": "September",
        "pH": 7.0,
        "moisture": 40,
        "nutrient": 120,
        "temperature": 30,
    },
    {
        "month": "October",
        "pH": 7.2,
        "moisture": 39,
        "nutrient": 119,
        "temperature": 28,
    },
    {
        "month": "November",
        "pH": 7.4,
        "moisture": 38,
        "nutrient": 123,
        "temperature": 26,
    },
    {
        "month": "December",
        "pH": 7.1,
        "moisture": 37,
        "nutrient": 125,
        "temperature": 25,
    },
];

const SensorData = () => {
    return (
        <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pH" stroke="#8884d8" name="pH" />
            <Line type="monotone" dataKey="moisture" stroke="#82ca9d" name="Moisture" />
            <Line type="monotone" dataKey="nutrient" stroke="#ffc658" name="Nutrient" />
            <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature" />
        </LineChart>
    );
};

export default SensorData;
