import axios from "axios";
import { useEffect, useState } from "react"

export default function UpdateAnime() {

    const [seasonData, setSeasonData] = useState([]);


    useEffect(() => {

        const dataAnime = async () => {
            const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
            setSeasonData(response.data.data)
        }

        dataAnime();

    }, [])

    return (
        <>
            <div className="container-fluid mt-4 mb-2">
                <div className="card border-0">
                    <div className="card-header bg-dark p-3 border-0">
                        <h2 className="card-title fw-bold fs-2 text-light" style={{fontFamily : "open sans"}}>
                            Anime<span className="text-warning">Musim</span>Ini
                        </h2>
                    </div>

                    <div className="card-body anime-season mt-3">
                        <div className="container-fluid me-0 ms-0">
                            <div className="row flex-nowrap px-0 py-3" style={{overflowX : "auto", overflowY : "hidden"}}>
                                <div className="col-auto me-3">
                                        {
                                            seasonData
                                            .filter((anime, index) => index === 0)
                                            .map((anime, index) => (
                                                <CardAnime
                                                    key={anime.mal_id}
                                                    image={anime.images.jpg.large_image_url}
                                                    title={anime.title} width="420px"/>
                                            ))
                                        }
                                </div>
                                <div className="col-auto d-block flex-wrap align-items-center d-flex">
                                    <div className="row flex-nowrap">
                                        {
                                            seasonData
                                            .filter((anime, index) => index % 2 !== 0)
                                            .map((anime, index) => (
                                                <CardAnime
                                                    key={anime.mal_id}
                                                    image={anime.images.jpg.image_url}
                                                    title={anime.title} width="200px" />
                                            ))
                                        }
                                    </div>
                                    <div className="row flex-nowrap">
                                        {
                                                seasonData
                                                .filter((anime, index) => index % 2 === 0 && index !== 0)
                                                .map((anime, index) => (
                                                    <CardAnime
                                                        key={anime.mal_id}
                                                        image={anime.images.jpg.image_url}
                                                        title={anime.title}
                                                        width="200px"/>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function CardAnime(props) {
    return (

    <div className="card border-0 p-0 mx-2"  style={{width :"auto", height : props.width}}>
        <img
            key={props.key}
            src={props.image}
            alt={props.title}
            className="img-fluid h-100 w-100"
            style={{ objectFit : "cover"}}
            />
    </div>

    )
}

