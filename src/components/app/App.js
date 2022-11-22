import Header from '../header/Header'
import SearchPanel from '../search-panel/Search-panel'
import './app.css'
import Item from '../item/Item'


function App() {
    return (
        <div className='App' >
            <Header />
            <SearchPanel />
            <div className='search-panel' >
            </div>
            <div>
                <Item />
            </div>
        </div>
    )
}

export default App