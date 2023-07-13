import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>
                <div>
                    <button>Celulares</button>
                    <button>Tablets</button>
                    <button>Notebooks</button>
                </div>
                <CartWidget />
            </h3>
        </nav>
    )
}

export default NavBar