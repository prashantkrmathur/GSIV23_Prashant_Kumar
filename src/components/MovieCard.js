import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieCard = (props) => {
    const {id, title, description, rating, imageId } = props
    return (
        <div style={{padding:"2em", width:"13em"}}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${imageId}`}></img>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h5>{title}</h5>
                <h5>{rating }</h5>
            </div>
            <div>{description }</div>
    
        </div>
    )
}

export default MovieCard
