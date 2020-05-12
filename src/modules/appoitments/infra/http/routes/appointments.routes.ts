import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointementService from '@modules/appoitments/services/CreateAppointmentService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

//appointmentsRouter.get('/', async (request, response) => {
//const appointments = await appointmentsRepository.find();
//return response.json(appointments);
// return response.send();
//});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;
  const appointmentParse = parseISO(date);

  const createAppointmentService = container.resolve(CreateAppointementService);

  const appointment = await createAppointmentService.execute({
    provider_id,
    date: appointmentParse,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
