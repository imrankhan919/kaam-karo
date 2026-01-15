export default function PostWorkForm({ handleViewForm }) {
    return (
        <form className="mx-auto max-w-4xl px-4 py-8">
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
                            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
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
                        <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
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
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Skills Required
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                                React
                                <button type="button" className="hover:text-blue-900">✕</button>
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                                Node.js
                                <button type="button" className="hover:text-blue-900">✕</button>
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                                MongoDB
                                <button type="button" className="hover:text-blue-900">✕</button>
                            </span>
                            <input
                                type="text"
                                placeholder="Add more skills..."
                                className="rounded-full border border-dashed border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
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