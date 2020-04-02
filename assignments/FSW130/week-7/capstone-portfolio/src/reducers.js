const initialState = {
  objectives: "Lorem ipsum doler",
  employmentHistory: [
    {
      title: "Dev",
      company: "Cool Apps LLC",
      startDate: "Jan 10, 2001",
      endDate: "Apr 30, 2010",
      description: "Some job stuff"
    },
    {
      title: "Dev",
      company: "Cool Apps LLC",
      startDate: "Jan 10, 2001",
      endDate: "Apr 30, 2010",
      description: "Some job stuff"
    }
  ],
  about: {
    name: "Melvin",
    phone: "555-555-5555",
    email: "melvin@email.com"
  },
  experience: [{}],
  skills: ["Javascript, React"],
  education: [
    {
      school: "Bryan University",
      startDate: "Aug 2019",
      endDate: "June 2020",
      studied: "JS"
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
