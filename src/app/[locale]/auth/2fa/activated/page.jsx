


import React from "react";
import {
    Check,
    Copy,
    Download,
    Printer,
    Plus,
    ShieldCheck,
} from "lucide-react";

export const metadata = {
    title: "Two-Factor Authentication Activated",
};

export default function ActivatedPage({ params }) {
    const locale = params?.locale || "en";

    const backupCodes = [
        "K3M4-P8N2-L9B6",
        "F7G8-H1J2-Q4W5",
        "T6Y7-U8I9-02P3",
        "D1F2-G3H4-Z5X6",
        "B9N1-M2L3-K4J5",
        "I8U9-Y1T2-R3E4",
        "A7S8-D9F1-G2H3",
        "L6Z7-X8C9-V1B2",
        "Q5W6-E7R8-T9Y1",
    ];

    return (
        <div className="min-h-screen text-slate-900 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mx-auto mb-6">
                    <Check className="h-6 w-6 text-amber-400" strokeWidth={2.5} />
                </div>

                <h1 className="text-2xl md:text-4xl font-bold mb-3">
                    Two-Factor Authentication Activated!
                </h1>
                <p className="text-slate-600 mb-8">
                   If you lose access to your device, you can use these backup codes to sign in. Store them in a safe place, like a password manager or a physical document
                </p>

                <hr className="border-gray-200 mb-8" />

                <div className="text-left mb-4">
                    <h3 className="text-lg font-semibold">Your Backup Codes</h3>
                    <p className="text-slate-600 text-sm">
                        If you lose access to your device, you can use these backup codes to sign in.
                        Store them in a safe place.
                    </p>
                </div>

                {/* Backup Code List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {backupCodes.map((c) => (
                        <div
                            key={c}
                            className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-3"
                        >
                            <span className="font-mono text-sm text-slate-900">{c}</span>
                            <button className="ml-4 text-slate-700 text-sm bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
                                <Copy size={14} />
                                Copy
                            </button>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 items-center mb-8 justify-center sm:justify-start">
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded flex items-center gap-2">
                        <Download size={16} />
                        Download Codes
                    </button>
                    <button className="bg-white border border-gray-200 text-slate-700 px-4 py-2 rounded flex items-center gap-2">
                        <Printer size={16} />
                        Print Codes
                    </button>
                </div>

                <a
                    href={`/${locale}/dashboard`}
                    className="inline-block bg-amber-400 text-slate-900 px-8 py-3 rounded-md font-semibold"
                >
                    Go to Dashboard
                </a>
            </div>
        </div>
    );
}
