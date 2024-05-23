// const apiEnv: ApiEnv = 'dev'
const apiEnv: ApiEnv = import.meta.env.MODE as ApiEnv

const envMap = {
  development: {
    baseUrl: 'http://m.dev.xxx.com',
    apiBaseUrl: 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
  },
  production: {
    baseUrl: 'http://m.beta.xxx.com',
    apiBaseUrl: 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
  }
}

type ApiEnv = keyof typeof envMap
type Env<T extends ApiEnv> = {
  apiEnv: T
} & (typeof envMap)[T]

function createEnv(apiEnv: ApiEnv): Env<typeof apiEnv> {
  return Object.assign({ apiEnv }, envMap[apiEnv])
}

const env = createEnv(apiEnv)
export default env
