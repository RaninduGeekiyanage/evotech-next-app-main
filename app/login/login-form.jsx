'use client'

// use for client side (brwser side) CSR
import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <div className="w-[400px] mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-center text-xl font-semibold text-gray-900">
                            Sign in to Evotech
                        </h3>

                        {/* email div*/}
                        <div>
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="your email"
                                className="bg-gray-50 border text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5"
                            />
                        </div>

                        {/* password div*/}
                        <div>
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Your Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                className="bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus: focus:border-blue-600 block w-full p-2.5"
                            />
                        </div>


                         {/* checkbox area */}
                        <div className="flex justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="bg-gray-50 border border-gray-3000 focus:ring-4 focus:ring-blue-300 h-4 w-4 rounded"
                                    />
                                </div>
                                <div className="text-sm ml-3">
                                    <label
                                        htmlFor="remember"
                                        className="font-medium text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <a
                                href="/forget-password"
                                className="text-sm font-medium text-blue-700 hover:underline"
                            >
                                Lost Password?
                            </a>
                        </div>

                        {/* submit button */}
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Sign In
                        </button>

                        <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
                            <span>Not Registerd?</span>
                            <a href="/register" className="text-blue-700 hover:underline">
                                Create an account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}
