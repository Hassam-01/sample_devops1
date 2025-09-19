import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
const fastify = Fastify({ logger: true });

fastify.get("/", async (_request: FastifyRequest, _reply: FastifyReply) => {
  return {};
});
export function sum(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.get("/sum/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const a = Number((request.params as any).id);
    const b = a - 2;
    if (isNaN(a) || isNaN(b)) {
      reply.code(400).send({ error: "Invalid" });
      return;
    }

    return { sum: a + b };
  });

  return app;
}
const start = async () => {
  try {
    await fastify.listen({ port: 3010 });
    console.log("server running on 3010");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
