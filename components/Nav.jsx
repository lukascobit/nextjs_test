import Link from "next/link"

function Nav() {
    return (
        <nav className="nav">
            <Link className="headerText" href="/">Homefeeder</Link>

            <div className="floatRight">
                <Link className="navItems" href="/about">About </Link>
                <Link className="navItems" href="/game">Game </Link>
                <Link className="navItems" href="data">Data </Link>

            </div>
        </nav>
    )
}

export default Nav