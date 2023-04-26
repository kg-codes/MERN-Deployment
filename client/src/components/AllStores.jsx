import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/allstores.css';
<css></css>

const AllStores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
        .then(res => {
            console.log(res);
            setStores(res.data.sort((a, b) => a.number - b.number));
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
        .then(res => {
            const filteredStores = stores.filter(store => {
                return store._id !== id;
            })

            setStores(filteredStores);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Store Finder</h1>
            <div>
                <h4>Find stores in your area!</h4>
                <div  className='store-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Store</th>
                                <th>Store Number</th>
                                <th>Open/Closed</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {stores.map(store => {
                        const { _id, name, number, open } = store;
                        return(
                            <tbody key={_id}>
                                <tr>
                                    <td><Link to={`/stores/${_id}`}>{name}</Link></td>
                                    <td>{number}</td>
                                    {open ? (<td>Open</td>) : (<td>Closed</td>)}
                                    {open ? <td><button onClick={() => handleDelete(_id)}>Delete</button></td> : <td></td>}
                                </tr>
                            </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
            <Link to={'/stores/add'}><h4>Can't find your store?</h4></Link>
        </div>
    )
}


export default AllStores;