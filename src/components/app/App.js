import Header from '../header/Header'
import SearchPanel from '../search-panel/Search-panel'
import './app.css'
// import Item from '../item/Item'
import ItemList from '../item-list/Item-list'
import ItemAddForm from '../item-add-form/Item-add-form'


function App() {
    return (
        <div className='App' >
            <Header />
                <ItemAddForm/>
            <SearchPanel />
            <div className='search-panel' >
            </div>
            <div>
                <ItemList />
            </div>
        </div>
    )
}

export default App