import styled from 'styled-components'
import { styleVars } from '../../../styles/vars';
import { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import noImage from '../../../images/noImage.png';
import { FilmImg } from '../FilmImg';

const StyledFilmCard = styled.li`
position: ${(props) => props.liststyle === 'grid' && 'relative' };
width: 100%;
min-height: 100%;

/* &:nth-child(1){
    grid-row: ${(props)=> props.listStyle === 'grid' && '1/3'};
    grid-column: ${(props)=> props.listStyle === 'grid' && '1/3'};
}
&:nth-child(4){
    @media screen and (max-width:1054px) {
        grid-row: ${(props)=> props.listStyle === 'grid' && '3/5'};
    }
    grid-row: ${(props)=> props.listStyle === 'grid' && '2/4'};
    grid-column: ${(props)=> props.listStyle === 'grid' && '-3/-1'};
}
&:nth-child(11){
   grid-row: ${(props)=> props.listStyle === 'grid' && '4/6'};
    grid-column: ${(props)=> props.listStyle === 'grid' && '2/4'}; 
} */

&:hover, &:focus{
    background: ${props=> props.liststyle === 'list' && styleVars.bcgColors.listCardLinear};
}
`
const StyledFilmLink = styled(Link)`
display: ${(props) => props.liststyle === 'list' && 'flex'};
height: 100%;
align-items: center;
color: inherit;
cursor: pointer;
`

const StyledCardImgWrap = styled.div`
display: block;
height: 100%;
width:  ${(props) => props.liststyle === 'grid' ? '100%': '20%'} ;
`


const StyledContent = styled.div`

position:  ${props=> props.liststyle === 'grid' && 'absolute'};
bottom: ${props=> props.liststyle === 'grid' && '0'};
left: ${props=> props.liststyle === 'grid' && '0'};

display: flex;
flex-direction: column;
width: 100%;
height: ${props=> props.liststyle === 'grid'? '73%': '100%'};
padding: ${props => props.liststyle === 'grid' ? '12%':'40px 20px 20px' };

color: ${props=> props.liststyle === 'grid' && styleVars.fontColors.primary};
background: ${props=> props.liststyle === 'grid' && styleVars.bcgColors.gridCardHoverLinear};
border-top-right-radius: ${props=> props.liststyle === 'grid' && styleVars.borders.radius};
border-top-left-radius: ${props => props.liststyle === 'grid' && styleVars.borders.radius};

`

const StyledCardText = styled.p`
font-size:  ${props=> props.overview? '20px': '32px'};
flex-grow: 1;

`
const StyledCardSpan = styled.span`
font-size: 20px;
color: ${styleVars.fontColors.accentSecond};
align-self: center;


&:hover, &:focus{
    text-decoration: underline;
}
`


export const FilmCard = ({  id, name, poster,overview, liststyle}) => {
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);
    const location = useLocation()
   
    return (<StyledFilmCard liststyle={ liststyle} onMouseOver={() => setDescriptionVisibility(true)} onMouseOut={() => setDescriptionVisibility(false)} >
        <StyledFilmLink liststyle={ liststyle} id={id} to={`${location.pathname}/${id }`} state={{background: location }}>
            <StyledCardImgWrap liststyle={ liststyle}>
                <FilmImg poster={poster} name={ name}></FilmImg>
            </StyledCardImgWrap>
            {liststyle === 'list' && (
                <StyledContent liststyle={ liststyle}>
                    <StyledCardText>{name}</StyledCardText>
                    <StyledCardText overview='true'>{ overview}</StyledCardText>
                    <StyledCardSpan >Detailes</StyledCardSpan>
            </StyledContent>
            )}
            {(descriptionVisibility && liststyle === 'grid') && (<StyledContent liststyle={ liststyle}>
                <StyledCardText>{name}</StyledCardText>
               
                <StyledCardSpan >Detailes</StyledCardSpan>
            </StyledContent>) }        
        </StyledFilmLink>    
    </StyledFilmCard>)
 }
