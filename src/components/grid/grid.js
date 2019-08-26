import React, { useState } from 'react';
import './grid.css'
import List from '../list/list'
import Search from '../search/search'
import Pagination from '../pagination/pagination'
import { StateProvider } from '../context/stateContext';

/** Initial states filter */
const initialState = {
    search: '',
    type: 1,
    yearsInit: '',
    yearsEnd: '',
    page: 1,
    request: true,
    data: {},
    details: {
        active: false,
        data:{}
    }
};

/** Created my store */
const filterReducer = (state, action) => {
    switch (action.update) {
        case 'search':
            return {
                ...state,
                search: action.value
            }
        case 'type':
            return {
                ...state,
                type: action.value
            }
        case 'yearsEnd':
            return {
                ...state,
                yearsEnd: action.value
            }
        case 'yearsInit':
            return {
                ...state,
                yearsInit: action.value
            }
        case 'page':
            return {
                ...state,
                page: action.value
            }
        case 'data':
            return {
                ...state,
                data: action.value
            }
        case 'request':
            return {
                ...state,
                request: action.value
            }
        case 'details':
            return {
                ...state,
                details: {
                    active: action.active,
                    data: action.data
                }
            }

        default:
            return state;
    }
};

/** Stard grid */
const Grid = () => {
    return (
        <StateProvider initialState={initialState} reducer={filterReducer}>
            <Search />
            <List />
            <Pagination />
        </StateProvider>
    )
}

export default Grid;
