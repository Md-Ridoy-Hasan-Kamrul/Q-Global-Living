"use client";
import React from 'react';

export default function MethodCard({ icon: Icon, title, badge, description, onClick, primary = false }) {
    return (
        <div className={`bg-white ${primary ? 'border-2 border-amber-200' : 'border border-gray-200'} rounded-xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6`}>
            <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-md flex items-center justify-center text-amber-700">
                    {Icon ? <Icon className="w-6 h-6 sm:w-7 sm:h-7" /> : null}
                </div>
                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base md:text-lg font-semibold text-slate-900">{title}</h4>
                        {badge && <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{badge}</span>}
                    </div>
                    <p className="mt-1 sm:mt-2 text-xs md:text-sm text-slate-600 max-w-lg">{description}</p>
                </div>
            </div>
            <button onClick={onClick} className={`${primary ? 'bg-amber-600 text-white' : 'bg-white border text-slate-800'} px-5 py-2 rounded-md font-semibold w-full md:w-auto`}>{primary ? 'Set Up' : 'Set Up'}</button>
        </div>
    );
}
