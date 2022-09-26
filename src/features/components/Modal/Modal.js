import styled from "styled-components";
import { styleVars } from "../../../styles/vars";
import sprite from '../../../images/sprite.svg';
import { StyledIconButton, StyledSvg } from "../../../styles/styledComponents";
import { useDispatch } from "react-redux";
import { setModalVisibility } from "../../../store/siteSettings/reducers";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const StyledBackdrop = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background-color: ${styleVars.bcgColors.backdrop};
z-index: 1000;
`
const StyledModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
z-index: 1001;
transform: translate(-50% ,-50%);
min-width: 400px;
max-height: 70%;
overflow: auto;
padding: 40px;
background-color: ${styleVars.bcgColors.primary};
border-radius: ${styleVars.borders.radius};
`
const ModalCloseBtn = styled(StyledIconButton)`
position: absolute;
top: 20px;
right: 25px;
width: 24px;
height: 24px;
fill: ${styleVars.fontColors.primary};
`
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const onEscPress = (e) => {
            if (e.code !== 'Escape') { return }
            closeModal()
        }
        window.addEventListener('keydown', onEscPress)
        return () => window.removeEventListener('keydown', onEscPress)
    }, []);

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return ()=> document.body.style.overflow = 'unset'
    }, []);
    
    function closeModal() {
        dispatch(setModalVisibility(false));
        console.log('navigate', navigate)
        navigate(location.state?.background, {state : { fromModal: true }})
      
    }
    const onBackdropClick = (e) => {
        if (e.target.id !== 'backdrop') { return }
        closeModal()
    }
    
    return createPortal(<StyledBackdrop id='backdrop'  onClick={ onBackdropClick}>
        <StyledModal >
            <ModalCloseBtn type='button' onClick={closeModal}>
                <StyledSvg> <use href={`${sprite}#icon-Close`}></use></StyledSvg>
            </ModalCloseBtn>
            { children}
    </StyledModal>
</StyledBackdrop>, modalRoot)
}
export default Modal