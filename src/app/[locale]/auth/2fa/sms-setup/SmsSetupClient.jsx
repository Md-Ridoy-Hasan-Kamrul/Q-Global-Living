"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import PhoneForm from "../../../../../components/auth/2fa/PhoneForm";
import VerificationForm from "../../../../../components/auth/2fa/VerificationForm";

export default function SmsSetupClient() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("+225");
    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const [codeSent, setCodeSent] = useState(false);
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");
    const verificationInputRefs = useRef([]);
    const router = useRouter();

    const handleSendVerificationCode = (e) => {
        e.preventDefault();
        if (!phoneNumber) {
            setStatus("error");
            setMessage("Please enter your phone number.");
            return;
        }
        setStatus("sending");
        setMessage("");
        setTimeout(() => {
            setCodeSent(true);
            setStatus("idle");
            setMessage("");
        }, 1000);
    };

    const handleVerificationCodeChange = (index, value) => {
        if (value && !/^\d+$/.test(value)) return;
        const newCode = [...verificationCode];
        newCode[index] = value.slice(0, 1);
        setVerificationCode(newCode);
        if (value && index < 5) verificationInputRefs.current[index + 1]?.focus();
    };

    const handleVerificationCodeKeyDown = (index, e) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            verificationInputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerifyAndActivate = (e) => {
        e.preventDefault();
        const fullCode = verificationCode.join("");
        if (fullCode.length !== 6) {
            setStatus("error");
            setMessage("Please enter the complete 6-digit code.");
            return;
        }
        setStatus("verifying");
        setMessage("");
        setTimeout(() => {
            setStatus("success");
            setMessage("2FA activated successfully!");
            setTimeout(() => {
                // router.push("/dashboard");
            }, 2000);
        }, 1000);
    };

    const handleResendSMS = () => {
        setStatus("sending");
        setVerificationCode(["", "", "", "", "", ""]);
        setTimeout(() => {
            setStatus("idle");
            setMessage("Code resent successfully!");
            setTimeout(() => setMessage(""), 3000);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center  px-2 md:px-4  py-10">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-1">Enhance Your Account Security</h2>
                <p className="text-base md:text-lg text-gray-700 mb-6">Set up Two-Factor Authentication (2FA) to add an extra layer of protection.</p>

                {!codeSent ? (
                    <PhoneForm
                        countryCode={countryCode}
                        setCountryCode={setCountryCode}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        handleSendVerificationCode={handleSendVerificationCode}
                        status={status}
                        message={message}
                    />
                ) : (
                    <VerificationForm
                        verificationCode={verificationCode}
                        verificationInputRefs={verificationInputRefs}
                        handleVerificationCodeChange={handleVerificationCodeChange}
                        handleVerificationCodeKeyDown={handleVerificationCodeKeyDown}
                        handleVerifyAndActivate={handleVerifyAndActivate}
                        handleResendSMS={handleResendSMS}
                        status={status}
                        message={message}
                    />
                )}
            </div>
        </div>
    );
}
