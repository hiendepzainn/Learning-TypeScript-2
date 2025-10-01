export {};

class User {
  public name: string;
  private _email: string;
  protected role: "student" | "teacher";

  constructor(name: string, email: string, role?: "student" | "teacher") {
    this.name = name;
    this._email = email;
    this.role = role ?? "student";
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public getInfo = () => {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Role: ${this.role}`);
  };

  printUserInfo = (): void => {};
}

class Teacher extends User {
  courses: string[] = [];

  addCourse = (courseName: string) => {
    this.courses?.push(courseName);
  };

  printUserInfo = () => {
    console.log(
      `[Teacher] ${this.name} - Courses Taught: ${this.courses?.join(", ")}`
    );
  };
}

class Student extends User {
  enrolledCourses: string[] = [];
  enroll = (courseName: string) => {
    this.enrolledCourses?.push(courseName);
  };

  printUserInfo = () => {
    console.log(
      `[Student] ${this.name} - Enrolled Courses: ${this.enrolledCourses?.join(
        ", "
      )}`
    );
  };
}

const hien = new Student("Dinh Xuan Hien", "hiencbnuet@gmail.com");
hien.enroll("TypeScript Pro");

const pad = new Teacher("Pad ne", "pad0910@gmail.com", "teacher");
pad.addCourse("React");

const listUser: User[] = [hien, pad];
listUser.forEach((user) => {
  user.getInfo();
  user.printUserInfo();
});
