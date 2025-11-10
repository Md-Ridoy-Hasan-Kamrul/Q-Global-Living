"use client";
import React from "react";

export default function Header({ title = "Manage Ticket", subtitle = "Manage all your support requests in one place" }) {
    return (
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5078] rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-sm sm:text-base text-white/80">{subtitle}</p>
        </div>
    );
}
