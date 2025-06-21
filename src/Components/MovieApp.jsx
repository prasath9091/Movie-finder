import React, { useEffect, useState } from 'react'
import './Movie.css'


const Details = (props)=>{
    return <>
    <div className="details-container">
        <div className="img-container">
            <img src={props.image} alt="movie poster" />
        </div>
        <div className="movie-detail">

        <div ><span>Name: </span>{props.text}</div>
        <div ><span>Realse Date: </span>{props.date}</div>
        <div ><span>Language:</span> {props.language}</div>
        <div ><span>Genere:</span> {props.Genere}</div>
        <div ><span>Type: </span> {props.type}</div>
        <div ><span>IMDB Rating: </span>{props.rating}/10</div>
        <div ><span>Writer: </span>{props.writer}</div>
        <div ><span>Actors: </span>{props.actor}</div>
        <div ><span>Story: </span>{props.plot}</div>
        {props.season && <div className="totalseason"><span>Total season: </span>{props.season}</div>}
        </div>
    </div>
    </>
}
export const MovieApp = () => {
    const[name,setName] = useState("Tourist Family");
    const[text,setText] = useState("");
    const[image,setImage] = useState(null);
    const[language,setLanguage] = useState("");
    const[story,setStory] = useState(null);
    const[type,setType] = useState("");
    const[rating,setRating] = useState("");
    const[actor,setActor] = useState("");
    const[writer,setWriter] = useState("");
    const[season,setSeason] = useState("");
    const[date,setDate] = useState("");
    const[Genere,setGenere] = useState("");
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);
   

    const search = async ()=>{
        setLoading(true);
        
        setError(true);
        let url = `https://www.omdbapi.com/?t=${name}&apikey=ad405bf2`;
        
            try {
                const res = await fetch(url);
                const data = await res.json();
                if(data.Response==="False"){
                    setLoading(false);
                    setError(true);
                    return;
                }
                setText(data.Title);
                setImage(data.Poster);
                setLanguage(data.Language);
                setType(data.Type);
                setRating(data.imdbRating);
                setWriter(data.Writer);
                setSeason(data.totalSeasons);
                setStory(data.Plot);
                setDate(data.Released);
                setActor(data.Actors);
                setGenere(data.Genre);
                setLoading(false);
                setError(false);
            } catch (error) {
                console.log(error);
            }
            

    }
    useEffect(() => {
        search();
    }, []);
   const handleEnter=(e)=>{
    if(e.key==="Enter"){
      search();
    }
  }
  
  
  return (
    <>
    <div className="container">
        <h3 className='title-app'>Movie Details Finder</h3>
        <div className="search-container">
            <input type="text" className="movie-input" value={name} onChange={(e)=>setName(e.target.value)} onKeyDown={handleEnter}/>
            <button className="search" onClick={search}>search</button>
        </div>
        {loading && <div className='load'>Loading please wait...</div> }
        { !error && !loading && <Details text = {text} image={image} Genere={Genere} type={type} date={date} writer={writer} actor = {actor}plot = {story} season={season} language={language} rating={rating}/>}
        {error && !loading && <p className='error'>Error in fetching Movie.... Movie not found....</p>}
        <p className='design'>Designed by prasath💚</p>
    </div>
    </>
    
  )
   
}
