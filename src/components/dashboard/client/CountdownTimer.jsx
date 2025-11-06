"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState(getRemaining());

    function getRemaining() {
        const target = typeof targetDate === "string" || typeof targetDate === 'number'
            ? new Date(targetDate).getTime()
            : targetDate instanceof Date
                ? targetDate.getTime()
                : Date.now();

        const now = Date.now();
        const diff = Math.max(0, target - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const id = setInterval(() => setTimeLeft(getRemaining()), 1000);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetDate]);

    const box = (value, label) => (
        <div className="bg-white rounded-lg shadow px-6 py-6 text-center">
            <div className="text-2xl font-semibold text-slate-900">{String(value).padStart(2, '0')}</div>
            <div className="text-xs text-slate-500 mt-1">{label}</div>
        </div>
    );

    return (
        <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {box(timeLeft.days, 'Days')}
            {box(timeLeft.hours, 'Hours')}
            {box(timeLeft.minutes, 'Minutes')}
            {box(timeLeft.seconds, 'Seconds')}
        </div>
    );
}
