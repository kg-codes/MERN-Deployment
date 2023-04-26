import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const NewStore = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const [errors, setErrors] = useState(null)
    
    const createStore = (e) => {
        e.preventDefault();
        const newStore = {
            name,
            number,
            open
        }
    
        axios.post('http://localhost:8000/api/stores', newStore)
                .then(res => {
                    console.log(res.data);
                    navigate(`/stores/${res.data._id}`)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors);
                })
    }

    return(
        <div>
            <div className='headerhome'>
                <h1>Store Finder</h1>
                <Link to='/'>Go Back Home</Link>
            </div>
            <h4>Add a new Store!</h4>
            <form className='card' onSubmit={createStore}>
                <div>
                    <label>Store Name: </label>
                    {
                        errors?.name && (
                            <span style={{ color: 'red' }}>
                            {errors.name?.message}</span>
                        )
                    }
                    <input type='text' onChange={e =>
                    {setName(e.target.value)}}/>
                </div>
                <div>
                    <label>Store Number: </label>
                    {
                        errors?.number && (
                            <span style={{ color: 'red' }}>
                            {errors.number?.message}</span>
                        )
                    }
                    <input type='number' onChange={e =>
                    {setNumber(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor='open'>Open? </label>
                    {
                        errors?.open && (
                            <span style={{ color: 'red' }}>
                            {errors.open?.message}</span>
                        )
                    }
                    <input name='open' value={open} type='checkbox' onChange={e =>
                    {setOpen(e.target.checked)}}/>
                </div>
                <input type="submit" value="Add a new store"/>
            </form>
        </div>
    )
}


export default NewStore;