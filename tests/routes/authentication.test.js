const request = require("supertest");
const app = require("../../app");

const { sequelize } = require("../../models");
const { getUsers } = require("../../seed");

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await getUsers();
});

afterAll(async () => await sequelize.close());

describe("Authentication", () => {
  describe("/register", () => {
    it("should not register a user if they already exist", async () => {
      const res = await request(app)
        .post("/register")
        .send({ email: "sab@example.com", password: "727" })
        .expect(400);

      expect(res.body.error.message).toEqual("User already exists");
    });

    it("should register a user if they do not exist", async () => {
      const res = await request(app)
        .post("/register")
        .send({
          email: "new_user@example.com",
          password: "some-secret-password",
          firstName: "Loren",
          lastName: "Stewart",
          imageUrl: "/image"
        })
        .expect(201);

      expect(res.body).toEqual(expect.any(Object));
      expect(res.body).toEqual(
        expect.objectContaining({
          email: "new_user@example.com",
          firstName: "Loren",
          lastName: "Stewart",
          imageUrl: "/image"
        })
      );
    });

    describe("/login", () => {
      it("should not log a user in if they are not registered", async () => {
        const res = await request(app)
          .post("/login")
          .send({
            email: "no_user@example.com",
            password: "some-secret-password"
          })
          .expect(400);

        expect(res.body.error.message).toEqual("User does not exist");
      });

      it("should log a user in if they are registered", async () => {
        await request(app)
          .post("/login")
          .send({ email: "sab@example.com", password: "727" })
          .expect(200);
      });
    });

    describe("/logout", () => {
      it("should log a user out if they are logged in", async () => {
        await request(app)
          .post("/logout")
          .expect(200);
        const res = await request(app)
          .get("/students")
          .expect(403);

        expect(res.text).toEqual("Token is not supplied");
      });
    });
  });
});
