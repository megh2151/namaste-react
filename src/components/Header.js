const Header = () => {
    return (
        <div className="header  header-container">
            <img src="https://t3.ftcdn.net/jpg/01/38/64/78/360_F_138647810_LTv7lSxB7mfT25wmqv9bihCe5BvYu1Y5.jpg" width={120} alt="logo" />
            <ul className="nav-items">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Cart</li>
                <li className="nav-item">Login</li>
            </ul>
        </div>
    )
}

export default Header;