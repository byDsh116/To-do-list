import Header from '../header/Header'
import './app.css'
import ItemAddForm from '../item-add-form/Item-add-form'

function App() {
    return (
        <div className='App' >
            <Header />
            <ItemAddForm />
            <itemAdd />
        </div>
    )
}

export default App