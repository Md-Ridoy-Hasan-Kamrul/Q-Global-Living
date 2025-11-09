
"use client";
import React, { useState, useRef } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Lock, QrCode, MessageSquare } from "lucide-react";

export default function TwoFactorClient() {
    const [selected, setSelected] = useState(null); // 'authenticator' | 'sms' | null
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");
    const [resent, setResent] = useState(false);
    const inputRef = useRef(null);
    const formRef = useRef(null);

    const router = useRouter();
    const pathname = usePathname();
    const locale = pathname?.split('/')[1] || 'en';

    const selectMethod = (method) => {
        setSelected(method);
        if (method === "authenticator") {
            // For authenticator, navigate to setup page
            router.push(`/${locale}/auth/2fa/setup?method=${method}`);
        } else if (method === "sms") {
            // For SMS, navigate to SMS setup page
            router.push(`/${locale}/auth/2fa/sms-setup`);
        }
    };

    const handleChange = (e) => {
        const v = e.target.value.replace(/\D/g, "");
        setCode(v.slice(0, 6));
        if (status === "error") {
            setStatus("idle");
            setMessage("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code.length !== 6) {
            setStatus("error");
            setMessage("Please enter the 6-digit code.");
            return;
        }
        setStatus("verifying");
        setMessage("");
        setTimeout(() => {
            if (code === "123456") {
                setStatus("success");
                setMessage("Verification successful — demo only.");
            } else {
                setStatus("error");
                setMessage("Invalid code. Try 123456 for this demo.");
            }
        }, 700);
    };

    const handleResend = () => {
        setResent(true);
        setTimeout(() => setResent(false), 3000);
        inputRef.current?.focus();
    };

    return (
        <div className="min-h-screen bg-amber-50">
            <div className="max-w-5xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-200 mb-4">
                        <Lock className="w-6 h-6 text-amber-800" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">
                        Enhance Your Account Security
                    </h1>
                    <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-slate-700 text-sm sm:text-base">
                        Two-Factor Authentication (2FA) adds a critical layer of security to your
                        account. It protects your personal information and property listings by
                        requiring a second verification step when you sign in.
                    </p>
                </div>

                {/* Method Options */}
                <h3 className="text-center text-base sm:text-lg font-semibold mb-5 sm:mb-6">
                    Choose your preferred verification method
                </h3>

                <div className="space-y-5 sm:space-y-6">
                    {/* Authenticator Option */}
                    <div className="bg-white border-2 border-primary/50 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                        <div className="flex items-start sm:items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-md flex items-center justify-center text-amber-700">
                                <QrCode className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                                        Authenticator App
                                    </h4>
                                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                                        Recommended
                                    </span>
                                </div>
                                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-lg">
                                    Use a time-based code from an app like Google Authenticator or Authy.
                                    This is the most secure method.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => selectMethod("authenticator")}
                            className="px-5 py-2 rounded-md bg-primary cursor-pointer text-white font-semibold w-full sm:w-auto"
                        >
                            Set Up
                        </button>
                    </div>

                    {/* SMS Option */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                        <div className="flex items-start sm:items-center gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-50 rounded-md flex items-center justify-center text-slate-600">
                                <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                                    SMS Text Message
                                </h4>
                                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 max-w-lg">
                                    A verification code will be sent to your registered mobile number each
                                    time you log in.
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => selectMethod("sms")}
                            className="px-5 py-2 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold w-full sm:w-auto"
                        >
                            Set Up
                        </button>
                    </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                    <a href="#" className="text-sm text-amber-800 hover:underline">
                        I&apos;ll do this later
                    </a>
                </div>

                {/* OTP Form */}
                <div ref={formRef} className="mt-10 sm:mt-12">
                    {selected && (
                        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-5 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                                Enter the 6-digit code
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 mb-4">
                                We sent a code via{" "}
                                {selected === "authenticator"
                                    ? "your authenticator app"
                                    : "SMS to your phone"}
                                . (Demo accepts <strong>123456</strong>.)
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    id="otp"
                                    ref={inputRef}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    autoComplete="one-time-code"
                                    maxLength={6}
                                    value={code}
                                    onChange={handleChange}
                                    className="w-full text-center tracking-widest text-2xl sm:text-3xl font-medium border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                                    <button
                                        type="submit"
                                        disabled={status === "verifying"}
                                        className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold text-white ${status === "verifying"
                                            ? "bg-gray-400 cursor-wait"
                                            : "bg-amber-600 hover:bg-amber-700"
                                            } w-full sm:w-auto`}
                                    >
                                        {status === "verifying" ? "Verifying…" : "Verify"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        className="text-sm text-amber-600 hover:underline"
                                    >
                                        {resent ? "Resent ✓" : "Resend code"}
                                    </button>
                                </div>

                                <div aria-live="polite" className="min-h-5 text-sm text-center sm:text-left">
                                    {status === "error" && (
                                        <p className="text-red-600">{message}</p>
                                    )}
                                    {status === "success" && (
                                        <p className="text-green-600">{message}</p>
                                    )}
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
