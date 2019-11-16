function fiveAndGreaterOnly(arr)
{
   const result=arr.filter(function(num)
    {
        if(num>5)
          return true;
    });
    return result;

}
console.log(fiveAndGreaterOnly([3,6,8,2]));

//Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr)
{
    const result=arr.filter(function(num)
    {
        if(num%2==0)
          return true;
    });
    return result;
}
console.log(evensOnly([3,6,8,2]));

//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr)
{
    const result=arr.filter(function(str)
    {
        if(str.length<=5)
          return true;
    });
    return result.sort();
}
console.log(fiveCharactersOrFewerOnly(["dog","wolf","by","family","eaten","camping"]));

//Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr)
{
    const result=arr.filter(function(person)
    {
        return person.member;
    });
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name:"Angelina Jolie",member:true},
    { name:"Eric Jones",member:false },
    { name:"Paris Hilton",member:true},
    { name:"Kayne West",member:false},
    { name:"Bob Ziroll",member:true},

]))

//Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
function ofAge(arr)
{
    const result=arr.filter(function(person)
    {
        return person.age>18;
    });
    return result;

}
console.log(ofAge([
    { name:"Angelina Jolie",age:80},
    { name:"Eric Jones",age:2 },
    { name:"Paris Hilton",age:5},
    { name:"Kayne West",age:16},
    { name:"Bob Ziroll",age:100},

]))

//Make an array of numbers that are doubles of the first array
function doubleNumbers(arr)
{
   return arr.map(function(num)
   {
      return num*2
   })
}
console.log(doubleNumbers([2,5,100]));

//Take an array of numbers and make them strings
function stringItUp(arr)
{
   return arr.map(function(num)
   {
      return String(num)
   })
}
console.log(stringItUp([2,5,100]));

//Capitalize each of an array of names
function capitalizeNames(str)
{
    return str.map(function(s)
    {
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    })
}
console.log(capitalizeNames(["john","JACOB","jinGLeHeimer","schimdt"]));

//Make an array of strings of the names
function namesOnly(arr)
{
    return arr.map(function(s)
    {
        return s.name;
    })

}
console.log(namesOnly([
    { name:"Angelina Jolie",age:80},
    { name:"Eric Jones",age:2 },
    { name:"Paris Hilton",age:5},
    { name:"Kayne West",age:16},
    { name:"Bob Ziroll",age:100},

]))

//Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr)
{
    return arr.map(function(s)
    {
        if(s.age>18)
        {
            return s.name+ " can go to the matrix";
        }
        else
        {
            return s.name + " is under Age!!";
        }
    })
}
console.log(makeStrings([
    { name:"Angelina Jolie",age:80},
    { name:"Eric Jones",age:2 },
    { name:"Paris Hilton",age:5},
    { name:"Kayne West",age:16},
    { name:"Bob Ziroll",age:100},
]))

//Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr)
{
    return arr.map(function(s)
    {
       return "<h1>"+s.name + "</h1><h2>"+s.age+"</h2>";
        
    })

}

console.log(readyToPutInTheDOM([
    { name:"Angelina Jolie",age:80},
    { name:"Eric Jones",age:2 },
    { name:"Paris Hilton",age:5},
    { name:"Kayne West",age:16},
    { name:"Bob Ziroll",age:100},

]))


//Turn an array of numbers into a total of all the numbers
function total(arr)
{
    return arr.reduce(function(final,num)
    {
        final+=num
        return final
    })
}
console.log(total([1,2,3]));

//Turn an array of numbers into a long string of all those numbers.
function stringConcat(str)
{
    return str.reduce(function(final,s)
    {
        final+=String(s)
        return final
    })
}
console.log(stringConcat([1,2,3]))

//Turn an array of voter objects into a count of how many people voted
//????
//????
//????


//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr)
{
    return arr.reduce(function(final,s)
    {
       
       //console.log(s.voted)
       final+=s.price
       return final
        
    },0)
}
var wishlist=[
    {title:"Tesla Model 5",price:90000},
    {title:"4 carat diamond ring",price:45000},
    {title:"Fancy hacky Sack",price:5},
    {title:"Gold fidgit spinner ",price:2000},
    {title:"A second Tesla Model 5",price:90000},
]
console.log(shoppingSpree(wishlist));

//Given an array of arrays, flatten them into a single array
function flatten(arr)
{
    return arr.reduce(function(final,s)
    {
       
       //console.log(s.voted)
       final=final.concat(s)
       return final
        
    },[])
}
var arrays=[
    ["1","2","3"],
    [true],
    ["4","5","6"]
]
console.log(flatten(arrays))

//Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
var voters=[
    {name:'Bob',age:30,voted:true},
    {name:'Jake',age:32,voted:true},
    {name:'Kate',age:25,voted:false},
    {name:'Sam',age:20,voted:false},
    {name:'Phil',age:21,voted:true},
    {name:'Ed',age:55,voted:true},
    {name:'Tami',age:54,voted:true},
    {name:'Mary',age:31,voted:false},
    {name:'Becky',age:43,voted:false},
    {name:'Joey',age:41,voted:true},
    {name:'Jeff',age:30,voted:true},
    {name:'Zack',age:19,voted:false},

]
function voterResults(arr) {
    return arr.reduce(function(final,s) {
       
    if(s.age>=18 && s.age<=25) {

    if(s.voted) final.youngVotes++; 
        final.youth++;
             
    }else if(s.age>=26 && s.age<=35) {

    if(s.voted)
        final.midVotes++;
        final.mids++;

    }else if(s.age>=36 && s.age<=55) {

    if(s.voted) 
        final.oldVotes++;
        final.olds++;
    }
    return final
    },{youngVotes:0,youth:0,midVotes:0,mids:0,oldVotes:0,olds:0})
}
console.log(voterResults(voters))

//Sort an array from smallest number to largest
function leastToGreatest(arr)
{
  arr.sort(function(a,b)
  {
      return a-b
  })
  return arr
}
console.log(leastToGreatest([1,3,5,2,90,20]));

// Sort an array from largest number to smallest
function greatestToLeast(arr)
{
  arr.sort(function(a,b)
  {
      return b-a
  })
  return arr
}
console.log(greatestToLeast([1,3,5,2,90,20]));

//Sort an array from shortest string to longest
function lengthSort(str)
{
  str.sort(function(a,b)
  {
      return a.length-b.length
  })
  return str
}
console.log(lengthSort(["dog","wolf","by","family","eaten"]));

//Sort an array alphabetically
function alphabetical(arr)
{
  arr.sort(function(a,b)
  {
      return a.localeCompare(b)
  })
  return arr
}
console.log(alphabetical(["dog","wolf","by","family","eaten"]));

//Sort the objects in the array by age
function byAge(arr)
{
  arr.sort(function(a,b)
  {
     return a.age-b.age
  })
  return arr
}

console.log(byAge([
{name:'Quiet Samurai',age:22},
{name:'Arrogant Ambassador',age:100},
{name:'Misunderstood Observer',age:2},
{name:'Unlucky Swami',age:77},

]))