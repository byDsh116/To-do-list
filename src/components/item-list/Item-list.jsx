import Item from '../item/Item';
import './item-list.css';

const ItemList = () => {
    return (
        <ul className="item-list list-group">
            <Item/>
            <Item/>
            <Item/>
        </ul>
    )
}

export default ItemList;