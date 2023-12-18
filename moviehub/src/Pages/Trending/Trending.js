import axios from "axios";
import { useState, useEffect } from "react";
import '../../Components/SingleContent/SignleContent'
import SingleContent from "../../Components/SingleContent/SignleContent";
const Trending = () => {
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {

        const {data} = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setContent(data.results);
        
    };

    useEffect(() => {
        fetchTrending();
    },[]);
    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className='trending'>
                {
                    content && content.map((c) => (
                        <SingleContent 
                        key={c.id} 
                        id={c.id} 
                        poster={c.poster_path} 
                        title={c.title || c.name} 
                        date={c.first_air_data || c.release_date}
                        media_type={c.media_type}
                        vote_avaerge= {c.vote_avaerge}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Trending;