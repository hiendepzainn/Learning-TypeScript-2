export {};

type TStudent = {
  id: number;
  name: string;
  email: string;
  isPremium: boolean;
  contact: string | number;
};

const student1: TStudent = {
  id: 1,
  name: "Dinh Xuan Hien",
  email: "hiendepzainn@gmail.com",
  isPremium: true,
  contact: "59 Pham Van Dong",
};

const student2: TStudent = {
  id: 2,
  name: "Dinh Xuan Sang",
  email: "sangxinhgai@gmail.com",
  isPremium: false,
  contact: "Ben xe Thua",
};

type TCourse = {
  courseID: number;
  title: string;
  price: number;
  students: TStudent[];
};

const course1: TCourse = {
  courseID: 13,
  title: "TypeScript co ban",
  price: 108,
  students: [student1],
};

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
  course.students.push(student);
};

const printCourseInfo = (course: TCourse) => {
  console.log(`Course name: ${course.title}`);
  console.log(`Number of members: ${course.students.length}`);
  if (course.students.length === 0) {
    console.log(`No member!`);
  } else {
    course.students.forEach((item: TStudent, index: number) => {
      console.log(`Member ${index + 1}: ${item.name}`);
    });
  }
};

registerStudentToCourse(student2, course1);

printCourseInfo(course1);
