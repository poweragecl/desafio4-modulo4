import { useEffect, useState  } from "react";
import Searchbar from "./Searchbar";


const MiApi = () => {

    const [digimons, setDigimons] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const getGames = async () => {

        const query = "https://digimon-api.vercel.app/api/digimon";
    
        const response = await fetch(query);
        const data = await response.json();
    
        const dataOrdenada = data.sort((a, b) => 
            a.name.localeCompare(b.name)
        )
          
        setDigimons(dataOrdenada);
    
    }

    const filtrarDigimon = (d) => {
        return d.name.toLowerCase().includes(busqueda.toLowerCase())
    }

    const handleChange = e => {  
        setBusqueda(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {
        getGames()
    }, []);

    return(
        <>

            <header className="main-header">

                <h1 className="site-title">DigiFinder</h1>
                <p className="site-description">Encuentra tu digimon favorito</p>
                
                <Searchbar value={busqueda} onChange={handleChange} onSubmit={handleSubmit} />

            </header>


           
            <div className="cards">

                {digimons.filter(filtrarDigimon).map((d, index) => (
                    <div className="card-item" key={index}>
                        <img className="card-image" src={d.img} />

                        <div className="card-info">
                            <h3 className="card-title">{d.name}</h3>
                            <h5 className="card-category">Level: {d.level}</h5>
                        </div>

                    </div>
                ))} 

            </div>


        </>
    )
}

export default MiApi