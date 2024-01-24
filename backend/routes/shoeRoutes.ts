import express from 'express';
import {
  getAllShoes,
  createShoe,
  getShoe,
  updateShoe,
  deleteShoe,
  popularNow,
  newReleases,
  newAndFeatured,
  getImage,
} from '../controllers/shoeController.js';

const router = express.Router();

router.route('/popular-now').get(popularNow, getAllShoes);
router.route('/new-releases').get(newReleases, getAllShoes);
router.route('/new-featured').get(newAndFeatured, getAllShoes);

router.route('/get-shoe-image/:path').get(getImage);

router.route('/').get(getAllShoes).post(createShoe);
router.route('/:id').get(getShoe).patch(updateShoe).delete(deleteShoe);

export default router;
