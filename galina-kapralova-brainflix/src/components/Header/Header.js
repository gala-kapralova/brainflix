    import logo from "../../assets/logo/BrainFlix-logo.svg";
    import avatar from "../../assets/images/Mohan-muruge.jpg";
    import { Link } from "react-router-dom"
    import "./Header.scss";

    const Header = () => (
    <header className="header">
        <nav className="header__nav">
            <Logo/>
            <Search/>
            <Avatar/>
            <UploadButton/>
        </nav>
    </header>
    );

    const Logo = () => (
    <div className="header__logo">
        <Link to="/"><img src={logo} alt="Logo" className="header__logo-icon"/></Link>
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
    <Link to="/video-upload" className="header__link"><button className="header__button">UPLOAD</button></Link>
    )

    export default Header;