const express = require('express');

const {
    handleCreateStore,
    handleGetAllStores,
    handleGetOneStore,
    handleUpdateStore,
    handleDeleteStore
} = require('../controllers/store.controller')

const router = express.Router();

router.post('/', handleCreateStore);
router.get('/', handleGetAllStores);
router.get('/:id', handleGetOneStore);
router.put('/:id', handleUpdateStore);
router.delete('/:id', handleDeleteStore);

module.exports = { storeRouter : router }