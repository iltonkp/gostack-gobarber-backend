import { Request, Response } from 'express';

import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointementService from '@modules/appoitments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;
    const appointmentParse = parseISO(date);

    const createAppointmentService = container.resolve(
      CreateAppointementService,
    );

    const appointment = await createAppointmentService.execute({
      provider_id,
      date: appointmentParse,
    });

    return response.json(appointment);
  }
}
