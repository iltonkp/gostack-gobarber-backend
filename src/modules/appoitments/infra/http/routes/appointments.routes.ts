import { Router } from 'express';
import { parseISO } from 'date-fns';

import CreateAppointementService from '@modules/appoitments/services/CreateAppointmentService';
import AppointmentsRepository from '@modules/appoitments/infra/typeorm/repositories/AppointmentsRepository';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository();
  //const appointments = await appointmentsRepository.find();
  //return response.json(appointments);
  return response.send();
});

appointmentsRouter.post('/', async (request, response) => {
  const appointmentsRepository = new AppointmentsRepository();
  const { provider_id, date } = request.body;
  const appointmentParse = parseISO(date);

  const createAppointmentService = new CreateAppointementService(
    appointmentsRepository,
  );

  const appointment = await createAppointmentService.execute({
    provider_id,
    date: appointmentParse,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
