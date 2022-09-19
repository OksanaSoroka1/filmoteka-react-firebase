import styled from 'styled-components';

import { styleVars } from '../../../styles/vars';
import { useState, useMemo ,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PagesNavEl } from './PagesNavEl';
import { useFetchPage } from '../../../hooks/useFetchPage';

const StyledPagesNavBlock = styled.div`
justify-self: center;
max-width: 500px;
display: inline-flex;
justify-content: space-between;
`

export const PagesNav = ({ totalPages, onPageClick, search}) => { 
   /*  const [fetchPage, setFetchPage] = useState('1'); */
    const [pagesArr, setPagesArr] = useState([]);
    const { fetchPage } = useFetchPage();
    
   /*  const location = useLocation();
     useEffect(() => { 
         setFetchPage('1')
         console.log('fetch page 1 on  new search')
     }, [search])
    useEffect(() => {
        
        
        setFetchPage('1')
         console.log('fetch page 1 on  new location')
        
     },[location]) */
    useEffect(() => { 
        console.log('totalPages',totalPages)
        const arr = [];
         for (let i = 1; i <= totalPages; i += 1) {
           arr.push(i)
        }
        setPagesArr(arr)
    }, [totalPages])
   
    /*  const pagesArr = useMemo(() => {
         console.log('memo works')
        const arr = [];
         for (let i = 1; i <= totalPages; i += 1) {
           arr.push(i)
        }
        return arr
     }, [totalPages])   */
    
     
    /* const renderBtn = (value, content) => { 
       
        return <button key={`${content}_${value}`}  style={{backgroundColor: content.toString()===fetchPage? 'red': 'blue'}} type='button' value={value} onClick={(e) => { setFetchPage(e.target.value) }} >{content}</button>

    } */
    const renderPages = () => { 
        if (pagesArr.length <= 10) {  
            return pagesArr.map(page => <PagesNavEl value={page} content={ page}  ></PagesNavEl> ) 
        }
        if (fetchPage <= 5) {
            return (<>   
                {pagesArr.filter((p, ind) => ind <= 5).map(page => <PagesNavEl value={page} content={ page}  ></PagesNavEl>)}
                <span> ... </span>
                <PagesNavEl value={pagesArr.length} content={ pagesArr.length}  ></PagesNavEl>
               
        </>   
        ) 
        }
        if (fetchPage >= (pagesArr.length - 4)) { 
            return (<>   
                 <PagesNavEl value='1' content='1'  ></PagesNavEl>
            <span> ... </span>
                {pagesArr.filter((p, ind) => ind >= pagesArr.length - 6).map(page => <PagesNavEl value={page} content={ page}  ></PagesNavEl> )}
        </>   
        ) 
        }
        return (<>  
            <PagesNavEl value='1' content='1'  ></PagesNavEl>
               
            <span> ... </span>
            {pagesArr.filter((p, ind) => (ind >= Number(fetchPage) - 2) && (ind <= Number(fetchPage) + 5)).map(page => <PagesNavEl value={page} content={ page}  ></PagesNavEl>)}
            <span> ... </span>
            <PagesNavEl value={pagesArr.length} content={ pagesArr.length}  ></PagesNavEl>
            
        </>   
        ) 

    }

    return (
        <StyledPagesNavBlock>
            <PagesNavEl value='1' content='<<' ></PagesNavEl>
            
           
            {fetchPage > 1 && <PagesNavEl value={(Number(fetchPage) - 1)} content='<' ></PagesNavEl>}
            {renderPages()}

            {(fetchPage < pagesArr.length) && <PagesNavEl value={ (Number(fetchPage) + 1)} content='>'  ></PagesNavEl> }
            <PagesNavEl value={ (pagesArr[pagesArr.length -1])} content='>>'  ></PagesNavEl>
                    
        </StyledPagesNavBlock>
    )
}