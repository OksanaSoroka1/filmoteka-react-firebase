import { useState } from "react";

export const useLoadingStatus = () => {

    const [loadingStatus, setLoadingStatus] = useState('');

    return {
        loadingStatus,
        setLoadingStatus
    }
 }