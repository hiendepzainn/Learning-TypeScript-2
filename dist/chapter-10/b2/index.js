"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    id: 1,
    name: "Dinh Xuan Hien",
    email: "hiendepzainn@gmail.com",
    isPremium: true,
    contact: "59 Pham Van Dong",
};
const student2 = {
    id: 2,
    name: "Dinh Xuan Sang",
    email: "sangxinhgai@gmail.com",
    isPremium: false,
    contact: "Ben xe Thua",
};
const course1 = {
    courseID: 13,
    title: "TypeScript co ban",
    price: 108,
    students: [student1],
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printCourseInfo = (course) => {
    console.log(`Course name: ${course.title}`);
    console.log(`Number of members: ${course.students.length}`);
    if (course.students.length === 0) {
        console.log(`No member!`);
    }
    else {
        course.students.forEach((item, index) => {
            console.log(`Member ${index + 1}: ${item.name}`);
        });
    }
};
registerStudentToCourse(student2, course1);
printCourseInfo(course1);
