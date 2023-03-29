import PropTypes from "prop-types" 


const PokemonCard = ({name,imgSrc})=>{
  if ((imgSrc) === "" ){
    return (
    <figure>
    <p> ???? </p>
    <figcaption>{name}</figcaption>
</figure>)

}
else {
    return (
<figure>
    <img src={imgSrc}
        alt={name}></img>
   <figcaption>{name}</figcaption>
</figure>)}
};

PokemonCard.propTypes = {
    PokemonCard : PropTypes.shape({ 
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
    })
}


  
export default PokemonCard;