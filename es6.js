var logger = selector => console.log(selector);

logger('Ninhtito');

const sum = (a, b) => ({
    a: a,
    b: b
});

console.log(sum(2, 2));

const obj = {
    name: 'JS',
    getName: () => {
        return this; // context
    },
};

console.log(obj.getName());

const Course = function (name, price) {
    this.name = name;
    this.price = price;
};

const Course1 = new Course('js', 100);

console.log(Course1);

// Enhanced object literal
//1. Định nghĩa key: value cho object
//2. Định nghĩa methodd cho object
//3. Định nghĩa key cho object dưới dạng biến


var name1 = 'JS';
var price1 = 1000;

var course = {
    name1,
    price1,
    getPrice() {
        return price1;
    }

};

console.log(course);

var fieldName = 'name1';
var fieldName2 = 'price1';

const courseField = {
    [fieldName]: 'js',
    [fieldName2]: 1000
};


console.log(courseField);

var ninh = 'VuongQuang';
var ninh2 = 'VuongQuang1';

const fullName = {
    name1: [ninh],
    name2: [ninh2]
}

function arrToObj(arr) {
    return arr.reduce((obj, key) => {
        obj[key[0]] = key[1];
        return obj
    }, {});
}

// Expected results;

const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])
console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
    ['name', 'Duc Long'],
    ['age', 18],
    ['address', 'Ha Noi']
])
console.log(obj2)
// Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }

// Destructuring, Rest

// Destructuring

var array1 = ['JS','PHP','Ruby'];

var [a, ...rest] = array1;

console.log(rest);

var course8 = {
    name: 'JS',
    price: 1000,
    image: 'http://123123',
    age: '18',
    children: {
        name: 'React',
    },
    description: 'Ninhtito1312312321313'
};

var {name: parentName, children: {name: childrenName}} = course8;

console.log(parentName);
console.log(childrenName);

var {name, description = '1123'} = course8;

console.log(description);

var logger = (...params) => {
    console.log(params);
}

console.log(logger(12345678));

// Spread operator


// Ôn tập lại spread
var logger1 = ({ name, price1, ...rest}) => {
    console.log(name, price1);
    console.log(rest);
}

logger1({
    name: 'JS',
    price1: 100,
    description: 'description'
});

var logger2 = ({ name, price1, ...rest}) => {
    console.log(name, price1, ...rest);
};

logger2 = ['ninh', 'vo gia', 22];
//


var array2 = ['js', 'ruby', 'dart'];

var array3 = ['react', 'node'];

var array4 = [...array2, ...array3];

var array5 = [...array1, ...array3];

console.log(array5);

var object1 = {
    name1: 'js',
};

var object2 = {
    price: 1000,
};

var object3 = {
    name: 'ruby',
};

var object4 = { 
    ...object1,
    ...object2,
    ...object3,
};

console.log(object4);

var defaultConfig = {
    api: 'http://localhost',
    apoVersion: 'v1.0',
    other1: 'other'
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'http://localhost:300',
};

console.log(exerciseConfig);

var array6 = ['js', 'js', 'js4', 'js3', 'js2', 'js1'];

var logger3 = (...rest) => {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    };
};

logger3(...array6);


// JS modules

import {logger8} from './logger/index.js';

import * as constants from './constants.js';


console.log(constants);
logger8('Test message', constants.TYPE_ERROR);


