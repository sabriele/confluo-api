const request = require("supertest");
const app = require("../../app");
const { sequelize } = require("../../models");
const getStudents = require("../../seed");

const expectedStudents = [
  {
    id: 1,
    email: "ba97qsy9rgjlnfeqo280@gmail.com",
    firstName: "Ben",
    lastName: "Ang",
    imageUrl: "/students/ben_ang.jpg",
    subjects: ["Mathematics"],
    address: "7 Lavender Avenue North",
    rates: 40,
    active: true,
    startDate: "2017-07-30",
    referrer: "Ruth Chye",
    notes:
      "Agreed with Ben's mum that sometimes he is allowed to cancel lessons due to Scouts at school.",
    createdAt: "2019-03-26T13:05:41.920Z",
    updatedAt: "2019-03-26T13:05:41.920Z",
    schedules: [
      {
        id: 1,
        day: "Sunday",
        time: "Fri Mar 08 2019 09:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.925Z",
        updatedAt: "2019-03-26T13:05:41.925Z",
        studentId: 1
      }
    ],
    level: {
      id: 1,
      type: "Primary",
      year: 3,
      studentId: 1
    }
  },
  {
    id: 2,
    email: "ly51vi37zppqb7iuy968@gmail.com",
    firstName: "Farid",
    lastName: "Bakar",
    imageUrl: "/students/farid_bakar.jpg",
    subjects: ["Science"],
    address: "6 Bukit Ho Swee Walk, #04-30",
    rates: 50,
    active: true,
    startDate: "2017-09-11",
    referrer: "",
    notes: "",
    createdAt: "2019-03-26T13:05:41.931Z",
    updatedAt: "2019-03-26T13:05:41.931Z",
    schedules: [
      {
        id: 2,
        day: "Wednesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 2,
        createdAt: "2019-03-26T13:05:41.934Z",
        updatedAt: "2019-03-26T13:05:41.934Z",
        studentId: 2
      }
    ],
    level: {
      id: 2,
      type: "Secondary",
      year: 1,
      studentId: 2
    }
  },
  {
    id: 3,
    email: "t364ahrj2udgq9h2v434@gmail.com",
    firstName: "Luke",
    lastName: "Govindasamy",
    imageUrl: "/students/luke_govindasamy.jpg",
    subjects: ["Science", "Mathematics"],
    address: "2 MacPherson Lane",
    rates: 45,
    active: true,
    startDate: "2018-10-13",
    referrer: "",
    notes: "",
    createdAt: "2019-03-26T13:05:41.939Z",
    updatedAt: "2019-03-26T13:05:41.939Z",
    schedules: [
      {
        id: 4,
        day: "Friday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.943Z",
        updatedAt: "2019-03-26T13:05:41.943Z",
        studentId: 3
      },
      {
        id: 3,
        day: "Tuesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.942Z",
        updatedAt: "2019-03-26T13:05:41.942Z",
        studentId: 3
      }
    ],
    level: {
      id: 3,
      type: "Primary",
      year: 6,
      studentId: 3
    }
  },
  {
    id: 4,
    email: "ws36bm3n3s4zd6xck794@gmail.com",
    firstName: "Farida",
    lastName: "Bakar",
    imageUrl: "/students/farida_bakar.jpg",
    subjects: ["Science"],
    address: "6 Bukit Ho Swee Walk, #04-30",
    rates: 45,
    active: true,
    startDate: "2018-01-02",
    referrer: "Farid Bakar",
    notes: "",
    createdAt: "2019-03-26T13:05:41.948Z",
    updatedAt: "2019-03-26T13:05:41.948Z",
    schedules: [
      {
        id: 5,
        day: "Wednesday",
        time: "Fri Mar 08 2019 21:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.952Z",
        updatedAt: "2019-03-26T13:05:41.952Z",
        studentId: 4
      }
    ],
    level: {
      id: 4,
      type: "Primary",
      year: 4,
      studentId: 4
    }
  },
  {
    id: 5,
    email: "f0595as68amygla6f365@hotmail.com",
    firstName: "Reuben",
    lastName: "Woo",
    imageUrl: "/students/reuben_woo.jpg",
    subjects: ["English"],
    address: "Blk 204 Boon Lay Street 81, #10-41",
    rates: 35,
    active: true,
    startDate: "2019-02-01",
    referrer: "",
    notes: "",
    createdAt: "2019-03-26T13:05:41.957Z",
    updatedAt: "2019-03-26T13:05:41.957Z",
    schedules: [
      {
        id: 6,
        day: "Thursday",
        time: "Fri Mar 08 2019 15:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.958Z",
        updatedAt: "2019-03-26T13:05:41.958Z",
        studentId: 5
      }
    ],
    level: {
      id: 5,
      type: "Primary",
      year: 1,
      studentId: 5
    }
  },
  {
    id: 6,
    email: "my30pj2vpi2oz33pz857@gmail.com",
    firstName: "Daryl",
    lastName: "Tan",
    imageUrl: "/students/daryl_tan.jpg",
    subjects: ["Mathematics"],
    address: "2 MacPherson Lane",
    rates: 45,
    active: true,
    startDate: "2018-10-13",
    referrer: "Luke Govindasamy",
    notes: "",
    createdAt: "2019-03-26T13:05:41.961Z",
    updatedAt: "2019-03-26T13:05:41.961Z",
    schedules: [
      {
        id: 7,
        day: "Tuesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.964Z",
        updatedAt: "2019-03-26T13:05:41.964Z",
        studentId: 6
      }
    ],
    level: {
      id: 6,
      type: "Primary",
      year: 6,
      studentId: 6
    }
  },
  {
    id: 7,
    email: "9s45uuhk4gb0kvoxp521@gmail.com",
    firstName: "Arnav",
    lastName: "Sharma",
    imageUrl: "/students/arnav_sharma.jpg",
    subjects: ["Mathematics"],
    address: "2 MacPherson Lane",
    rates: 45,
    active: true,
    startDate: "2018-10-13",
    referrer: "Luke Govindasamy",
    notes: "",
    createdAt: "2019-03-26T13:05:41.967Z",
    updatedAt: "2019-03-26T13:05:41.967Z",
    schedules: [
      {
        id: 8,
        day: "Tuesday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.969Z",
        updatedAt: "2019-03-26T13:05:41.969Z",
        studentId: 7
      }
    ],
    level: {
      id: 7,
      type: "Primary",
      year: 6,
      studentId: 7
    }
  },
  {
    id: 8,
    email: "t108id17cpryb46b7473@yahoo.com.sg",
    firstName: "Keith",
    lastName: "Chye",
    imageUrl: "/students/keith_chye.jpg",
    subjects: ["Mathematics"],
    address: "Blk 408 Sengkang Street 76, #15-36",
    rates: 40,
    active: true,
    startDate: "2016-05-20",
    referrer: "",
    notes: "",
    createdAt: "2019-03-26T13:05:41.971Z",
    updatedAt: "2019-03-26T13:05:41.971Z",
    schedules: [
      {
        id: 9,
        day: "Saturday",
        time: "Fri Mar 08 2019 10:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1.5,
        createdAt: "2019-03-26T13:05:41.973Z",
        updatedAt: "2019-03-26T13:05:41.973Z",
        studentId: 8
      }
    ],
    level: {
      id: 8,
      type: "Primary",
      year: 3,
      studentId: 8
    }
  },
  {
    id: 9,
    email: "ko62tu1na3zaa8yct423@gmail.com",
    firstName: "Ella",
    lastName: "Gross",
    imageUrl: "/students/ella_gross.jpg",
    subjects: ["Mathematics"],
    address: "24 Jalan Pelangi",
    rates: 40,
    active: true,
    startDate: "2016-06-22",
    referrer: "",
    notes: "Birthday: December 1st 2008",
    createdAt: "2019-03-26T13:05:41.976Z",
    updatedAt: "2019-03-26T13:05:41.976Z",
    schedules: [
      {
        id: 10,
        day: "Monday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.978Z",
        updatedAt: "2019-03-26T13:05:41.978Z",
        studentId: 9
      }
    ],
    level: {
      id: 9,
      type: "Primary",
      year: 5,
      studentId: 9
    }
  },
  {
    id: 10,
    email: "bx748khxz86jhg3h1089@gmail.com",
    firstName: "Sarah Jane",
    lastName: "Lim",
    imageUrl: "/students/sarah_jane_lim.jpg",
    subjects: ["Mathematics"],
    address: "30 Tai Seng Field, #08-11",
    rates: 35,
    active: false,
    startDate: "2017-11-17",
    referrer: "",
    notes: "",
    createdAt: "2019-03-26T13:05:41.983Z",
    updatedAt: "2019-03-26T13:05:41.983Z",
    schedules: [
      {
        id: 11,
        day: "Monday",
        time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
        duration: 1,
        createdAt: "2019-03-26T13:05:41.985Z",
        updatedAt: "2019-03-26T13:05:41.985Z",
        studentId: 10
      }
    ],
    level: {
      id: 10,
      type: "Primary",
      year: 4,
      studentId: 10
    }
  }
];

