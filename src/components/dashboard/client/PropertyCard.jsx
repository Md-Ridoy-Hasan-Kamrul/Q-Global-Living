"use client";

import Image from 'next/image';
import {
    Heart,
    Bed,
    Bath,
    MoreVertical,

    MapPin,
    TriangleRight,
} from 'lucide-react';

function getStatusStyle(status) {
    // lightweight mapping for status -> tailwind classes
    switch (status) {
        case 'sold':
            return 'bg-red-50 text-red-700';
        case 'pending':
            return 'bg-yellow-50 text-yellow-700';
        case 'rented':
            return 'bg-indigo-50 text-indigo-700';
        default:
            return 'bg-green-50 text-green-700';
    }
}

export default function PropertyCard({
    property,
    onToggleLike,
    onView,
    onEdit,
    onDelete,
}) {
    const status = property.status || 'available';

    return (
        <article className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                />

                <button
                    onClick={() => onToggleLike && onToggleLike(property.id)}
                    className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md"
                    aria-label={property.liked ? 'Unsave property' : 'Save property'}
                >
                    <Heart size={18} className={property.liked ? 'text-red-500' : 'text-gray-400'} />
                </button>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Title + menu */}
                <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-base font-semibold text-gray-900">{property.name}</h3>
                        {property.type && (
                            <p className="mt-1 text-sm capitalize text-gray-500">{property.type}</p>
                        )}
                    </div>

                    <button
                        type="button"
                        className="shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                        aria-label="More options"
                    >
                        <MoreVertical className="h-5 w-5" />
                    </button>
                </div>

                {/* Details */}
                <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span className="truncate">{property.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <p className="text-blue-800 font-semibold text-lg">{property.price} XOF</p>
                    </div>


                </div>

                {/* Status + actions */}
                <div className="flex items-center  border-t border-gray-100 pt-4">


                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={() => onView && onView(property.id)}
                            className="flex items-center gap-1.5 rounded p-1.5 text-gray-400 transition-colors "
                            aria-label="View property"
                        >
                            <Bed className="h-4 w-4" />
                            <span>{property.beds}</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => onEdit && onEdit(property.id)}
                            className="flex items-center gap-1.5 rounded p-1.5 text-gray-400 transition-colors "
                            aria-label="Edit property"
                        >
                            <Bath className="h-4 w-4" />
                            <span>{property.baths}</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => onDelete && onDelete(property.id)}
                            className="flex items-center gap-1.5 rounded p-1.5 text-gray-400 transition-colors"
                            aria-label="Delete property"
                        >
                            <TriangleRight className="h-4 w-4" />
                            <span>{property.area} m²</span>
                        </button>

                    </div>
                </div>
            </div>
        </article>
    );
}
