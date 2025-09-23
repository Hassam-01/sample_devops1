import { sum } from "..";

describe("GET /sum/:id", () => {
  let app = sum();

 afterAll(async () => {
    await app.close(); 
  });
  it("return teh sum of two numbers", async () => {
    const res = await app.inject({
      method: "GET",
      url: "/sum/18",
    });

    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ sum: 18 + (18 - 2) });
  });

  it("returns invalid on digits ", async () => {
    const res = await app.inject({
      method: "GET",
      url: "sum/abc",
    });

    expect(res.statusCode).toBe(400);
    expect(res.json()).toEqual({ error: "Invalid" });
  });
});
