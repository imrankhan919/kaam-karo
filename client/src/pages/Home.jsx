import React from 'react'

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">


            <section className="relative overflow-hidden py-20 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full border border-cyan-500/20">
                                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">The Future of Freelancing</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                                Connect With Top <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">Freelance Talent</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Whether you're a client seeking expert freelancers or a professional looking for exciting projects, we bring opportunities to your fingertips.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
                                    Post a Gig
                                </a>
                                <a className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
                                    Find Work
                                </a>
                            </div>
                            <div className="flex items-center gap-8 pt-4">
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">50K+</div>
                                    <div className="text-sm text-slate-600">Active Freelancers</div>
                                </div>
                                <div className="w-px h-12 bg-slate-300"></div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">10K+</div>
                                    <div className="text-sm text-slate-600">Projects Completed</div>
                                </div>
                                <div className="w-px h-12 bg-slate-300"></div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">98%</div>
                                    <div className="text-sm text-slate-600">Satisfaction Rate</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 p-1 hover:scale-105 transition-all duration-300">
                                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                                    <div className="text-center space-y-4 p-8">
                                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-full mx-auto"></div>
                                        <div className="text-slate-400 text-lg">Hero Illustration</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">How It Works</h2>
                        <p className="text-xl text-slate-600">Get started in three simple steps</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300">
                                1️⃣
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Create Your Profile</h3>
                            <p className="text-slate-600 leading-relaxed">Sign up and showcase your skills or describe your project needs in minutes.</p>
                        </div>
                        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300">
                                2️⃣
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Browse & Connect</h3>
                            <p className="text-slate-600 leading-relaxed">Explore opportunities or find the perfect freelancer for your project.</p>
                        </div>
                        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300">
                                3️⃣
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Work & Get Paid</h3>
                            <p className="text-slate-600 leading-relaxed">Collaborate seamlessly and receive secure payments upon project completion.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Top Categories</h2>
                        <p className="text-xl text-slate-600">Explore opportunities across diverse fields</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-indigo-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                💻
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Web Development</h3>
                            <p className="text-slate-600 text-sm mb-4">Build stunning websites and web apps</p>
                            <div className="text-sm font-semibold text-indigo-600">2,500+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-cyan-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                🎨
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">UI/UX Design</h3>
                            <p className="text-slate-600 text-sm mb-4">Create beautiful user experiences</p>
                            <div className="text-sm font-semibold text-cyan-600">1,800+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-pink-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                🤖
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">AI & Machine Learning</h3>
                            <p className="text-slate-600 text-sm mb-4">Build intelligent solutions</p>
                            <div className="text-sm font-semibold text-pink-600">950+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-violet-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                📱
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Development</h3>
                            <p className="text-slate-600 text-sm mb-4">iOS and Android apps</p>
                            <div className="text-sm font-semibold text-violet-600">1,200+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-emerald-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                📊
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Digital Marketing</h3>
                            <p className="text-slate-600 text-sm mb-4">Grow your brand online</p>
                            <div className="text-sm font-semibold text-emerald-600">1,600+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-orange-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                ✍️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Content Writing</h3>
                            <p className="text-slate-600 text-sm mb-4">Engaging content for your audience</p>
                            <div className="text-sm font-semibold text-orange-600">2,100+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                🎥
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Video Production</h3>
                            <p className="text-slate-600 text-sm mb-4">Professional video editing</p>
                            <div className="text-sm font-semibold text-blue-600">880+ gigs</div>
                        </div>
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:scale-105 hover:border-teal-300 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-all duration-300">
                                📈
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Business Consulting</h3>
                            <p className="text-slate-600 text-sm mb-4">Strategic business advice</p>
                            <div className="text-sm font-semibold text-teal-600">750+ gigs</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Why Choose Us</h2>
                        <p className="text-xl text-slate-600">The platform built for modern freelancers and clients</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Secure Payments</h3>
                                <p className="text-slate-600 leading-relaxed">Your money is safe with our escrow system. Funds are only released when you're satisfied.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Verified Professionals</h3>
                                <p className="text-slate-600 leading-relaxed">Work with confidence. All freelancers are vetted and verified before joining our platform.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">24/7 Support</h3>
                                <p className="text-slate-600 leading-relaxed">Our dedicated support team is always here to help you succeed on your freelance journey.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Global Opportunities</h3>
                                <p className="text-slate-600 leading-relaxed">Connect with clients and freelancers from around the world. No boundaries, just possibilities.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Smart Matching</h3>
                                <p className="text-slate-600 leading-relaxed">Our AI-powered algorithm matches you with the perfect projects or freelancers for your needs.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 bg-white rounded-lg"></div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-slate-900">Low Fees</h3>
                                <p className="text-slate-600 leading-relaxed">Keep more of what you earn with our transparent and competitive pricing structure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">Join thousands of freelancers and clients who are already building their success stories on our platform.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className="px-10 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            Start Freelancing
                        </a>
                        <a className="px-10 py-4 bg-transparent text-white text-lg font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-indigo-600 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            Post a Project
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-300 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg"></div>
                                <span className="text-xl font-bold text-white">FreelanceHub</span>
                            </div>
                            <p className="text-sm leading-relaxed">Connecting talented freelancers with exciting opportunities worldwide.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-semibold text-lg">For Freelancers</h4>
                            <div className="space-y-2">
                                <a className="block hover:text-white transition-colors duration-300">Find Work</a>
                                <a className="block hover:text-white transition-colors duration-300">How It Works</a>
                                <a className="block hover:text-white transition-colors duration-300">Success Stories</a>
                                <a className="block hover:text-white transition-colors duration-300">Resources</a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-semibold text-lg">For Clients</h4>
                            <div className="space-y-2">
                                <a className="block hover:text-white transition-colors duration-300">Post a Gig</a>
                                <a className="block hover:text-white transition-colors duration-300">Browse Talent</a>
                                <a className="block hover:text-white transition-colors duration-300">Pricing</a>
                                <a className="block hover:text-white transition-colors duration-300">Enterprise</a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-white font-semibold text-lg">Company</h4>
                            <div className="space-y-2">
                                <a className="block hover:text-white transition-colors duration-300">About Us</a>
                                <a className="block hover:text-white transition-colors duration-300">Contact</a>
                                <a className="block hover:text-white transition-colors duration-300">Privacy Policy</a>
                                <a className="block hover:text-white transition-colors duration-300">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm">© 2024 FreelanceHub. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="hover:text-white transition-colors duration-300">Twitter</a>
                            <a className="hover:text-white transition-colors duration-300">LinkedIn</a>
                            <a className="hover:text-white transition-colors duration-300">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
