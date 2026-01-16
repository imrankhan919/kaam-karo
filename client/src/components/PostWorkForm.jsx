import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from "../features/project/projectSlice";

export default function PostWorkForm({ handleViewForm }) {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({ title: "", description: "", budget: "", category: "", duration: "", technology: "" })


    const { title, description, budget, category, duration, technology } = formData

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProject(formData))
        handleViewForm()
    }



    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl px-4 py-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Post a New Work</h2>
                    <p className="mt-2 text-gray-600">Share your project and connect with talented freelancers</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                    {/* Work Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Work Title
                        </label>
                        <input
                            name="title"
                            value={title}
                            onChange={handleChange}
                            type="text"
                            placeholder="E.g., Website Redesign, Logo Design..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Description
                        </label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={handleChange}
                            placeholder="Describe your project in detail..."
                            rows="4"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Budget */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Budget
                            </label>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">₹</span>
                                <input
                                    name="budget"
                                    value={budget}
                                    onChange={handleChange}
                                    type="number"
                                    placeholder="5000"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                />
                            </div>
                        </div>

                        {/* Timeline */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Project Timeline
                            </label>
                            <select value={duration} name="duration" onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                                <option>Select timeline</option>
                                <option>1-2 weeks</option>
                                <option>2-4 weeks</option>
                                <option>1-3 months</option>
                                <option>3+ months</option>
                            </select>
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select value={category} name="category" onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                            <option>Select category</option>
                            <option>Web Development</option>
                            <option>Mobile App Development</option>
                            <option>UI/UX Design</option>
                            <option>Graphic Design</option>
                            <option>Content Writing</option>
                            <option>Digital Marketing</option>
                        </select>
                    </div>

                    {/* Skills Required */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Technology
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                name="technology"
                                value={technology}
                                onChange={handleChange}
                                type="text"
                                placeholder="MERN"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>
                    </div>


                    {/* Checkbox */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="urgent"
                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
                        />
                        <label htmlFor="urgent" className="text-sm text-gray-700">
                            Mark as urgent project
                        </label>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <button
                        type="submit"
                        className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Post Work
                    </button>
                    <button
                        onClick={handleViewForm}
                        type="button"
                        className="flex-1 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}