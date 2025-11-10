"use client";
import React from "react";
import StatsCard from "@/components/dashboard/admin/StatsCard";

export default function StatsSection({ stats }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatsCard title="Total Tickets" value={stats.total} trend="+0%" variant="primary" />
            <StatsCard title="Open" value={stats.open} trend="+0%" variant="warning" />
            <StatsCard title="In Progress" value={stats.in_progress} trend="+0%" variant="info" />
            <StatsCard title="Resolved" value={stats.resolved} trend="+0%" variant="success" />
        </div>
    );
}
