export default function getStudentsByLocation(students, city) {
  if (typeof city === 'string' && students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
