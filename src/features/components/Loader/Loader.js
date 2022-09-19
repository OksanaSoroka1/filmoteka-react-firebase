import { ThreeCircles } from 'react-loader-spinner';
import { styleVars } from '../../../styles/vars';
import { usePageSettings } from '../../../hooks/usePageSettings';
/* import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; */

export const PageLoader = () => { 
    const { colorTheme} = usePageSettings()
    return (
        <ThreeCircles
            height="250"
            width="250"
            color="#4fa94d"
            wrapperStyle={{
                backgroundImage: colorTheme === 'dark' ? styleVars.bcgColors.pageLinearDark : styleVars.bcgColors.pageLinearLight,
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor={styleVars.fontColors.accentFirst}
            innerCircleColor={styleVars.fontColors.accentSecond}
            middleCircleColor={ styleVars.fontColors.accentFirst}
/>
    )
}

export const ListLoader = () => { 
    return (
        <ThreeCircles
            height="150"
            width="150"
            color="#4fa94d"
            wrapperStyle={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor={styleVars.fontColors.accentFirst}
            innerCircleColor={styleVars.fontColors.accentSecond}
            middleCircleColor={ styleVars.fontColors.accentFirst}
/>
    )
}