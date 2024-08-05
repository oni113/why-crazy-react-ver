import React, { useState } from 'react'

const Company = ({ company }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = company.description;
    const isShortDescription =  description.length < 90;
    if (!showFullDescription && !isShortDescription) {
        description = description.substring(0, 90) + '...';
    }
    
    const toggleShowDescription = () => setShowFullDescription((prevState) => !prevState);

    return (
        <div className="bg-white rounded-xl shadow-md relative" key={company.companyId}>
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">Name</div>
                    <h3 className="text-xl font-bold">{company.companyName}</h3>
                </div>
                <div className="mb-6">
                    <div className="text-gray-600 my-2">Description</div>
                    <div className="mb-5">{description}</div>
                    <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={toggleShowDescription}>
                        {!isShortDescription && (showFullDescription ? 'Less' : 'More')}
                    </button>
                </div>
                <div className="mb-6">
                    <div className="text-gray-600 my-2">Contact</div>
                    <div className="mb-2">{company.contactEmail}</div>
                    <div className="mb-2">{company.contactPhone}</div>
                </div>
            </div>
        </div>
    )
}

export default Company;
