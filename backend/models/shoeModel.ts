import mongoose from 'mongoose';

const requiredMsg = (fieldName: string) => `${fieldName} is required!`;

const shoesSchema = new mongoose.Schema({
  brand: {
    type: String,
    trim: true,
    required: [true, requiredMsg('Brand')],
  },
  name: {
    type: String,
    trim: true,
    required: [true, requiredMsg('Name')],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, requiredMsg('Price')],
  },
  gender: {
    type: String,
    trim: true,
  },
  sizesEU: {
    type: [String],
    trim: true,
    required: [true, requiredMsg('Size in EU format')],
  },
  quantity: {
    type: Number,
    required: [true, requiredMsg('Quantity')],
  },
  color: {
    type: String,
    trim: true,
    required: [true, requiredMsg('Color')],
  },
  releaseDate: {
    type: Date,
  },
  amountSold: {
    type: Number,
    default: 0,
  },
  imageCover: {
    type: String,
    trim: true,
  },
  imageGallery: {
    type: [String],
    trim: true,
  },
  tags: {
    type: [String],
    trim: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Shoe = mongoose.model('Shoe', shoesSchema);

export default Shoe;
