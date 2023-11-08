import React, { useState } from 'react';
import './fm.scss';

const FormComponent = () => {
    // State for form input values
    const [cropSelection, setCropSelection] = useState('Wheat'); // Set default value
    const [cultivationArea, setCultivationArea] = useState('Option A'); // Set default value
    const [typeOfSeeds, setTypeOfSeeds] = useState('Seed Type 1'); // Set default value
    const [labour, setLabour] = useState('Skilled'); // Set default value
    const [financialResources, setFinancialResources] = useState('');
    const [desiredYields, setDesiredYields] = useState('');

    // Options for drop-down fields
    const cropOptions = ['Wheat', 'Beans', 'Peas'];
    const areaOptions = ['Option A', 'Option B', 'Option C'];
    const seedOptions = ['Seed Type 1', 'Seed Type 2', 'Seed Type 3'];
    const labourOptions = ['Skilled', 'Semi-skilled', 'Unskilled'];

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can generate the report or perform any desired action here
        console.log('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label style={{marginTop:'2%'}}>Crop Selection:</label>
                <select value={cropSelection} onChange={(e) => setCropSelection(e.target.value)}>
                    {cropOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Cultivation Area (acres):</label>
                <select value={cultivationArea} onChange={(e) => setCultivationArea(e.target.value)}>
                    {areaOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Financial Resources:</label>
                <input
                    type="text"
                    value={financialResources}
                    onChange={(e) => setFinancialResources(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Type Of Seeds:</label>
                <select value={typeOfSeeds} onChange={(e) => setTypeOfSeeds(e.target.value)}>
                    {seedOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Labour:</label>
                <select value={labour} onChange={(e) => setLabour(e.target.value)}>
                    {labourOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label>Desired Yields:</label>
                <input
                    type="text"
                    value={desiredYields}
                    onChange={(e) => setDesiredYields(e.target.value)}
                />
            </div>

            <button type="submit" style={{ backgroundColor: '#55A55E',marginBottom:'4%' }}>
                Generate Report
            </button>
        </form>
    );
};

export default FormComponent;
