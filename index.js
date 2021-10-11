// Code your solution in this file!
const driver = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
    
    return driver.slice(0,2);
}


function returnLastTwoDrivers(){
    return driver.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function (){
        return fare*fare
    }
}


function fareDoubler(fare) {
    const farePrice= createFareMultiplier(fare)
    return farePrice*2
}


function fareTripler(fare){
    return fare*3 
}

