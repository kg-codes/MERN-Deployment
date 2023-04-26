import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from'react';
import axios from 'axios';

const OneStore = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                setStore(res.data);
            })
            .catch(err => {
                console.log(err);
                navigate('/');
            })
    }, [id])

    const { _id, name, number, open } = store;
    return(
        <div>
            <div className='headerhome'>
                <h1>Store Finder</h1>
                <Link to='/'>Go Back Home</Link>
            </div>
            <div className='card'>
                <h2>{name}</h2>
                <h4>Store number {number}</h4>
                {open ? (<h4>Open</h4>) : (<h4>Closed</h4>)}
                <Link to={`/stores/edit/${_id}`}>Edit Store Details</Link>
            </div>
        </div>
    )
}

export default OneStore;

