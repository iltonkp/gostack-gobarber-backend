import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateService;
let createUserService: CreateUserService;

describe('AutheticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
  });

  it('should be able to autehticate', async () => {
    const user = await createUserService.execute({
      name: 'teste',
      email: 'teste@teste.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to autehticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'testeErrado@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to autehticate with non wrong password', async () => {
    await createUserService.execute({
      name: 'teste',
      email: 'teste@teste.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'teste@teste.com',
        password: 'senha Errada',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
