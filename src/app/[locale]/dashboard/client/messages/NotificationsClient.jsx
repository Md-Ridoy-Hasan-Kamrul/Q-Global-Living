"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function NotificationsClient({ initialNotifications = [] }) {
    const [notifications, setNotifications] = useState(initialNotifications);

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notif => ({ ...notif, is_read: true })));
    };

    const unreadCount = notifications.filter(n => !n.is_read).length;

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">
                            Your Notifications <span className="text-gray-600">({unreadCount})</span>
                        </h1>
                        <p className="text-gray-500 mt-2">Here are your latest property alerts and updates.</p>
                    </div>
                    {unreadCount > 0 && (
                        <button
                            onClick={markAllAsRead}
                            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                        >
                            Mark all as read
                        </button>
                    )}
                </div>

                {/* Notifications */}
                <div className="space-y-8">
                    {notifications.map((notification) => (
                        <div key={notification.id} className="flex gap-8">
                            {/* Left Content */}
                            <div className="flex-1">
                                {/* Dot indicator */}
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-3 h-3 rounded-full mt-1 shrink-0"
                                        style={{
                                            backgroundColor:
                                                notification.type === 'new_listing' ? '#F59E0B' : notification.type === 'price_drop' ? '#F59E0B' : '#F59E0B'
                                        }}
                                    />

                                    <div className="flex-1">
                                        {/* Label */}
                                        <p className="text-sm font-semibold text-yellow-600 mb-1">{notification.label}</p>

                                        {/* Title */}
                                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{notification.title}</h2>

                                        {/* Message */}
                                        <p className="text-gray-600 mb-4 leading-relaxed">{notification.message}</p>

                                        {/* Time */}
                                        <p className="text-sm text-gray-500 mb-4">{formatTime(notification.created_at)}</p>

                                        {/* Button */}
                                        <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded transition-colors">
                                            {notification.action}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="shrink-0 w-72">
                                <Image src={notification.image} alt={notification.title} width={288} height={192} className="w-full h-48 object-cover rounded-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
