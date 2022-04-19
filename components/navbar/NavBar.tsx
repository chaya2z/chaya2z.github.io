import navbarStyles from "./navbar.module.css";

export default function NavBar() {
    const items: string[] = [
        "Home",
        "IT",
        "その他",
        "About",
    ]
    return (
        <div className={navbarStyles.container}>
            {items.map((item: string, index: number) => {
                return (
                    <div className={navbarStyles.item} key={index}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}
