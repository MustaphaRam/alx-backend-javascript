export default function getStudentsByLocation(students, city) {
  if (typeof city === 'string' && !Array.isArray(students)) {
    return students.map((student) => student.location === city);
  }
  return [];
}
