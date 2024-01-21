import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => (
    <header className="header">
        <Logo/>
        <Search/>
        <Avatar/>
        <UploadButton/>
    </header>
);

const Logo = () => (
    <div className="header__logo">
        <a href="../../App" className="home__link"><img src={logo} alt="Logo" className="header__logo-icon"/></a>
    </div>
);

const Search = () => (
    <form className="header__form">
        <input type="search" placeholder="Search" className="header__search"></input>
    </form>
);

const Avatar = () => (
    <img src={avatar} alt="Avatar image" className="header__avatar" />
)

const UploadButton = () => (
    <button className="header__button">UPLOAD</button>
)

export default Header;