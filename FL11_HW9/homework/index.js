///0
function getNumbers(str) {
    let reg = /\d/g;
    let arr = [];
    let err = str.match(reg);
    for (let index = 0; index < err.length; ++index) {
       arr.push(Number(err[index]));
    }
    return arr;
}

console.log(getNumbers('n1um3ber95'));

///1

function findTypes(...args) {
    const obj = {};

    for (const arg of args) {
        obj[typeof arg] = (obj[typeof arg] || 0) + 1
    }
    return obj;
}

console.log(findTypes('qweqwe', 'jhgjhg'));

//2

function executeforEach(arr, foo) {
    for (let el of arr) {
     foo(el);
    }
}
const two = 2;
const three = 3;

executeforEach([1, two, three], function (el) {
    console.log(el)
});


//3

function mapArray(arr, foo) {
    for (let el of arr) {
        foo(el);
    }
}

const five = 5;
const eight = 8;

mapArray([two, five, eight], function(el) {
 console.log(el + three)
});

//4

function filterArray(arr, foo) {
    for (let el of arr) {
        foo(el);
    }
}

console.log(filterArray([two, five, eight], function (el) {
    return el > three
}));

//5

function showFormattedDate(date) {
    const dateNumb = date.toDateString();
    return `Date: ${dateNumb}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// 6

function canConvertToDate(date) {
    const dateNumb = date.toDateString();
    return dateNumb !== 'Invalid Date';
}

console.log(canConvertToDate(new Date('2016-03-18T00:00:00')));

// 7



function daysBetween(date1, date2) {
    const thousand = 1000;
    const twentyFour = 24;
    const numb = 3600;

    if (date1 instanceof Date && date2 instanceof Date) {
        const diff = Math.abs(date2 - date1);
        return Math.ceil(diff / (thousand * numb * twentyFour));
    }

    return null;
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))); // 32

// 8

const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {
    let nowDay = new Date();
    const adulthood = 18;

    let thisYear = nowDay.getFullYear();
    let number = thisYear - adulthood;
    let n = 0;

    for (let item of data) {

        let bDay = new Date(item.birthday);
        let a = bDay.getFullYear();
        if (a < number) {
            n += 1;
        }
    }
    return n;
}

console.log(getAmountOfAdultPeople(data)); // returns 3;

// 9
 function keys(obj) {
     let keysArr = [];
     for(let key in obj) {
         if (obj.hasOwnProperty(key)) {
             keysArr.push(key);
         }
     }
     return keysArr;

 }

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

 // 10

function values(obj) {
    let valuesArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            valuesArr.push(obj[key]);
        }
    }
    return valuesArr
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
