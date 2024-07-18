import Header from "../../Component/Header";
import TaskInput from "../../Component/TaskInput";
import Task from "../../Component/Task";
import Footer from "../../Component/Footer";


export default function Home() {
  const taskslist = [
    {id : 1, title : "Read a book" ,isDone : true},
    {id : 2, title : "Take a shower" ,isDone : false},
    {id : 3, title : "Sleep" ,isDone : false}
    

  ]
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        {/* task */}
        <Task {...taskslist[0]} />
        {/* task */}
        <Task {...taskslist[1]} />
        {/* task */}
        <Task {...taskslist[2]} />
      </div>

      {/* //footer section */}
      <Footer year = "2024" fullName = "Chittapan Phahongsa" studentId = "660610747" />
    </div>
  );
}
