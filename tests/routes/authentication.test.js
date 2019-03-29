const request = require("supertest");
const app = require("../../app");

jest.mock("../../models");
const { User, sequelize } = require("../../models");

afterAll(async () => {
  sequelize.close();
});

describe("Authentication", () => {
  describe("/register", () => {
    it("should not register a user if they already exist", async () => {
      User.findOne.mockResolvedValueOnce("user exists");

      const res = await request(app)
        .post("/register")
        .send({
          email: "existing_user@example.com",
          password: "some-secret-password"
        })
        .expect(400);

      expect(res.body.error.message).toEqual("User already exists");
    });

    it("should register a user if they do not exist", async () => {
      User.findOne.mockResolvedValueOnce(undefined);
      User.create.mockResolvedValueOnce({
        id: 123,
        firstName: "Loren",
        lastName: "Stewart",
        imageUrl: "/image"
      });

      const res = await request(app)
        .post("/register")
        .send({
          email: "new_user@example.com",
          password: "some-secret-password"
        })
        .expect(201);

      expect(res.body).toEqual({
        id: 123,
        firstName: "Loren",
        lastName: "Stewart",
        imageUrl: "/image"
      });
    });
  });

  describe("/login", () => {
    it("should not log a user in if they are not registered", async () => {
      User.findOne.mockResolvedValueOnce(undefined);

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
      User.findOne.mockResolvedValueOnce({
        email: "existing_user@example.com",
        password: "some-secret-password"
      });

      const res = await request(app)
        .post("/login")
        .send({
          email: "existing_user@example.com",
          password: "some-secret-password"
        })
        .expect(201);

      expect(res.body).toEqual({
        email: "existing_user@example.com",
        password: "some-secret-password"
      });
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
