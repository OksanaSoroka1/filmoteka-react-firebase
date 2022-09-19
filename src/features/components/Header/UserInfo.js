import styled from 'styled-components';
import sprite from '../../../images/sprite.svg';
import { styleVars } from '../../../styles/vars';
import { StyledSvg, StyledIconButton } from '../../../styles/styledComponents';
import { useAuth } from '../../../hooks/useAuth';
import { DropdownMenu } from '../DropdownMenu';
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUserLists } from '../../../store/userFilms/reducers';
import { Logout } from './Logout';
import { removeUser } from '../../../store/auth/redusers';
import { useDropdownVisibility } from '../../../hooks/useDropdownVisibility';
const StyledWrapper = styled.div`
position: relative;
display: flex;
align-items: center;

flex-grow: 1;
`
const StyledAvatar = styled.span`
position: relative;
width: 50px;
height: 50px;
flex-shrink: 0;
margin-right: 20px;
fill: ${styleVars.fontColors.secondary};
`
const StyledEmailText = styled.span`
font-size: 25px;
`
const StyledIconDown = styled(StyledIconButton)`
position: absolute;
width: 32px;
height: 32px;
right: -40%;
bottom:-10%;
`


export const UserInfo = () => { 
    const { email } = useAuth()
    const { visibility, setVisibility, closeMenu } = useDropdownVisibility();

    const dispatch = useDispatch();
    const userInfoList = [{ linkName: 'Favorites', path: '/favorites' },
    { linkName: 'Watched', path: '/watched' }, { linkName: 'Wishlist', path: '/wishlist' }]
    
    function onLogOut(e) { 
        dispatch(removeUser());
        dispatch(removeUserLists())
        setVisibility(false)
    }
    
    //email
    return (<StyledWrapper onMouseOut={ closeMenu}>
        <StyledAvatar >
            <StyledSvg ><use href={`${sprite}#icon-UserCircle`}></use></StyledSvg>
            {!visibility ? <StyledIconDown  onClick={()=>setVisibility(!visibility) }><StyledSvg><use href={`${sprite}#icon-ChevronDown`}></use></StyledSvg></StyledIconDown> :
            <StyledIconDown  onClick={()=>setVisibility(!visibility) }><StyledSvg><use href={`${sprite}#icon-ChevronUp` }></use></StyledSvg></StyledIconDown> }
            
        </StyledAvatar>
        <StyledEmailText>{email} </StyledEmailText>
        {visibility && <DropdownMenu menuList={userInfoList} id='user-info'onMenuItemClick={() => setVisibility()}>
            <Logout onLogOut={onLogOut}></Logout>
                    </DropdownMenu> }
    </StyledWrapper>)
}