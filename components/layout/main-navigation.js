import Link  from "next/link";

import classes from './main-navigation.css'

function Mainavigation() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Mainavigation;