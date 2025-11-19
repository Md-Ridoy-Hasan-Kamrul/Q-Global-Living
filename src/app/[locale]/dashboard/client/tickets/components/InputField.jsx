"use client";
import React from "react";

export default function InputField({ label, type = "text", value, onChange, inputRef }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                ref={inputRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
        </div>
    );
}
