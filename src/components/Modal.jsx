import React from 'react';

/**
 * Reusable Modal Component
 * @param {boolean} isOpen - Modal open/close state
 * @param {function} onClose - Function to call when closing modal
 * @param {string} title - Modal header title
 * @param {ReactNode} children - Modal body content
 * @param {string} maxWidth - Maximum width class (default: 'max-w-2xl')
 * @param {boolean} showCloseButton - Show close button in header (default: true)
 * @param {ReactNode} footer - Optional footer content
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-2xl',
  showCloseButton = true,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidth} mx-4 rounded-2xl backdrop-blur-xl`}
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          boxShadow:
            '0px 8px 32px 0px rgba(0, 0, 0, 0.8), inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        {title && (
          <div className='flex items-center justify-between p-6 border-b border-white/10'>
            <h3 className="text-white text-lg font-semibold font-['Poppins']">
              {title}
            </h3>
            {showCloseButton && (
              <button
                onClick={onClose}
                className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Modal Body */}
        <div className='p-6 max-h-[70vh] overflow-y-auto custom-scrollbar'>
          {children}
        </div>

        {/* Modal Footer (Optional) */}
        {footer && (
          <div className='p-6 pt-0 border-t border-white/10'>{footer}</div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Modal;
