"use client";
import React from "react";

const VerificationInput = React.forwardRef(function VerificationInput(
    { value, onChange, onKeyDown, index },
    ref
) {
    return (
        <input
            ref={ref}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            onKeyDown={(e) => onKeyDown(index, e)}
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold text-gray-800 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
        />
    );
});

export default VerificationInput;
