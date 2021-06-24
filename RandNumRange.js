const RandNumRange = ({min=1, max=10}) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  return <p>{num}</p>;
};
