const RandomChoice = (props) => {
  const idx = Math.floor(Math.random() * props.choices.length);
  const color = props.choices[idx];
  return <span>Your Jersey color is: {color}</span>;
};
