import express from 'express';
import {
  getAllShoes,
  createShoe,
  getShoe,
  updateShoe,
  deleteShoe,
  popularNow,
  newReleases,
} from '../controllers/shoeController.js';

const router = express.Router();

router.route('/popular-now').get(popularNow, getAllShoes);
router.route('/new-releases').get(newReleases, getAllShoes);

router.route('/').get(getAllShoes).post(createShoe);
router.route('/:id').get(getShoe).patch(updateShoe).delete(deleteShoe);

export default router;
