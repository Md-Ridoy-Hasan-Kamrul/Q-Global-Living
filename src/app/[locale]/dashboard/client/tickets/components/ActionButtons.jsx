"use client";
import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

export default function ActionButtons({ onView, onEdit, onDelete }) {
    return (
        <div className="flex gap-2">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onView && onView();
                }}
                type="button"
                className="rounded p-1.5 hover:bg-gray-100 transition-colors"
                aria-label="View"
            >
                <Eye className="h-4 w-4 text-gray-600" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onEdit && onEdit();
                }}
                type="button"
                className="rounded p-1.5 hover:bg-gray-100 transition-colors"
                aria-label="Edit"
            >
                <Edit className="h-4 w-4 text-blue-600" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete && onDelete();
                }}
                type="button"
                className="rounded p-1.5 hover:bg-gray-100 transition-colors"
                aria-label="Delete"
            >
                <Trash2 className="h-4 w-4 text-red-600" />
            </button>
        </div>
    );
}
