export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (previousStu, currentStu) => previousStu + currentStu.id, 0,
    );
  }
  return 0;
}
