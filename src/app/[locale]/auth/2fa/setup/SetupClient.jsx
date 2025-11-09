"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Hero from './components/Hero';
import MethodCard from './components/MethodCard';
import QRSection from './components/QRSection';
import VerifyForm from './components/VerifyForm';
import { QrCode } from 'lucide-react';

export default function SetupClient({ method = 'authenticator' }) {
    const [code, setCode] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => inputRef.current?.focus(), 120);
    }, []);

    // sms flow state
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const locale = pathname?.split('/')[1] || 'en';

    const handleChange = (e) => {
        const v = e.target.value.replace(/\D/g, '');
        setCode(v.slice(0, 6));
        if (status === 'error') {
            setStatus('idle');
            setMessage('');
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        // For the dummy confirmation page, accept any numeric input (at least 1 digit)
        if (!code || code.length < 1) {
            setStatus('error');
            setMessage('Enter the verification code.');
            return;
        }
        // navigate to activated confirmation page
        router.push(`/${locale}/auth/2fa/activated`);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('JBSW Y3DP EHPK 3PXP F4G5 H6J7 K8L9');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            // ignore
        }
    };

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto p-2">
                <Hero />
                <div className="space-y-8">
                    {method === 'authenticator' ? (
                        <>
                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">1. Get an authenticator app</h2>
                                <p className="text-base md:text-lg text-slate-600">Download and install an authenticator app like Google Authenticator, Microsoft Authenticator, or Authy on your mobile device.</p>
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">2. Scan this QR code</h2>
                                <QRSection manualCode="JBSW Y3DP EHPK 3PXP F4G5 H6J7 K8L9" copied={copied} onCopy={handleCopy} />
                            </section>

                            <section>
                                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">3. Enter verification code</h2>
                                <p className="text-base md:text-lg text-slate-600 mb-4">Enter the 6-digit code from your authenticator app below to finish setup.</p>

                                <VerifyForm
                                    code={code}
                                    onChange={handleChange}
                                    onVerify={handleVerify}
                                    onCancel={() => { setCode(''); setStatus('idle'); setMessage(''); inputRef.current?.focus(); }}
                                    status={status}
                                    message={message}
                                    inputRef={inputRef}
                                />
                            </section>
                        </>
                    ) : (
                        // SMS flow
                        <>
                            <section>
                                <h2 className="text-lg md:text-2xl font-semibold text-slate-900 mb-3">1. Confirm phone number</h2>
                                <p className="text-sm md:text-base text-slate-600">We will send a one-time code to your registered mobile number.</p>
                                <div className="mt-3 bg-white p-4 rounded border border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-slate-700">Phone</p>
                                            <p className="text-base font-medium">+1 (555) 555-0123</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={async () => {
                                                    setSending(true);
                                                    setTimeout(() => {
                                                        setSending(false);
                                                        setSent(true);
                                                        setMessage('Code sent (demo). Use 123456 to verify.');
                                                        setStatus('idle');
                                                        inputRef.current?.focus();
                                                    }, 900);
                                                }}
                                                className={`px-4 py-2 rounded font-medium ${sending ? 'bg-gray-300 text-gray-600' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
                                            >
                                                {sending ? 'Sending…' : sent ? 'Sent ✓' : 'Send code'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-lg md:text-2xl font-semibold text-slate-900 mb-3">2. Enter verification code</h2>
                                <p className="text-sm md:text-base text-slate-600 mb-4">Enter the 6-digit code we sent by SMS.</p>

                                <VerifyForm
                                    code={code}
                                    onChange={handleChange}
                                    onVerify={(e) => {
                                        // reuse same verify handler
                                        handleVerify(e);
                                    }}
                                    onCancel={() => { setCode(''); setStatus('idle'); setMessage(''); inputRef.current?.focus(); }}
                                    status={status}
                                    message={message}
                                    inputRef={inputRef}
                                />
                            </section>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
