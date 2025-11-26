import React from 'react';

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <header className="border-b bg-white shadow-sm">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-600">SafeStay</div>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 text-gray-700 hover:text-primary-600">
                            Login
                        </button>
                        <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Find Your Perfect Student Home
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Verified, safe housing near your university
                </p>

                {/* Search Box */}
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Location"
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <option>Select University</option>
                            <option>Cairo University</option>
                            <option>Ain Shams University</option>
                            <option>Alexandria University</option>
                        </select>
                        <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-primary-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Verified Properties</h3>
                        <p className="text-gray-600">
                            All properties are verified for your safety and peace of mind
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                        <p className="text-gray-600">
                            Escrow system protects both students and property owners
                        </p>
                    </div>

                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">
                            Our team is always here to help with any issues
                        </p>
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="container mx-auto px-4 py-16 text-center">
                <div className="bg-primary-50 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Platform Coming Soon!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        We are currently setting up the infrastructure. Stay tuned for the full launch!
                    </p>
                    <div className="flex gap-4 justify-center">
                        <span className="px-4 py-2 bg-white rounded-lg shadow">
                            ✅ Database configured
                        </span>
                        <span className="px-4 py-2 bg-white rounded-lg shadow">
                            ✅ API ready
                        </span>
                        <span className="px-4 py-2 bg-white rounded-lg shadow">
                            🔄 Frontend in development
                        </span>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-gray-50 mt-16">
                <div className="container mx-auto px-4 py-8 text-center text-gray-600">
                    © 2025 SafeStay. Built with ❤️ for Egyptian Students.
                </div>
            </footer>
        </main>
    );
}
