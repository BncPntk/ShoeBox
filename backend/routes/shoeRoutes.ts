import express from 'express';
import {
  getAllShoes,
  createShoe,
  getShoe,
  updateShoe,
  deleteShoe,
} from '../controllers/shoeController.js';

const router = express.Router();

router.route('/').get(getAllShoes).post(createShoe);
router.route('/:id').get(getShoe).patch(updateShoe).delete(deleteShoe);

export default router;
