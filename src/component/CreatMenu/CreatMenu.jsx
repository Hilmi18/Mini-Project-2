import axios from 'axios';
import React, { useState } from 'react';

const CreatMenu = ({ show, onHide }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState(0);


    const handleSubmit = () => {
        const token = localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const payloud = {
            name: name,
            description: description,
            type: type,
            imageUrl: imageUrl,
            price: parseFloat(price),
        }
        axios
            .post("https://api.mudoapi.tech/menu", payloud, config)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response.data)
            })
        onHide()
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${show ? '' : 'hidden'
                }`}
        >
            <div className={`modal-overlay absolute w-full h-full bg-gray-900 opacity-50 ${show ? 'block' : 'hidden'}`}></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto h-[510px]">
                <div className="modal-content py-4 text-left px-6">
                    <div className="modal-header text-xl border-b mb-4">
                        <h3 className="font-semibold">Add New Menu</h3>
                    </div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border p-2 rounded-lg"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                rows="2"
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border p-2 rounded-lg"
                                placeholder="Enter description"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Type
                            </label>
                            <select
                                onChange={(e) => setType(e.target.value)}
                                className="w-full border p-2 rounded-lg"
                                value={type}
                            >
                                <option value="beverage">Beverage</option>
                                <option value="main-dish">Main-Dish</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Image URL
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full border p-2 rounded-lg"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full border p-2 rounded-lg"
                                placeholder="Enter price"
                            />
                        </div>
                    </form>
                    <div className="modal-footer mt-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Save
                        </button>
                        <button
                            onClick={onHide}
                            className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatMenu;
