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
                    <>
                        <Link href={item.path} key={item.path}>
                            <a className={navbarStyles.item}>{item.name}</a>
                        </Link>
                    </>
                )
            })}
        </div>
    )
}
