const QHomesLogo = ({ className = 'h-12 w-auto' }) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 100 80'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='Q Homes Logo'
    >
      <path d='M50 0L0 25V75L50 100L100 75V25L50 0Z' fill='#d4af37' />
      <text
        fill='#0A192F'
        fontFamily='Poppins, sans-serif'
        fontSize='50'
        fontWeight='bold'
        textAnchor='middle'
        x='50'
        y='62'
      >
        Q
      </text>
    </svg>
  );
};

export default QHomesLogo;
