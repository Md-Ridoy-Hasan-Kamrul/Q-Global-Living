'use client';

import { forwardRef } from 'react';
import * as LucideIcons from 'lucide-react';

const FormInput = forwardRef(
  (
    {
      label,
      type = 'text',
      name,
      placeholder,
      icon,
      error,
      required = false,
      autoComplete,
      className = '',
      ...rest
    },
    ref
  ) => {
    const inputId = `input-${name}`;

    // Get Lucide icon component
    const IconComponent = icon ? LucideIcons[icon] : null;

    return (
      <div className='flex w-full flex-col'>
        <label htmlFor={inputId} className='flex flex-col w-full'>
          <span className='text-charcoal-800 dark:text-background-light text-sm font-medium pb-2'>
            {label}
            {required && (
              <span className='text-red-600 ml-1' aria-label='required'>
                *
              </span>
            )}
          </span>

          <div className='flex w-full items-center rounded-lg'>
            {IconComponent && (
              <div
                className='flex items-center justify-center w-12 h-12 border border-r-0 border-charcoal-200 dark:border-charcoal-600 bg-charcoal-50 dark:bg-charcoal-700/50 rounded-l-lg'
                aria-hidden='true'
              >
                <IconComponent className='text-charcoal-400 dark:text-charcoal-300 h-5 w-5' />
              </div>
            )}

            <input
              ref={ref}
              id={inputId}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? `${inputId}-error` : undefined}
              className={`
                form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden
                ${icon ? 'rounded-r-lg' : 'rounded-lg'}
                text-charcoal-800 dark:text-background-light
                focus:outline-0 focus:ring-0
                border ${
                  error
                    ? 'border-red-500'
                    : 'border-charcoal-200 dark:border-charcoal-600'
                }
                bg-white dark:bg-charcoal-800
                h-12 px-3 text-base font-normal leading-normal
                placeholder:text-charcoal-400 dark:placeholder:text-charcoal-300
                transition-all duration-200
                focus:border-primary focus:shadow-[0_0_0_2px_rgba(212,175,55,0.3)]
                disabled:bg-charcoal-100 disabled:cursor-not-allowed
                ${className}
              `}
              {...rest}
            />
          </div>
        </label>

        {error && (
          <p
            id={`${inputId}-error`}
            className='text-red-600 text-xs mt-1.5 flex items-center gap-1'
            role='alert'
          >
            <LucideIcons.AlertCircle className='h-4 w-4' />
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
