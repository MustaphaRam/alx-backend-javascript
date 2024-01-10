interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute_Name: string]: any,
};

interface Directors extends Teacher {
  numberOfReports: number,
}
  
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () : string => 'Currently working';

  displayName = () : string => this.firstName;
}

interface studentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// test: /:$ npm run start-dev
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


const student = new StudentClass("Paul", "jerry");
console.log(student.displayName())
console.log(student.workOnHomework())

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const ul: HTMLUListElement = document.createElement('ul');

for(const [key, value] of Object.entries(teacher3)) {
  const li: HTMLLIElement = document.createElement('li');
  li.innerText = `${key}: ${value}`;
  ul.appendChild(li);
}

body.appendChild(ul);
