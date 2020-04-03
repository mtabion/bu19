const initialState = {
  contacts: [
    {
      fullName: "Della A Donaldson",
      address: "1264  Rockwell Lane, Greenville, NC. 27834",
      phoneNumber: "252-521-0563",
      email: "kduvwbgls2@powerencry.com",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      fullName: "Teresa J Callaway",
      address: "1833 Harter Street, Dayton, OH. 45402",
      phoneNumber: "937-409-9301",
      email: "ggl7vjj3hus@meantinc.com",
      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
    }
  ],
  about: "This is some info about this contacts page"
};

/*

https://rickandmortyapi.com/api/character/avatar/2.jpeg // Morty Smith

 // Summer Smith

https://rickandmortyapi.com/api/character/avatar/10.jpeg // Alan Rails

 // Annie Annie

https://rickandmortyapi.com/api/character/avatar/1.jpeg // Rick sanchez

https://rickandmortyapi.com/api/character/avatar/4.jpeg // Beth Smith

https://rickandmortyapi.com/api/character/avatar/7.jpeg // Abradolf Lincler




fullName: "Patricia R Castillo"
address: "4057 Braxton Street, Sterling, Il. 61081"
phoneNumber: 708-861-8329
email: "p1z2p36ybtj@groupbuff.com"

fullName: "Leonard D Starbuck"
address: "823 Goldcliff Circle, Lanham, DC. 20706
phoneNumber: 202-250-0583
email: "ej0my74kgf8@classesmail.com"

fullName: "Leslie M Washington"
address: "457  Simpson Avenue, Schaefferstown"
phoneNumber: 412-478-2541
email: "31z7623p5f@meantinc.com"

fullName: "Leroy L Dennison"
address: "2236  High Meadow Lane, Roseville, PA. 17601"
phoneNumber: 267-475-8364
email: "8ij6k6dgmor@groupbuff.com"



*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case "Add Contact":
      //Get a random image from Rick and Morty API
      let randomNumber = Math.floor(Math.random() * 300);

      return Object.assign({}, state, {
        contacts: [...state.contacts, action.payload]
      });

    default:
      return state;
  }
}
export default reducer;
