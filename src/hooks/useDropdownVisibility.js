import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const useDropdownVisibility = () => {
    const [visibility, setVisibility] = useState(false)
    const location = useLocation();
     useEffect(() => {
        setVisibility(false)
     }, [location])
    
    function closeMenu(event) { 
      setTimeout(()=>setVisibility(false), 60000)
    }

    return {
        visibility,
        setVisibility,
        closeMenu
    }
 }
