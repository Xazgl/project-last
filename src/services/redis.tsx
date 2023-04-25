import { Redis } from 'ioredis';

// Создаем Redis клиента
export const redisClient = new Redis({
  port: 6379,
  // host: 'localhost' 
  //тут указываем либо локалхост либо домен
  host: process.env.NODE_ENV === 'production' ? process.env.HOST : 'localhost'
});


// Функция для получения данных из Redis
export const getDataFromRedis = (key: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    redisClient.get(key, (err: Error | null, data: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};