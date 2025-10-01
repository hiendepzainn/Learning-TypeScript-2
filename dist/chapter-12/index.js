"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, role) {
        this.getInfo = () => {
            console.log(`Name: ${this.name}`);
            console.log(`Email: ${this.email}`);
            console.log(`Role: ${this.role}`);
        };
        this.printUserInfo = () => { };
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
class Teacher extends User {
    constructor() {
        super(...arguments);
        this.courses = [];
        this.addCourse = (courseName) => {
            this.courses?.push(courseName);
        };
        this.printUserInfo = () => {
            console.log(`[Teacher] ${this.name} - Courses Taught: ${this.courses?.join(", ")}`);
        };
    }
}
class Student extends User {
    constructor() {
        super(...arguments);
        this.enrolledCourses = [];
        this.enroll = (courseName) => {
            this.enrolledCourses?.push(courseName);
        };
        this.printUserInfo = () => {
            console.log(`[Student] ${this.name} - Enrolled Courses: ${this.enrolledCourses?.join(", ")}`);
        };
    }
}
const hien = new Student("Dinh Xuan Hien", "hiencbnuet@gmail.com");
hien.enroll("TypeScript Pro");
const pad = new Teacher("Pad ne", "pad0910@gmail.com", "teacher");
pad.addCourse("React");
const listUser = [hien, pad];
listUser.forEach((user) => {
    user.getInfo();
    user.printUserInfo();
});
