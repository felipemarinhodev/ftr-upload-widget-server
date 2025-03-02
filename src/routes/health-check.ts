import type { FastifyInstance } from "fastify";

export async function healthCheckRoute(app: FastifyInstance) {
  app.get('/health', async (request, reply) => {
    await reply.send({  message: "OK 👍🏼" })
  })
}