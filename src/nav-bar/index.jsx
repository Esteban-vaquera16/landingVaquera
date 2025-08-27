import logo from '../componentes/herramientas/img-logo.png';
import carrito from '../componentes/herramientas/img-carrito.png';

import Button from '../componentes/button/index';
import Logo from '../componentes/logo/logo-nombre-negocio';

const NavBar = () => {
    return (
        <nav>
            <Logo img={logo} titulo="Super Monteros" />
            <Button text="Ver carrito" img={carrito} onClick={() => alert("mostrar carrito")} />
        </nav>
    );
};

export default NavBar;