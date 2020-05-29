import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListProvidersService from '@modules/appoitments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProvidersService = container.resolve(ListProvidersService);

    const ListProviders = await listProvidersService.execute({ user_id });

    const providers = ListProviders.map(provider => {
      delete provider.password;

      return provider;
    });

    return response.json(providers);
  }
}
