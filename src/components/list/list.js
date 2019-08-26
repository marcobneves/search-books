import React, { useState } from 'react';
import { useStateValue } from '../context/stateContext';
import Message from '../message/message';
import Details from '../details/details';

const List = () => {
    const [store, dispatch] = useStateValue();

    /** Show details */
    const detailsShow = (book) => {
        dispatch({ data: book, update: 'details', active: true });
    }

    return (

        <div className="container">
            <Details />
            {
                !store.data.books &&
                <Message type="4" message="Carregando" />
            }
            {
                store.data.books && store.data.books.length === 0 &&
                <Message type="2" message="Nenhum registro encontrato" />
            }

            <div class="table-responsive-sm">
                <table className="table table-bordered table-striped">
                    <thead className="background-title-custom">
                        <tr>
                            <th scope="col">Livro</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Ano</th>
                            <th scope="col" className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.data.books && store.data.books.map((book, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <p>{`${book.name} (${book.isbn})`}</p>
                                        </td>
                                        <td>{book.author}</td>
                                        <td>{book.publishing}</td>
                                        <td>{book.years}</td>
                                        <td className="text-center"><a href="#" onClick={() => detailsShow(book)} className="btn btn-custom">Detalhes</a></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div >

    )
}
export default List;
