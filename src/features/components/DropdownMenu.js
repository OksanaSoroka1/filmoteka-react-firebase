import styled from 'styled-components';
import { styleVars } from '../../styles/vars';
import { StyledNavLink } from '../../styles/styledComponents';
import { useLocation } from 'react-router-dom';

const StyledMenuWrap = styled.ul`
position: absolute;
top: 0;
left: 0;
transform: translateY(80px);
z-index: 100;
width: 14.5rem;
min-height: 12.5rem;
padding:0 2rem 2.5rem;
background: ${styleVars.bcgColors.burgerLinear};
border-bottom-left-radius: ${styleVars.borders.radius};
border-bottom-right-radius: ${styleVars.borders.radius};

// enter from
  &.fade-enter {
    opacity: 0;
    transform: translateY(-80px);
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
    transform: translateY(80px);
    transition: opacity 300ms ${styleVars.animation.ease}, transform 300ms ${styleVars.animation.ease};
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to 
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ${styleVars.animation.ease};
  }
`
const StyledMenuItem = styled.li`
min-height: 3rem;
border-bottom: ${styleVars.borders.menuBorder};
display: flex;
align-items: center;
font-size: 25px;

padding-left: 1rem;
transition: border-bottom 300ms ${styleVars.animation.ease}, box-shadow 300ms ${styleVars.animation.ease};
 &:hover, &:focus{
  border-bottom: ${styleVars.borders.menuBorderActive};
  box-shadow: ${styleVars.shadows.menuActive};
}
`
export const DropdownMenu = ({ menuList ,id, children}) => { 
    
    return (<StyledMenuWrap>
        {menuList.map(item => (
            <StyledMenuItem key={item.linkName }>
                <StyledNavLink  to={item.path}>{item.linkName}</StyledNavLink>
             </StyledMenuItem>))
        }
        {id==='user-info'&& <StyledMenuItem>{ children}</StyledMenuItem>}
        
        
    </StyledMenuWrap>)
}