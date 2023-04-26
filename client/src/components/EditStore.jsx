import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditStore = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [open, setOpen] = useState(false);

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                const {
                    name,
                    number,
                    open
                } = res.data

                setName(name);
                setNumber(number);
                setOpen(open);
            })
            .catch(err => {
                console.log(err);
                navigate('/');
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedStore = {
            name,
            number,
            open
        }

        axios.put(`http://localhost:8000/api/stores/${id}`, editedStore)
            .then(res => {
                console.log(res);
                navigate(`/stores/${id}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <div className='headerhome'>
                <h1>Store Finder</h1>
                <Link to='/'>Go Back Home</Link>
            </div>
            <h4>Edit {name}</h4>
            <form className='card' onSubmit={handleSubmit}>
                <div>
                    <label>Store Name: </label>
                    {
                        errors?.name && (
                            <span style={{ color: 'red' }}>
                            {errors.name?.message}</span>
                        )
                    }
                    <input type='text' onChange={e =>
                    {setName(e.target.value)}}
                    value={name}/>
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
                    {setNumber(e.target.value)}}
                    value={number}/>
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
                    {setOpen(e.target.checked)}}
                    checked={open}/>
                </div>
                <input type="submit" value="Edit Store"/>
            </form>
        </div>
    )
}

export default EditStore;