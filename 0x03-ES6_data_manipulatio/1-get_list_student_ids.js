export default function getListStudents(students) {
  if (!students instanceof Array) {
    return [];
  }

  return students.map((student) => student.id);
}
