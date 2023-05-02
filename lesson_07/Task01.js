'use strict';


const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (passExam, failExam) => {
  const result = [];
  for(let i = 0; i < passExam.length; i++) {
    if (failExam.indexOf(passExam[i]) === -1) {
      result.push(passExam[i]);
    }
  }
  return result;
}

console.log(filter(allStudents, failedStudents));