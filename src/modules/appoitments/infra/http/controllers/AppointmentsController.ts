import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateAppointementService from '@modules/appoitments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id, date } = request.body;

    const createAppointmentService = container.resolve(
      CreateAppointementService,
    );

    const appointment = await createAppointmentService.execute({
      provider_id,
      user_id,
      date,
    });

    return response.json(appointment);
  }
}
