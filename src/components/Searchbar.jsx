
const Searchbar = ({ value, onChange, onSubmit }) => {

    return(
        <>
            <form className="main-form" onSubmit={onSubmit}>
                <input
                    className="searchbar"
                    placeholder="Busca digimons" 
                    type="text"
                    onChange={onChange}
                    value={value}
                />
            </form>
        </>
    )
}


export default Searchbar