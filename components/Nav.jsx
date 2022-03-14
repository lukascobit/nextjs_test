import Link from "next/link";

function Nav() {
    return (
        <nav className="nav">
            <Link className="headerText" href="/">
                Homefeeder
            </Link>

            <div className="floatRight navItems">
                <Link href="/about">
                    <h5 className="navItem">About</h5>
                </Link>
                <Link href="/game">
                    <h5 className="navItem">Game</h5>
                </Link>
                <Link href="/data">
                    <h5 className="navItem">Data</h5>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
