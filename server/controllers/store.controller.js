const { Store } = require('../models/store.model');

const handleCreateStore = (req, res) => {
    Store.create(req.body)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

const handleGetAllStores = (req, res) => {
    Store.find()
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const handleGetOneStore = (req, res) => {
    Store.findById(req.params.id)
        .then(response => {
            res.json(response);
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

const handleUpdateStore = (req, res) => {
    Store.findByIdAndUpdate(req.params.id, req.body, {
        // re-run validations
        runValidators: true,
        // return our updated destination
        new: true,
    })
        .then(response => {
            res.json(response); 
        })
        .catch(error => {
            res.status(400).json(error);
        })
}

const handleDeleteStore = (req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(response => {
            res.json(response); 
        })
        .catch(error => {
        res.status(400).json(error);
        })
}

module.exports = {
    handleCreateStore,
    handleGetAllStores,
    handleGetOneStore,
    handleUpdateStore,
    handleDeleteStore
}