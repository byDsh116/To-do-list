import React, { useState } from "react";
import "./item-add-form.css";

const ItemAddForm = () => {

    const [newItem, setNewItem] = useState("")
    const [items, setItems] = useState([])

    const [showEdit, setShowEdit] = useState(-1)
    const [updatedText, setUpdatedText] = useState("")

    function addItem() {
        if (!newItem) {
            alert("Press enter an item.")
            return
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        }

        setItems((oldList) => [...oldList, item])
        setNewItem("");
    }

    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id)
        setItems(newArray)
    }

    function editItem(id, newText) {
        const currentItem = items.filter((item) => item.id === id)
        const newItem = {
            id: currentItem.id,
            value: newText,
        };

        deleteItem(id)

        setItems((oldList) => [...oldList, newItem])
        setUpdatedText("")
        setShowEdit(-1)
    }

    return (
        <div className="app-add-form">
            <h3>Добавить запись </h3>

            <input
                type="text"
                className="form-control new-post-label"
                placeholder="Что нужно сделать?э"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button
                className="btn btn-outline-light"
                onClick={() => addItem()}>Add</button>

            <ul>
                {items.map((item) => {
                    return (
                        <div>
                            <li key={item.id} >
                                {item.value}
                                <button
                                    className="delete-button btn-trash"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                                <button onClick={() => setShowEdit(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </button>
                            </li>

                            {showEdit === item.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={updatedText}
                                        onChange={(e) => setUpdatedText(e.target.value)}
                                    />
                                    <button onClick={() => editItem(item.id, updatedText)}>
                                        Update
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </ul>

        </div>
    );
}

export default ItemAddForm;