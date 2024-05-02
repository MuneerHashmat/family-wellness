import "./header.css";

const Header=()=>{
    return (
        <header>
            <h1>Family Wellness <br /><span>MASSAGE THERAPY</span></h1>
            <nav>
                <a href="#" className="home">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SERVICES</a>
                <a href="#">FAQ</a>
                <a href="#">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header;