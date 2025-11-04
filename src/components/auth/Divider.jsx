const Divider = ({ text = 'OR' }) => {
  return (
    <div
      className='w-full flex items-center gap-4 py-4'
      role='separator'
      aria-label={text}
    >
      <hr className='w-full border-t border-charcoal-200 dark:border-charcoal-600' />
      <span className='text-charcoal-400 dark:text-charcoal-300 text-xs font-semibold uppercase tracking-wide'>
        {text}
      </span>
      <hr className='w-full border-t border-charcoal-200 dark:border-charcoal-600' />
    </div>
  );
};

export default Divider;
