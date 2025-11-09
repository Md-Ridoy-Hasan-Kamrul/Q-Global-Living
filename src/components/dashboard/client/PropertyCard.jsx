"use client";

import Image from 'next/image';
import { Heart, Bed, Bath } from 'lucide-react';

export default function PropertyCard({ property, onToggleLike }) {
    return (
        <article className="rounded-xl overflow-hidden  bg-white shadow-md">
            <div className="relative">
                <div className="w-full h-64 relative overflow-hidden rounded-t-xl">
                    <Image src={property.image} alt={property.name} fill className="object-cover" unoptimized />
                </div>

                <button
                    onClick={() => onToggleLike(property.id)}
                    className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-md "
                    aria-label={property.liked ? 'Unsave property' : 'Save property'}
                >
                    <Heart size={18} className={property.liked ? 'text-red-500' : 'text-gray-400'} />
                </button>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{property.name}</h3>
                <p className="text-base text-slate-500 mt-1">{property.location}</p>
                <p className="text-blue-800  font-semibold mt-4 text-lg">{property.price} XOF</p>

                <div className="mt-4 border-t pt-3 text-lg text-slate-500 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Bed size={16} className="text-slate-400 w-5 h-5" />
                        <span >{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bath size={16} className="text-slate-400 w-5 h-5 " />
                        <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-slate-400 w-5 h-5">📐</span>
                        <span>{property.area} m²</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
