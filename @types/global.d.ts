declare module NodeJS {
    interface Process {
        redisGlobalClient: null | import('ioredis').Redis
    }
}

// export {}