import Header from "../../Component/Header";
import TaskInput from "../../Component/TaskInput";
import Task from "../../Component/Task";
import Footer from "../../Component/Footer";


export default function Home() {
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
        <Task title="Read a book" />
        {/* task */}
        <Task title = "Take a shower" />
        {/* task */}
        <Task title = "Sleep" />
      </div>

      {/* //footer section */}
      <Footer year = "2024" fullName = "Chittapan Phahongsa" studentId = "660610747" />
    </div>
  );
}
