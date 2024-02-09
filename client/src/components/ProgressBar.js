const ProgressBar = ({ progress }) => {
  console.log(progress);

  let color = '#ffafa3'; // default red

  if (progress > 25) {
    color = '#FFC0A3'; // orange
  }
  if (progress > 50) {
    color = '#FFF3A3'; // yellow
  }
  if (progress > 75) {
    color = '#D8E2C1'; // light green
  }
  if (progress === 100) {
    color = '#C1E2C6';
  }

  console.log(color);

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
