import { Redis } from 'ioredis';

// Создаем Redis клиента
// export const getRedisInstance() = new Redis({
//   port: 6379,
//   // host: 'localhost' 
//   //тут указываем либо локалхост либо домен
//   host: process.env.NODE_ENV === 'production' ? process.env.HOST : 'localhost'
// });

process.redisGlobalClient = null

export function getRedisInstance() {
  return process.redisGlobalClient ?? new Redis({
    port: 6379,
    host: process.env.NODE_ENV=='production' ? 'redis' : 'localhost',
  });
}

// export const getRedisInstance() = new Redis({
//   port: 6379,
//   host: process.env.NODE_ENV=='production' ? 'redis' : 'localhost',
// });

// Функция для получения данных из Redis
export const getDataFromRedis = (key: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    getRedisInstance().get(key, (err: Error | null, data: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};