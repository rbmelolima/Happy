import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Orphanage from '../model/Orphanage';
import orphanageView from '../views/orphanagesView';

export default {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: [ 'images' ]
    });

    return response.status(200).json(orphanageView.render(orphanage));
  },

  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: [ 'images' ]
    });

    return response.status(200).json(orphanageView.renderMany(orphanages));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      instructions,
      about,
      opening_hours,
      open_on_weekends,
      images
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
};