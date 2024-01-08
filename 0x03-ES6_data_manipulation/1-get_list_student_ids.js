export default function getListStudents(students) {
  if (!students.isArray) {
    return [];
  }

  return students.map((student) => student.id);
}
