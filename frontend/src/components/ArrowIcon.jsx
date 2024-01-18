function ArrowIcon({ rotation = 0, color = 'black', backgroundColor = 'transparent', size = 100 }) {
  const styles = {
    transform: `rotate(${rotation}deg)`,
    fill: color,
    backgroundColor,
  };

  return (
    <div style={{ width: size, height: size }}>
      <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' style={styles}>
        <image xlinkHref='/icons/arrow_icon.svg' height='100%' width='100%' />
      </svg>
    </div>
  );
}

export default ArrowIcon;
