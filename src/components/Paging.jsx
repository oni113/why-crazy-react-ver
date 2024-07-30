import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const Paging = ({ totalCount }) => {
    const [page, setPage] = useState(1);

    const movePage = (page) => {
        setPage(page);
    };

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={6}
            totalItemsCount={totalCount}
            prevPageText={'<'}
            nextPageText={'>'}
            onChange={movePage}
        />
    )
}

export default Paging;