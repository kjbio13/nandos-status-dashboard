import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemCard = ({ props }) => {

    const [status, setStatus] = useState([])


    useEffect(() => {
        axios
            .get(`${props.url}`)
            // .get(` https://cors-anywhere.herokuapp.com/google.com`)

            .then(res => { 
                let status = {status: res.status, statusText: res.statusText}
                setStatus(status)
                console.log(status)
             })
    })

    return (
        <>
            {props.id} <br/>
            {props.name} <br/>
            {props.url}<br/>
            {props.imageUrl}<br/>
            {props.subtext_1}<br/><br/><br/>
            {status.status}<br/>
<<<<<<< HEAD
            {status.statusText}<br/>Does this change?<br/>
=======
            {status.statusText}<br/><br/><br/>
>>>>>>> a69fa2e45622f70ddaf0d19d61e27b3c9ca1d8cd
            {/* {console.log(props.id)}<br/> */}
        </>
    )
}

export default ItemCard;