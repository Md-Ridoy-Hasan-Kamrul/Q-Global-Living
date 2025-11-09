"use client";
import React from 'react';
import Image from 'next/image';
import { Copy, Check } from 'lucide-react';

export default function QRSection({ manualCode = 'JBSW Y3DP EHPK 3PXP F4G5 H6J7 K8L9', copied, onCopy }) {
    return (
        <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="w-36 h-36 bg-slate-100 rounded-md flex items-center justify-center mx-auto md:mx-0">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcVRtmWpW-Z8IvZ4Wq_sC4HEgpNzSJ3SWRu8VLqXhtNCpStPBQ9-MSXIE4pW4BXUwLn9_8xQ7pKJYrwwSNeWV56tsmU2sx1zf30GUUV77tfYC6ztIXJGkfv-S02ZvmpSHa9nJY5QuvhD5N2sq7WU1IDWciS12aCZJuqgKDLnEwQXY22eeBtcz-hIfZpkWwb_ppEnX0D17-I4pjKlKiHmzT1ihqa4msT2kNz50iymzcjmk3msU5hyRXTDbhHXhb26D-RYOeFjaayis" alt="QR" width={144} height={144} className="object-cover rounded-md" />
            </div>

            <div className="flex-1 w-full">
                <p className="text-base text-slate-700 mb-3">Open your authenticator app and scan the image above (mobile) or to the left (desktop).</p>
                <p className="text-base text-slate-700 mb-2"><strong>Can&apos;t scan the code?</strong></p>
                <p className="text-base text-slate-600">If you can&apos;t use the QR code, you can enter this text code into your authenticator app instead.</p>

                <div className="mt-3 flex flex-col md:flex-row items-start md:items-center gap-3">
                    <div className="w-full md:inline-flex md:w-auto rounded-md bg-slate-50 px-3 py-2 text-base font-mono text-slate-700">{manualCode}</div>
                    <button onClick={onCopy} className="inline-flex items-center gap-2 px-3 py-2 bg-amber-100 text-amber-800 rounded-md sm:w-full md:w-auto">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    );
}
