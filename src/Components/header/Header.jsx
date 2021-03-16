import head from './header.module.css'
const Header = () => {
    return (
        <div className={head.header}>
            <div><img className={head.logo}
                src="https://ivanovo-prof.ru/images/cms/thumbs/a4f0d6f5fa98fbcd87ba71c74d31f1c516f30e99/sotrudnichestvo_256_auto_png.png"
                alt=""/></div>
        </div>
    )
}

export default Header;