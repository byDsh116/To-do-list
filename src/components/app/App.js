import Header from '../header/Header'
import SearchPanel from '../search-panel/Search-panel'
import './app.css'
// import Item from '../item/Item'
import ItemList from '../item-list/Item-list'
import ItemAddForm from '../item-add-form/Item-add-form'



function App() {

    const data = [
        { item: 'one', date: 'nov', done: true },
        { item: 'two', date: 'nov', done: false },
        { item: 'jam', date: 'nov', done: true }

    ]
    return (
        <div className='App' >
            <Header />
            <ItemAddForm />
            <SearchPanel />
            <div className='search-panel' >
            </div>
            <div>
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default App