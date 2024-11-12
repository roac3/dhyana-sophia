import '../../styles/layout/header.less';
import logo from '../../assets/header-logo.png';

export const Header = () => {
  return (
    <header>
        <div className="inner-header inner-cont">
            <img src={logo} alt="Logo" className='logo'/>
            <ul className='menu'>
                <li>About</li>
                <li>Services</li>
                <li>Rituals</li>
                <li>Initiation Journey</li>
                <li>Contact</li>
            </ul>
        </div>
    </header>
  )
}