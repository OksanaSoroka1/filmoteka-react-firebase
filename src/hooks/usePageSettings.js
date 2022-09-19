import { useSelector } from "react-redux";
import { setColorThemeSlct, setListStyleSlct } from "../store/siteSettings/selectors";

export const usePageSettings = () => { 
    const colorTheme = useSelector(setColorThemeSlct);
    const listStyle = useSelector(setListStyleSlct);

    return {colorTheme, listStyle}

} 