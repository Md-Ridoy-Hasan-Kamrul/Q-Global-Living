"use client";
import React from "react";

export default function PhoneForm({
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    handleSendVerificationCode,
    status,
    message,
}) {
    return (
        <form onSubmit={handleSendVerificationCode} className="space-y-4">
            <div>
                <label
                    htmlFor="countryCode"
                    className="block text-base font-medium text-gray-700 mb-1"
                >
                    Country Code
                </label>
                <input
                    type="text"
                    id="countryCode"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                />
            </div>

            <div>
                <label
                    htmlFor="phoneNumber"
                    className="block text-base font-medium text-gray-700 mb-1"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-2.5 rounded-lg font-medium text-white transition-colors ${status === "sending"
                    ? "bg-primary cursor-wait"
                    : "bg-primary hover:bg-primary-600"
                    }`}
            >
                {status === "sending" ? "Sending..." : "Send Verification Code"}
            </button>

            {status === "error" && message && (
                <p className="text-red-500 text-sm">{message}</p>
            )}
        </form>
    );
}
