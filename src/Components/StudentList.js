import StudentCard from "./StudentCard";
const StudentList = (props) => {
  return (
    <div>
        <h2>All Students</h2>
        <p>Total Students: {props.students.length}</p>
      {props.students.map((student) => {
        return <StudentCard student={student}> </StudentCard>;
      })}
    </div>
  );
};
export default StudentList;
  