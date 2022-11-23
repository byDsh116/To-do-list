import './item-add-form.css';

const ItemAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить запись </h3>
            <form 
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Что нужно сделать?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Когда сделать?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default ItemAddForm;