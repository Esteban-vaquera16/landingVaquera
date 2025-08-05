const Button = (props) =>{

    const {text, img , onClick} = props;

    return(
        <button onClick={onClick}>
            <img src={img}></img>
            {text}
        </button>
    )
}

export default Button 