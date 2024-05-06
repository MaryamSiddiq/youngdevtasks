import React, { useState } from 'react';

function FormComponent() {
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        description: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            image: event.target.files[0]
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle form data submission logic here
        // For now, just log formData to the console
        console.log(formData);

        // Example: you might want to send formData to a server or process it further
        // axios.post('/api/form-submit', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default FormComponent;