const route = (params = "") => {
  const path = "/students";
  return `${path}/${params}`;
};

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await getStudents();
});

afterAll(async () => await sequelize.close());

describe("students", () => {
  describe("[GET] routes", () => {
    const verifyStudents = (res, expected) => {
      const students = res.body;
      students.forEach((student, index) => {
        expect(student.email).toEqual(expected[index].email);
        expect(student.firstName).toEqual(expected[index].firstName);
        expect(student.lastName).toEqual(expected[index].lastName);
      });
    };

    it("should get all students", () => {
      return request(app)
        .get(route())
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => verifyStudents(res, expectedStudents));
    });

    it("should get a student of that ID", () => {
      const id = 3;
      return request(app)
        .get(route(id))
        .expect("Content-Type", /json/)
        .expect(200)
        .then(res => {
          expect(res.body.lastName).toEqual(
            expectedStudents[res.body.id - 1].lastName
          );
        });
    });

    it("should fail as there is no student with that ID", () => {
      const id = "100";
      return request(app)
        .get(route(id))
        .expect(404);
    });

    it("should fail as string IDs are invalid", () => {
      const id = "invalid-id";
      return request(app)
        .get(route(id))
        .expect(400);
    });
  });

  describe("[POST] routes", () => {
    const newStudent = {
      email: "t364ahrj2udgq9h2v434@gmail.com",
      firstName: "Luke",
      lastName: "Govindasamy",
      imageUrl: "/students/luke_govindasamy.jpg",
      level: {
        type: "Primary",
        year: 6
      },
      subjects: ["Science", "Mathematics"],
      address: "2 MacPherson Lane",
      schedules: [
        {
          day: "Tuesday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        },
        {
          day: "Friday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 45,
      active: true,
      startDate: "2018-10-13",
      referrer: "",
      notes: ""
    };

    it("should create a new student (when token is provided)", () => {
      return request(app)
        .post(route())
        .send(newStudent)
        .set("Content-Type", "application/json")
        .expect(201)
        .then(res => {
          expect(res.body).toEqual(expect.any(Object));
          expect(res.body).toEqual(
            expect.objectContaining({
              firstName: "Luke",
              lastName: "Govindasamy"
            })
          );
        });
    });
  });
});
