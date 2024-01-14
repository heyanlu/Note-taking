import { useState } from "react";
import Header from "../component/header";
import Search from "../component/Search";
import Home from "../pages/Home";
import Done from "../pages/Done";
import Prioritized from "../pages/Prioritized";
import Register from "../component/Register";
import Footer from "../component/Footer";
import { initialList } from "../data/taskData";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(initialList);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // App is the parent of both Search and Home
  function handleSearchItems(query) {
    setFilteredTasks(
      tasks.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
    );
  }

  return (
    <div className="homepage">
      <Header page={page} setPage={setPage} name={name} setName={setName} />
      {page !== "Register" && (
        <Search name={name} tasks={tasks} onSearch={handleSearchItems} />
      )}
      <div className="main">
        {page === "Home" && (
          <Home
            tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
            setTasks={setTasks}
          />
        )}
        {page === "Done" && <Done />}
        {page === "Prioritized" && <Prioritized />}
        {page === "Register" && <Register />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
