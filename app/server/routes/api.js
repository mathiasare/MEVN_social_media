const express = require('express');

const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/message_controller');

const router = express.Router();

router
  .post('/', createData)
  .get('/:to', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData);

module.exports = router;
