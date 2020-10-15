import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Orphanage from '../model/Orphanage';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      instructions,
      about,
      opening_hours,
      open_on_weekends
    });

    await orphanagesRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
};