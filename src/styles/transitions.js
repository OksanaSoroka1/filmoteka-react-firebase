import { Transition } from "react-transition-group";
import { useRef } from "react";

export const duration = 2000;

export const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

export const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export const Animate = ({inProp , children}) => { 
    const nodeRef = useRef(null)
    return (
        <Transition nodeRef={nodeRef} in={inProp} timeout={2000}>
      {state => (
       children
      )}
    </Transition>
    )

}