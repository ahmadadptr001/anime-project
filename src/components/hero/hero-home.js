import axios from "axios";
import { useEffect, useState } from "react"

export default function HeroHome(){
    
    const [dataPopuler ,setDataPopuler] = useState([]);

    useEffect(() => {
        const ambilData = async () => {

            const respData = await axios.get("https://api.jikan.moe/v4/top/anime");
            setDataPopuler(respData.data.data)
        }
        ambilData();
    }, [])


    return (
        <>
            <div className="carousel carousel- slide z-1" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {

                        dataPopuler
                        .filter((anime) => anime.trailer.images.maximum_image_url !== null)
                        .map((anime, index) => (

                            <>
                                <div key={anime.mal_id} className={`carousel-item w-100 ${index === 0 ? "active" : ""}`}>
                                    <img key={anime.mal_id}
                                    src={ anime.trailer.images.maximum_image_url }
                                    alt={anime.title} className="d-block w-100" />
                                    <div className="carousel-caption d-none d-md-block rounded-4" style={{background : "rgba(0,0,0, 0.5)"}}>
                                        <h5  key={anime.mal_id}
                                                className="fw-bold fs-2"
                                                style={{fontFamily : "gloria hallelujah"}}
                                        >
                                            {anime.title}
                                        <p>
                                            # {anime.rank}
                                        </p>
                                        <p  key={anime.mal_id}
                                            className="text-warning fs-4 fw-semibold"
                                        ><i className="bx bxs-star"></i>{anime.score}</p>
                                        </h5>
                                    </div>
                                </div>
                            </>

                        ))

                    }

                </div>
            </div>
        </>
    )
}