import { resolve } from 'path'
import { fastify } from 'fastify'
import { fastifyStatic } from '@fastify/static'

const appPort = 8080
const app = fastify({ logger: { level: 'debug' } })


app.register(fastifyStatic, { root: resolve('.'), prefix: '/' })

app.ready(async err => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    try {
      await app.listen({ host: '0.0.0.0', port: appPort })
      app.log.info(`App listening at http://localhost:${appPort}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
})
