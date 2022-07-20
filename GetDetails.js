import React, { useState, useEffect } from 'react';
import localStorage from 'local-storage';
import './style.css'
import { useNavigate } from "react-router-dom";
import down from '../src/down.png'
import up from '../src/up.png'
import { createPopper } from "@popperjs/core";


const LogIn = () => {




    const [array, setArray] = useState([]);

    const [count, setCount] = useState(0);
    console.log('---hey', count)


    const incrementCount = () => {
        setCount(count + 1);
 
    }
    const decrementCount = () => {
        setCount(count - 1);
    }

    useEffect(() => {
       
    }, [ ])
    


    async function getData() {
        const response = await fetch('https://hoblist.com/api/movieList', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category: 'movies',
                language: 'kannada',
                genre: 'all',
                sort: 'voting',
            })
        })
        let json = await response.json()
        console.log('hi', json)
        console.log(json.result[0].voted)
        setArray(json.result)
    }

    useEffect(() => {

        getData()

    }, [])




    const apiData = array
    // console.log('--------api data', apiData)

 
    return (
        array.map((data) => {
            return (
                <div class="container p-3 ">

                    <div class="row">
                        <div class="col justify-content-center">
                            <div className='row'>
                                <button
                                    onClick={incrementCount}
                                    id='up-vote'

                                ><img src={up} style={{ height: 60, width: 60 }} /></button>
                            </div>
                            <div className='row' style={{ right: 20 }}>
                                {/* <p>{data.totalVoted}</p> */}
                                <p>{count}</p>

                            </div>
                            <div className='row'>
                                <button
                                    onClick={decrementCount}
                                    id='down-vote'

                                ><img src={down} style={{ height: 60, width: 60 }} /></button>

                            </div>
                            <div className='row'>
                                <p>Votes</p>
                            </div>
                        </div>
                        <div class="col">
                            <img
                                src={data.poster}
                            />
                        </div>
                        <div class="col">
                            <h6>{data.title}</h6>
                            <p><b>Genre: </b>{data.genre}</p>
                            <p><b>Director: </b>{data.director.map((dir) => { return (dir) })}</p>
                            <p><b>Starring: </b>{data.stars.map((dir) => { return (dir) })}</p>
                            <p>{data.runTime} Mins | {data.language} | {data.releasedDate} Date</p>
                            <b><p style={{ color: "#316dc4" }}>{data.pageViews} Views | Voted By {data.totalVoted} People</p></b>
                        </div>
                        <button type='button' className='btn btn-info mt-2'>Watch Trailer</button>
                    </div>
                    <hr className='mt-3'></hr>
                </div>)

        })

    )



}
export default LogIn
