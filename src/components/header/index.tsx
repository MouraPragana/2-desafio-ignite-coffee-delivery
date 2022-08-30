import { HeaderContainer, LocationCartContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import mapIcon from '../../assets/map_icon.svg'
import cartIcon from '../../assets/cart.svg'

export function Header() {
  const quantCart = 1
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <LocationCartContainer>
        <span>
          <img src={mapIcon} alt="" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
          {quantCart > 0 ? <strong>{quantCart}</strong> : ''}
          <img src={cartIcon} alt="" />
        </NavLink>
      </LocationCartContainer>
    </HeaderContainer>
  )
}