'use client';

import { Component } from 'react';
import Link from 'next/link';

/**
 * Production-grade Error Boundary Component
 *
 * Features:
 * - Catches JavaScript errors in child component tree
 * - Logs error details for debugging
 * - Provides user-friendly fallback UI
 * - Allows error recovery
 * - Follows React error boundary best practices
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // Send to error reporting service (e.g., Sentry)
    if (
      typeof window !== 'undefined' &&
      process.env.NODE_ENV === 'production'
    ) {
      // window.Sentry?.captureException(error);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4'>
          <div className='max-w-md w-full text-center'>
            <div className='mb-8'>
              <svg
                className='w-20 h-20 mx-auto text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
            </div>

            <h1 className='text-2xl font-bold text-charcoal dark:text-soft-grey mb-4'>
              Something went wrong
            </h1>

            <p className='text-charcoal/70 dark:text-soft-grey/70 mb-8'>
              We encountered an unexpected error. Please try again or return to
              the homepage.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mb-8 text-left bg-charcoal/5 dark:bg-soft-grey/5 rounded-lg p-4'>
                <summary className='cursor-pointer font-semibold text-sm mb-2'>
                  Error Details (Dev Only)
                </summary>
                <pre className='text-xs overflow-auto text-red-600 dark:text-red-400'>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <button
                onClick={this.handleReset}
                className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                type='button'
              >
                Try Again
              </button>

              <Link
                href='/'
                className='px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-block'
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
