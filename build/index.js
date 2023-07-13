"use strict";
/***
 * 2 ways for typescript to add type
 * 1. Implicit
 * 2. Explicit
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Implicit
let fName = 'jeniffer'; // strin
// fName = 1234 / fail
// Explicit
let lName = 'Giraldo';
lName = 3445;
lName = false;
lName = undefined;
const typePractice_1 = require("./typePractice");
(0, typePractice_1.twoSum)({ num1: 5, num2: 9, message: 'test' });
