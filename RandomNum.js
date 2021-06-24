const RandomNum = () => {
  const rand = Math.floor(Math.random() * 100) + 1;
  return <span>Your Jersey number is: {rand}</span>;
};
