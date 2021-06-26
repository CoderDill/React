const PokeImg = ({ pokeId }) => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
  return <img src={url} alt=""></img>;
};

export default PokeImg;
