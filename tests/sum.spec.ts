import { FastifyInstance } from "fastify";
import { sum } from "..";

describe("GET /sum/:id", () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = sum(); // Create app instance
    await app.ready(); // Wait for Fastify to be ready
  });

  afterAll(async () => {
    await app.close(); // Properly close the server
  });

  it("return the sum of two numbers", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/sum/18",
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ sum: 18 + (18 - 2) });
  });

  it("returns invalid on digits", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/sum/abc", // Fixed: added leading slash
    });

    expect(res.statusCode).toBe(400);
    expect(res.json()).toEqual({ error: "Invalid" });
  });
});