const { Student, Schedule, Level } = require("./models");

const getStudents = async () => {
  await Student.create(
    {
      email: "ba97qsy9rgjlnfeqo280@gmail.com",
      firstName: "Ben",
      lastName: "Ang",
      imageUrl: "/students/ben_ang.jpg",
      level: { type: "Primary", year: 3 },
      subjects: ["Mathematics"],
      address: "7 Lavender Avenue North",
      schedules: [
        {
          day: "Sunday",
          time: "Fri Mar 08 2019 09:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 40,
      active: true,
      startDate: "2017-07-30",
      referrer: "Ruth Chye",
      notes:
        "Agreed with Ben's mum that sometimes he is allowed to cancel lessons due to Scouts at school."
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "ly51vi37zppqb7iuy968@gmail.com",
      firstName: "Farid",
      lastName: "Bakar",
      imageUrl: "/students/farid_bakar.jpg",
      level: { type: "Secondary", year: 1 },
      subjects: ["Science"],
      address: "6 Bukit Ho Swee Walk, #04-30",
      schedules: [
        {
          day: "Wednesday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 2
        }
      ],
      rates: 50,
      active: true,
      startDate: "2017-09-11",
      referrer: "",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "t364ahrj2udgq9h2v434@gmail.com",
      firstName: "Luke",
      lastName: "Govindasamy",
      imageUrl: "/students/luke_govindasamy.jpg",
      level: { type: "Primary", year: 6 },
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
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "ws36bm3n3s4zd6xck794@gmail.com",
      firstName: "Farida",
      lastName: "Bakar",
      imageUrl: "/students/farida_bakar.jpg",
      level: { type: "Primary", year: 4 },
      subjects: ["Science"],
      address: "6 Bukit Ho Swee Walk, #04-30",
      schedules: [
        {
          day: "Wednesday",
          time: "Fri Mar 08 2019 21:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 45,
      active: true,
      startDate: "2018-01-02",
      referrer: "Farid Bakar",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "f0595as68amygla6f365@hotmail.com",
      firstName: "Reuben",
      lastName: "Woo",
      imageUrl: "/students/reuben_woo.jpg",
      level: { type: "Primary", year: 1 },
      subjects: ["English"],
      address: "Blk 204 Boon Lay Street 81, #10-41",
      schedules: [
        {
          day: "Thursday",
          time: "Fri Mar 08 2019 15:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 35,
      active: true,
      startDate: "2019-02-01",
      referrer: "",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "my30pj2vpi2oz33pz857@gmail.com",
      firstName: "Daryl",
      lastName: "Tan",
      imageUrl: "/students/daryl_tan.jpg",
      level: { type: "Primary", year: 6 },
      subjects: ["Mathematics"],
      address: "2 MacPherson Lane",
      schedules: [
        {
          day: "Tuesday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 45,
      active: true,
      startDate: "2018-10-13",
      referrer: "Luke Govindasamy",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "9s45uuhk4gb0kvoxp521@gmail.com",
      firstName: "Arnav",
      lastName: "Sharma",
      imageUrl: "/students/arnav_sharma.jpg",
      level: { type: "Primary", year: 6 },
      subjects: ["Mathematics"],
      address: "2 MacPherson Lane",
      schedules: [
        {
          day: "Tuesday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 45,
      active: true,
      startDate: "2018-10-13",
      referrer: "Luke Govindasamy",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "t108id17cpryb46b7473@yahoo.com.sg",
      firstName: "Keith",
      lastName: "Chye",
      imageUrl: "/students/keith_chye.jpg",
      level: { type: "Primary", year: "3" },
      subjects: ["Mathematics"],
      address: "Blk 408 Sengkang Street 76, #15-36",
      schedules: [
        {
          day: "Saturday",
          time: "Fri Mar 08 2019 10:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1.5
        }
      ],
      rates: 40,
      active: true,
      startDate: "2016-05-20",
      referrer: "",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "ko62tu1na3zaa8yct423@gmail.com",
      firstName: "Ella",
      lastName: "Gross",
      imageUrl: "/students/ella_gross.jpg",
      level: { type: "Primary", year: "5" },
      subjects: ["Mathematics"],
      address: "24 Jalan Pelangi",
      schedules: [
        {
          day: "Monday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 40,
      active: true,
      startDate: "2016-06-22",
      referrer: "",
      notes: "Birthday: December 1st 2008"
    },
    { include: [Schedule, Level] }
  );
  await Student.create(
    {
      email: "bx748khxz86jhg3h1089@gmail.com",
      firstName: "Sarah Jane",
      lastName: "Lim",
      imageUrl: "/students/sarah_jane_lim.jpg",
      level: { type: "Primary", year: "4" },
      subjects: ["Mathematics"],
      address: "30 Tai Seng Field, #08-11",
      schedules: [
        {
          day: "Monday",
          time: "Fri Mar 08 2019 19:00:00 GMT+0800 (Singapore Standard Time)",
          duration: 1
        }
      ],
      rates: 35,
      active: false,
      startDate: "2017-11-17",
      referrer: "",
      notes: ""
    },
    { include: [Schedule, Level] }
  );
};

module.exports = getStudents;
