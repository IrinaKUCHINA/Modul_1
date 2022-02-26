'use strict';

const  allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const  filedStudents = ['Сидоров','Смирнов', 'Попов'];

function filter(allStudents, filedStudents){
	let diff1 = getDiff(allStudents, filedStudents);
	let diff2 = getDiff(filedStudents, allStudents);
	
	return [].concat( diff1, diff2 );
}
    
function getDiff(allStudents, filedStudents) {
    let newArray = [];

    for (let elem of allStudents) {
        if (!inArray(elem, filedStudents)) {
            newArray.push(elem);
        }
    }

    for (let elem of allStudents) {
        if (!inArray(elem, allStudents)) {
            newArray.push(elem);
        }
    }

    return newArray;
}

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}

console.log(filter(allStudents, filedStudents));