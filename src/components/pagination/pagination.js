import React, { useState, useEffect } from 'react';
import { useStateValue } from '../context/stateContext';
import './pagination.css'

const Pagination = () => {
    const [store, dispatch] = useStateValue();
    const [pager, setPager] = useState({});

    const defaultProps = {
        initialPage: 1,
        pageSize: 10
    }
    useEffect(() => {
        if (store.data.books && store.data.totalCount)
            setPage(store.page);
    }, [store.data.totalCount])

    function setPage(page) {
        let pager = {};

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = getPager(store.data.totalCount, page, defaultProps.pageSize);
        setPager(pager);

        dispatch({ value: page, update: 'page' });
        dispatch({ value: true, update: 'request' });

    }

    function getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || defaultProps.pageSize;

        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= defaultProps.pageSize) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = defaultProps.pageSize;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    // let pager = pager;

    if (!pager.pages || pager.pages.length <= 1) {
        // don't display pager if there is only 1 page
        return null;
    }

    return (
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => setPage(1)} className="page-link">{`<<`}</a>
                </li>
                <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => setPage(pager.currentPage - 1)} className="page-link">{`<`}</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
                        <a onClick={() => setPage(page)} className="page-link">{page}</a>
                    </li>
                )}
                <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => setPage(pager.currentPage + 1)} className="page-link">{`>`}</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => setPage(pager.totalPages)} className="page-link">{`>>`}</a>
                </li>
            </ul>
        </nav >
    );

}
export default Pagination;

