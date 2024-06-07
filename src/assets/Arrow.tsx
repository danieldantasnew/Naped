const Arrow = ({ height, width }: { height: number; width: number }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 20 20"
      fill="none"
      data-testid="arrow"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z" fill="#545454" />
    </svg>
  );
};

export default Arrow;
