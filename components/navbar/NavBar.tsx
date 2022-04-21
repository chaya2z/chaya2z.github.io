import navbarStyles from "./navbar.module.css";
import Link from "next/link";

type navbarItem = {
    path: string,
    name: string,
}

export default function NavBar() {
    const items: navbarItem[] = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/posts",
            name: "Posts"
        },
        {
            path: "/about",
            name: "About"
        },
    ]

    return (
        <div className={navbarStyles.container}>
            {items.map(item => {
                return (
                    <div className={navbarStyles.item} key={item.path}>
                        <Link href={item.path}>
                            <a>{item.name}</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
