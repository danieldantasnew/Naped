const ArrowActive = ({height, width}:  {height: number, width: number}) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="white" />
    </svg>
  );
};

export default ArrowActive;
