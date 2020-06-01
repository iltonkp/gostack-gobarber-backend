import { container } from 'tsyringe';

import ICaheProvider from './models/ICacheProvider';
import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};
container.registerSingleton<ICaheProvider>('CacheProvider', providers.redis);
