var shopper = {
    firstName: "Melvin",
    lastName: "Tabion",
    isHealthy: true,
    currentItems: 0,
    groceryCart: ["Steak", "Shrimp", "Asparagus", "Pasta Noodles", "Lemons", "Tomatoe Sauce"],
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
      console.log(shopper.firstName + " " + shopper.lastName);
    }
};
console.log(shopper);
shopper.fullName();
