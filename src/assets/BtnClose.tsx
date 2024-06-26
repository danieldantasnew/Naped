const BtnClose = ({ height, width }: {height: string, width: string}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="19.8394"
        y="23.332"
        width="28.0572"
        height="4.20858"
        rx="2.10429"
        transform="rotate(-135 19.8394 23.332)"
        fill="#FEFBFB"
      />
      <rect
        x="23"
        y="2.97589"
        width="28.0572"
        height="4.20858"
        rx="2.10429"
        transform="rotate(135 23 2.97589)"
        fill="#FEFBFB"
      />
    </svg>
  );
};

export default BtnClose;
