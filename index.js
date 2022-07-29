console.log("working");

// Q1. Write one example explaining how you can write a callback function ?

const perOne = (friend,callFriend) => {
    console.log(`Hello, right now I am talking to ${friend}. I will call you back!`);
    callFriend();
}

const perTwo = () => {
    console.log(`See I called you!`);
}
perOne("Hardik Pandya",perTwo);

//--------------------

// Q2. Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.

const getNum = () => {
    setTimeout(() => {
        console.log("1");
    },1000);
    setTimeout(() => {
        console.log("2");
    },2000);
    setTimeout(() => {
        console.log("3");
    },3000);
    setTimeout(() => {
        console.log("4");
    },4000);
    setTimeout(() => {
        console.log("5");
    },5000);
    setTimeout(() => {
        console.log("6");
    },6000);
    setTimeout(() => {
        console.log("7");
    },7000);
}
getNum();

//--------------------

// Q3. Explain callback hell.

// CALLBACK HELL-

// Callbacks are just the names/convention for using Javascript. It instead of immediately returning results like other functions, takes time to produce the result. So, if we get stuck in some particular call which prevents us from making further callsends us into Callback Hell.

// The structure of callback hell looks like pyramid/arrow shape.
// This makes our code look haphazard and makes it hard to understand.
// We would always try to avoid using multiple Callbacks to end up falling into callback hell.

//----------------------

// Q4. Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

const printNum = new Promise((resolve,reject) => {
    resolve();
})
printNum
    .then(() => {
        setTimeout(() => {
            console.log("1");
        },1000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("2");
        },2000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("3");
        },3000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("4");
        },4000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("5");
        },5000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("6");
        },6000);
    })
    .then(() => {
        setTimeout(() => {
            console.log("7");
        },7000);
    })

//----------------------------

// Q5. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected

const seePromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let skill = "Communication";
        resolve(skill);
    },2000);
})

seePromise
    .then((see) => {
        console.log(`skill listed`,see);
    })
    .catch((error) => {
        console.log(`skill not fetched`);
    })
    .finally(() => {
        console.log(`End of promise`);
    })

//-----------------------------

// Q6. Create examples to explain callback function

const personOne = (colleague,callColleague) => {
    console.log(`Hello, right now I am talking to ${colleague}. I will call you back.`);
    callColleague();
}

const personTwo = () => {
    console.log(`See I called you.`);
}
personOne("Hardik Pandya",personTwo);

//------------------------------

// Q7. Create examples to explain callback hell function

const getEmpId = () => {
    setTimeout(() => {
        console.log("Fetching the ID's");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout( () => {
            let empDetails = {
                fname: "Harsh",
                lname: "Bajaj",
                age: 28,
            }
            console.log(`The name of the employee is ${empDetails.fname} ${empDetails.lname} and the age is ${empDetails.age}`);

            setTimeout(() => {
                empDetails.gender = "Male";
                console.log(`The name of the employee is ${empDetails.fname} ${empDetails.lname} and the age is ${empDetails.age} and the gender is ${empDetails.gender}`);
            },2000);

        },2000);

    },2000);

}
getEmpId();

//------------------------------

// Q8. Create examples to explain promises function

const getPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let hobby = "Sketching";
        resolve(hobby);
    },2000);
})

getPromise
    .then((check) => {
        console.log(`hobby listed`,check);
    })
    .catch((err) => {
        console.log(`hobby not fetched`);
    })
    .finally(() => {
        console.log(`End of promise`);
    })

//------------------------------

// Q9. Create examples to explain async await function

const makePromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(`task completed`)
    },2000);
});
async function makeTwo() {
    let wait = await makePromise;
    console.log(wait);
    console.log("Checking the result");
}
makeTwo();

//------------------------------

// Create examples to explain promise.all function

const pro1 = Promise.resolve(5);
const pro2 = 1998;
const pro3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("eureka");
  }, 1000);
});

Promise.all([pro1, pro2, pro3]).then((values) => {
  console.log(values); // 5, 1998, "eureka"]
});