import PropTypes from "prop-types" 


const PokemonCard = (props)=>{
  if ((props.imgSrc) === "" ){
    return (
    <figure>
    <p> ???? </p>
    <figcaption>{props.name}</figcaption>
</figure>)

}
else {
    return (
<figure>
    <img src={props.imgSrc}
        alt={props.name}></img>
   <figcaption>{props.name}</figcaption>
</figure>)}
};

PokemonCard.propTypes = {
    PokemonCard : PropTypes.shape({ 
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
    })
}


  
export default PokemonCard;