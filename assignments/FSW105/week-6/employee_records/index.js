function Empinfo (name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}
Empinfo.prototype.status = function(){
    console.log(this.status)
}

let giselle = new Empinfo ("Giselle Woo", "Manager", "$100,000/yr", "Full Time")
    console.log(giselle)

let james = new Empinfo ("James Hoo", "Supervisor", "$80,000/yr", "Full Time")
    console.log(james)

let zach = new Empinfo ("Zach Haa", "worker", "$60,000/yr", "Part Time")
    console.log(zach)





