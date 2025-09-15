const fastify = require("fastify")({ logger: true });
const puppeteer = require("puppeteer");

const fs = require("fs");

fastify.get("/", async (_request, _reply) => {
  return { hello: "world" };
});

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
