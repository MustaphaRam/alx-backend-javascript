// task 5. Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director {
  workFromHome = (): string => 'Working from home';
  getToWork = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

class Teacher {
  workFromHome = (): string => 'Cannot work from home';
  getToWork = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();
console.log("test task 5. Advanced types Part 1");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// task 6. Creating functions specific to employees

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;

export const executeWork = (employee: (Teacher | Director)): void => {
  console.log(employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks() )
}
console.log("test task 6. Creating functions specific to employees");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));


// task 7. String literal types
type Subjects = 'Math' | 'History';

export const teachClass = (todayClass: Subjects) : string => {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}

console.log("test task task 7. String literal types");
console.log(teachClass('Math'));
console.log(teachClass('History'));
