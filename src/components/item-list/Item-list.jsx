import Item from '../item/Item';
import './item-list.css';

const ItemList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Item key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="item-list list-group">
            {elements}
        </ul>
    )
}

export default ItemList;