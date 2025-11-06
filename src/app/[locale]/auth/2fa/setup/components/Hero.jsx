"use client";
import React from 'react';

export default function Hero() {
    return (
        <div className="text-center mb-8 md:mb-12 px-2">
            <h1 className="text-2xl  md:text-4xl font-semibold text-[#181611]">Set Up Two-Factor Authentication</h1>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-gray-700 text-base md:text-lg">
                Add an extra layer of security to your account. Two-factor authentication protects your account by requiring a unique verification code when you sign in.
            </p>
        </div>
    );
}
