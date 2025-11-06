
// }
import React from 'react';

export default function VerifyForm({ code, onChange, onVerify, status, message, inputRef, onCancel }) {
    return (
        <form onSubmit={onVerify} className="space-y-4 pl-2">
            {/* Code input - raw numeric value so keyboard input works */}
            <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                maxLength={6}
                value={code}
                onChange={onChange}
                placeholder="- - - - - -"
                className={`text-center bg-white tracking-[0.45em] text-2xl  font-medium border rounded  py-1 focus:outline-none focus:ring-2 focus:ring-primary ${status === 'error' ? 'border-red-500' : 'border-gray-300 focus:border-transparent'
                    }`}
            />

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
                <button
                    type="submit"
                    disabled={code.length !== 6 || status === 'verifying'}
                    className="px-6 py-2 rounded bg-primary text-white font-semibold  disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                    {status === 'verifying' ? 'Verifying...' : 'Verify and Activate'}
                </button>

                <button
                    type="button"
                    onClick={() => {
                        if (typeof onCancel === 'function') onCancel();
                    }}
                    className="px-6 py-2 rounded border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
                >
                    Cancel
                </button>
            </div>

            {/* Status Message */}
            <div aria-live="polite" className="min-h-5 text-sm mt-2">
                {message && (
                    <p
                        className={
                            status === 'success' ? 'text-green-600' : status === 'error' ? 'text-red-600' : 'text-slate-600'
                        }
                    >
                        {message}
                    </p>
                )}
            </div>
        </form>
    );
}
