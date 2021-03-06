import React, {useState, useEffect} from 'react';
import './Pagination.css';
const Pagination =({totalRecords, currentPage, pageChangeHandler}) =>{
    console.log('jllljll'+ currentPage)
    const [total, setTotalPages] = useState(0)
    const [pagination, setPagination] = useState([]);
    const [activePage, setActivePage] = useState(1);

    useEffect(()=>{
        if(totalRecords>0){
            setActivePage(currentPage)
            let additionalPages = parseInt(totalRecords%10)>=1 ?1:0
            setTotalPages(parseInt(totalRecords/10)+additionalPages)
            let totalPages = parseInt(totalRecords/10)+additionalPages
            if (totalPages < 7) {
                setPagination([1, 2, 3, 4, 5, 6])
            }else{
                if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 < totalPages) {
                    setPagination( [1, currentPage - 1, currentPage, currentPage + 1, totalPages]);
                  } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 >= totalPages) {
                    setPagination( [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
                  } else {
                    setPagination( [1, 2, 3, 4, 5, totalPages]);
                  }
            }
        }
        console.log(pagination);
    }, [totalRecords, currentPage])
    return (
        <React.Fragment>
            <div className="pagination">
                <a onClick={()=>pageChangeHandler(1)} key="firstPage" style={{cursor: 'pointer'}}>&laquo;</a>
                {pagination.map((page, index)=>{
                    return(<a onClick={()=>pageChangeHandler(page)} key={page} style={{cursor: 'pointer'}} className={(activePage==page)?"active":''}>{pagination[index - 1] + 2 < page ? `...${page}` : page}</a>)
                })}
                {/* <a href="#">1</a>
                <a href="#" className="active">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a> */}

                <a onClick={()=>pageChangeHandler(total)} key="lastPage" style={{cursor: 'pointer'}}>&raquo;</a>
            </div>
        </React.Fragment>
    )
}

export default Pagination;