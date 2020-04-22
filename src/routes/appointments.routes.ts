import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import CreateAppointementService from '../services/CreateAppointmentService';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider_id, date } = request.body;
    const appointmentParse = parseISO(date);

    const createAppointmentService = new CreateAppointementService();

    const appointment = await createAppointmentService.execute({
      provider_id,
      date: appointmentParse,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
