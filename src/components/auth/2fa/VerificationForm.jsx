"use client";
import React from "react";
import VerificationInput from "./VerificationInput";

export default function VerificationForm({
    verificationCode,
    verificationInputRefs,
    handleVerificationCodeChange,
    handleVerificationCodeKeyDown,
    handleVerifyAndActivate,
    handleResendSMS,
    status,
    message,
}) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Enter Verification Code</h3>
            <p className="text-base text-gray-500 mb-5">
                A 6-digit code was sent to your number. Please enter it below.
            </p>

            <form onSubmit={handleVerifyAndActivate} className="space-y-6">
                <div>
                    <label className="block text-base font-medium text-gray-700 mb-2">
                        Verification Code
                    </label>
                    <div className="flex justify-between gap-2">
                        {verificationCode.map((digit, index) => (
                            <VerificationInput
                                key={index}
                                ref={(el) => (verificationInputRefs.current[index] = el)}
                                index={index}
                                value={digit}
                                onChange={handleVerificationCodeChange}
                                onKeyDown={handleVerificationCodeKeyDown}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-sm text-center">
                    <span className="text-gray-500">Didn’t receive a code? </span>
                    <button
                        type="button"
                        onClick={handleResendSMS}
                        disabled={status === "sending"}
                        className="text-primary hover:text-primary-600 font-medium disabled:opacity-50"
                    >
                        Resend
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={status === "verifying"}
                    className={`w-full py-2.5 rounded-lg font-medium text-white transition-colors ${status === "verifying"
                        ? "bg-primary cursor-wait"
                        : "bg-primary hover:bg-primary-600"
                        }`}
                >
                    {status === "verifying" ? "Verifying..." : "Verify and Activate"}
                </button>

                {status === "error" && message && (
                    <p className="text-red-500 text-sm text-center">{message}</p>
                )}
                {status === "success" && message && (
                    <p className="text-green-600 text-sm text-center font-medium">{message}</p>
                )}
            </form>

            <p className="text-gray-400 text-xs mt-5 text-center">Standard message & data rates may apply.</p>
        </div>
    );
}
