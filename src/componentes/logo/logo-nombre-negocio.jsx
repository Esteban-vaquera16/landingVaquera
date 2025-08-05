const Logo = (props) =>{
    const {img, titulo} = props;

    return (
        <div className="LogoYTitulo">
            <img src={img }/>
            <p>{titulo}</p>
        </div>
    )
}

export default Logo