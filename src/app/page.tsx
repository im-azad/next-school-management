"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Home() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            router.push("/admin");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 text-white bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
                    <h2 className="text-4xl font-bold mb-4">
                        Welcome to website
                    </h2>
                    <p className="text-lg text-blue-100">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                    </p>
                    <div className="mt-6 text-sm text-orange-100">
                        <p>
                            <strong>Username:</strong> admin
                        </p>
                        <p>
                            <strong>Password:</strong> admin
                        </p>
                    </div>
                </div>
                <div className="p-10">
                    <h3 className="text-center text-xl font-semibold text-purple-600 mb-8">
                        USER LOGIN
                    </h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border rounded-full bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <span className="absolute left-3 top-3.5 text-purple-400">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border rounded-full bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <span className="absolute left-3 top-3.5 text-purple-400">
                                <i className="fas fa-lock" />
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-purple-600"
                                />
                                <span>Remember</span>
                            </label>
                            <a
                                href="#"
                                className="text-purple-500 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
                        >
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
