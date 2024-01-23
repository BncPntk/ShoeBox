import Shoe from './../models/shoeModel.js';
import express, { NextFunction, Request, Response } from 'express';

export const popularNow = (req: Request, res: Response, next: NextFunction) => {
  req.query.limit = '4';
  req.query.sort = '-amountSold';
  next();
};

export const newReleases = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.query.limit = '4';
  req.query.sort = '-releaseDate';
  next();
};

// TODO: API DOCS
export const getAllShoes = async (req: Request, res: Response) => {
  try {
    const filteredQuery = { ...req.query };
    const excludedFields = ['sort', 'page', 'fields', 'limit'];
    excludedFields.forEach((el) => delete filteredQuery[el]);

    // FILTERING

    let queryStr = JSON.stringify(filteredQuery);
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (matched) => `$${matched}`,
    );
    let query = Shoe.find(JSON.parse(queryStr));

    // SORTING, SORT BY RELEASE DATE BY DEFAULT
    if (req.query.sort) {
      const sortOption = req.query.sort as string;
      const sortBy = sortOption.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-releaseDate');
    }

    // PAGINATION
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 50;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numShoes = await Shoe.countDocuments();
      if (skip >= numShoes) throw new Error('Page does not exist');
    }

    const shoes = await query;

    res
      .status(200)
      .json({ status: 'success', results: shoes.length, data: { shoes } });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const getShoe = async (req: Request, res: Response) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    res.status(200).json({ status: 'success', data: { shoe } });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const createShoe = async (req: Request, res: Response) => {
  try {
    const newShoe = await Shoe.create(req.body);

    res.status(201).json({ status: 'success', data: { shoe: newShoe } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

export const updateShoe = async (req: Request, res: Response) => {
  try {
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({ status: 'success', data: { shoe } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

export const deleteShoe = async (req: Request, res: Response) => {
  try {
    const shoe = await Shoe.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};
