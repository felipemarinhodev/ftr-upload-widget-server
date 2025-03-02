import type { FastifyInstance } from "fastify";

export async function healthCheckRoute(app: FastifyInstance) {
  app.post('/health', async (request, reply) => {
    await reply.send({  message: "OK" })
  })
}