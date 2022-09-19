import {  useDispatch } from "react-redux";
import { StyledIconButton, StyledSvg } from "../../../styles/styledComponents";
import sprite from '../../../images/sprite.svg';
import { setColorTheme } from "../../../store/siteSettings/reducers";
import { usePageSettings} from '../../../hooks/usePageSettings'
export const ColorThemeBtn = () => { 
    const {colorTheme} = usePageSettings();
    const dispatch = useDispatch();
    const changeColorTheme = () => { 
      return  colorTheme ==='light'? 'dark': 'light'
    }
    return (<StyledIconButton type="button" onClick={()=>dispatch(setColorTheme(changeColorTheme()))}>
        <StyledSvg><use href={`${sprite}#icon-color-theme`}></use></StyledSvg>
    </StyledIconButton>)
}