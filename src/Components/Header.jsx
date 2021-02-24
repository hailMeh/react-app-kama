import head from './header.module.css'
const Header = () => {
    return (
        <div className={head.header}>
            <div><img className={head.logo}
                src="https://st.depositphotos.com/1105977/2595/i/950/depositphotos_25954971-stock-photo-colored-circle.jpg"
                alt=""/></div>
        </div>
    )
}

export default Header;