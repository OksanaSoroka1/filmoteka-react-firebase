import styled from 'styled-components';
import { styleVars } from '../../styles/vars';
import noImage from '../../images/noImage.png';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const FilmImg = ({poster, name}) => { 
    return (<LazyLoadImage src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : noImage}
        
        alt={name}
        /* placeholderSrc={poster ? `https://image.tmdb.org/t/p/w400${poster}` : noImage} */  
        effect='blur'
    />)
}