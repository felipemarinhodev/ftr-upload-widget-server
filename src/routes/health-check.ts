import type { FastifyInstance } from "fastify";
import { log } from "../infra/logger";

export async function healthCheckRoute(app: FastifyInstance) {
  app.get('/health', async (request, reply) => {
    log.info("Health check endpoint hit");
				await reply.send({ message: "OK" });
  })
}