import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


export default  function MarketBar(){
    const data = [
        {
            "name": "Cassava",
            "demand": 4000,
            "supply": 2400
        },
        {
            "name": "Beans",
            "demand": 3000,
            "supply": 1398
        },
        {
            "name": "Potatoes",
            "demand": 2000,
            "supply": 9800
        },
        {
            "name": "Brocoli",
            "demand": 2780,
            "supply": 3908
        },
        {
            "name": "Maize",
            "demand": 1890,
            "supply": 4800
        },
        {
            "name": "Green Veggies",
            "demand": 2390,
            "supply": 3800
        },
        {
            "name": "Sorghum",
            "demand": 3490,
            "supply": 4300
        }
    ]
    return(
        <>

            <BarChart width={800} height={250} data={data} barCategoryGap='15'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="supply" fill="#8884d8" />
                <Bar dataKey="demand" fill="#82ca9d" />
            </BarChart>

        </>
    )
}