import Shoe from './../models/shoeModel.js';
import express, { Request, Response } from 'express';

export const getAllShoes = async (_req: Request, res: Response) => {
  try {
    const shoes = await Shoe.find();
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
