import footerStyles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={footerStyles.container}>
            <small>&copy; 海底タランテラ chaya2z</small>
            <div className={footerStyles.text}>Powered by GitHub Pages</div>
        </div>
    )
}
