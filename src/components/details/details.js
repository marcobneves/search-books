import React, { useState, useEffect } from 'react';
import './details.css'
import { useStateValue } from '../context/stateContext';

const Details = () => {
    const [store, dispatch] = useStateValue();

    /** Hidden details */
    function hiddenDetails() {
        dispatch({ data: {}, update: 'details', active: false });
    }

    return (
        <div>
            {store.details.active &&
                <div className={`modal ${store.details.active ? 'show' : 'hidden'}`} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header background-title-custom">
                                <h5 className="modal-title ">Detalhes</h5>
                                <button type="button" onClick={hiddenDetails} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{store.details.data.name}</h3>
                                        <p className="card-text">Autor: {store.details.data.author}</p>
                                        <p className="card-text">Editora: {store.details.data.publishing}</p>
                                        <p className="card-text">Ano: {store.details.data.years}</p>
                                        <p className="card-text">Idioma: {store.details.data.language}</p>
                                        <p className="card-text">Peso(g): {store.details.data.length}</p>
                                        <p className="card-text">Comprimento (cm): {store.details.data.weight}</p>
                                        <p className="card-text">Largura (cm): {store.details.data.width}</p>
                                        <p className="card-text">Altura (cm): {store.details.data.height}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a onClick={hiddenDetails} className="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}
export default Details;

