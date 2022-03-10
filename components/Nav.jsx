import navStyles from "../styles/Nav.module.css"

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <a className={navStyles.headerText} href="/">Homefeeder</a>

            <div className="floatRight">
                <a className="navItems" href="/about">About</a>
                <a className="navItems" href="/game">Game</a>
                <a className="navItems" href="data">Data</a>

            </div>
        </nav>
    )
}

export default Nav