import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskForm";



function App() {


 


  return (
    <main className="bg-zinc-900 h-screen">
     <div className="containe  mx-auto">
      <TaskForm />
      <Tasklist />

     </div>

    </main>
  );
}

export default App;
