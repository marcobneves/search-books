import React, { useState, useEffect } from 'react';
import { useStateValue } from '../context/stateContext';
import { Link } from 'react-router-dom';

const Search = () => {
    const [store, dispatch] = useStateValue();
    /** Initial fetch */
    useFetch();

    /**get and dispach values */
    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        dispatch({ value: value, update: name });
    }

    /** Start Request store */
    function sendRequest() {
        dispatch({ value: true, update: 'request' });

    }

    /** Listen onKeyDown Enter */
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            sendRequest()
        }
    }

    /** Listen onKeyDown click btn*/
    function handleClick(e) {
        sendRequest()
    }

    return (

        <div className="container">
            <div className="row p-2">
                {/* <div className="col-md-2 col-sm-2">
                    <h1>BOOK</h1>
                </div> */}
                <div className="col-md-2 col-sm-4">
                    <div className="input-group form-inline">
                        <select name='type' value={store.type} onChange={handleChange} className="form-control form-control-lg" >
                            <option value="1">Titulo</option>
                            <option value="2">Autor</option>
                            <option value="3">ISBN</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Ano:</span>
                        </div>
                        <input
                            onChange={handleChange}
                            name='yearsInit'
                            value={store.yearsInit}
                            onKeyDown={handleKeyPress}
                            type="text"
                            placeholder="2019"
                            className="form-control form-control-lg" />

                        <input
                            onChange={handleChange}
                            name="yearsEnd"
                            value={store.yearsEnd}
                            onKeyDown={handleKeyPress}
                            type="text"
                            placeholder="2020"
                            className="form-control form-control-lg" />

                    </div>

                </div>

                <div className="col-md-5 col-sm-4">
                    <div className="input-group form-inline">
                        <input
                            onKeyDown={handleKeyPress}
                            name='search'
                            onChange={handleChange}
                            value={store.search}
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Buscar..."
                            aria-describedby="button-addon2" />


                        <div className="input-group-append btn-group">
                            <button
                                onClick={handleClick}
                                className="btn btn-outline-secondary btn-custom"
                                type="button">Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center col-md-1 col-sm-4">
                    <Link className="btn btn-outline-secondary" to='./'>Sair</Link>
                </div>

            </div>

        </div>
    )
}


function useFetch() {
    const [store, dispatch] = useStateValue();

    /** Init Fetch  */
    async function fetchUrl() {
        /** Concate values for link */
        const link = 'https://book-api-supero.herokuapp.com';
        let url = `${link}/filter?page=${store.page}&yearsStart=${store.yearsInit.trim()}&yearsEnd=${store.yearsEnd.trim()}&search=${store.search.trim()}&searchType=${store.type}`;

        /** set Request false for store */
        dispatch({ value: false, update: 'request' });

        await fetch(url).then(response => {
            return response.json();
        })
            .then(data => {
                dispatch({ value: data, update: 'data' });
            })
            .catch(error => {
                dispatch({ value: { books: [] }, update: 'data' });
            })
    }

    useEffect(() => {
        if (store.request)
            fetchUrl();

    }, [store.request]);
}

export default Search;
