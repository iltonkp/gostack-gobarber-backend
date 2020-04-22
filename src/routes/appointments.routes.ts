import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppoitmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointementService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppoitmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;
    const appointmentParse = parseISO(date);

    const createAppointmentService = new CreateAppointementService(
      appointmentsRepository,
    );

    const appointment = createAppointmentService.execute({
      provider,
      date: appointmentParse,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
