import './Searchbar.css'

function Searchbar() {
    return(
        <div className="searchbar-container">
            <input type="text" className='search-input' placeholder='Search'/>
            <img src="./src/assets/search.png" alt="" className="icon" />
        </div>
    )
}

export default Searchbar