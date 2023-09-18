import './App.css';
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Kanban from "./components/Kanban";
import {fetchStatuses} from "./api/StatusesServices";
import {deleteTask, fetchTasks, postTask, updateTask} from "./api/TasksServices";
import useFetching from "./hooks/useFetching";
import MyModal from "./components/ui/Modal/MyModal";
import CreateModal from "./components/CreateModal";
import DeleteModal from "./components/DeleteModal";
import {useSearch} from "./hooks/useSearch";

function App() {

    const isModalOpenInitialState = {
        isOpen: false,
        mode: null,
        data: null
    }

    const [tasks, setTasks] = useState([])
    const [statuses, setStatuses] = useState([])

    const [getStatuses, isStatusesLoader, statusesError] = useFetching(async () => {
        const response = await fetchStatuses()
        setStatuses(response.data)
    })

    const [getTasks, isTasksLoader, tasksError] = useFetching(async () => {
        const response = await fetchTasks()
        setTasks(response.data)
    })

    const [openModal, setOpenModal] = useState(isModalOpenInitialState)
    const [searchQuery, setSearchQuery] = useState('')
    const searchedTasks = useSearch(searchQuery, tasks)

    //console.log(searchQuery.current.value)

    // const searchTask = () => {
    //     const newTasks = tasks.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()))
    //     return newTasks
    // }
    // const searchedTasks = searchTask()

    // const searchedTasks = useMemo(() => {
    //     searchTask()
    // }, [searchQuery, tasks])

    const priorities = [1, 2, 3, 4, 5, 6]

    const createTask = async (newTask) => {
        try {
            await postTask(newTask)
            await getTasks()
        } catch(err){
            alert("Task wasn't created")
        }
    }

    const changePriority = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            await getTasks()
        } catch(err){
            console.log(err)
            alert("Task wasn't updated")
        }
    }

    const editTask = async (id, updatedTask) => {
        try {
            await updateTask(id, updatedTask);
            await getTasks()
        } catch(err){
            console.log(err)
            alert("Task wasn't edited")
        }
    }

    const removeTask = async (id) => {
        try {
            await deleteTask(id)
            await getTasks()
        } catch(err){
            console.log(err)
            alert("Task wasn't deleted")
        }
    }

    const changeStatus = async (id, status, direction) => {
        const statusesArray = statuses.map(status => status.title)
        const oldStatusIndex = statusesArray.indexOf(status)
        const newStatusIndex = oldStatusIndex + direction
        const updatedTask = { status: statusesArray[newStatusIndex]}
        try {
            await updateTask(id, updatedTask)
            await getTasks()
        } catch(err){
            console.log(err)
            alert("Status wasn't updated")
        }
    }

    useEffect(() => {
        getStatuses()
        getTasks()
    })

    return (
        <div className="App">
            <h1>Kanban board</h1>
            <button
                type="button"
                className="btn btn-warning me-2"
                onClick={() => setOpenModal({
                    isOpen: true,
                    mode: "create",
                    data: null
                })}
            >Create new task</button>

            <input type="text" placeholder='Find a task' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

            <Kanban
                isStatusesLoader={isStatusesLoader}
                isTasksLoader={isTasksLoader}
                statusesError={statusesError}
                tasksError={tasksError}
                statuses={statuses}
                tasks={searchedTasks}
                changePriority={changePriority}
                setOpenModal={setOpenModal}
                changeStatus={changeStatus}
                priorities={priorities}
                editTask={editTask}
            />

            <MyModal
                openModal={openModal}
                setOpenModal={setOpenModal}
            >
                <CreateModal
                    setOpenModal={setOpenModal}
                    createTask={createTask}
                    priorities={priorities}
                    statuses={statuses}
                />

                <DeleteModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    removeTask={removeTask}
                />
            </MyModal>
        </div>
    );
}

export default App;

// https://expressjs-server.vercel.app/tasks
// https://expressjs-server.vercel.app/statuses
// spinner - https://mhnpd.github.io/react-loader-spinner/
// axios - https://www.npmjs.com/package/axios
// Bootstrap - https://getbootstrap.com/docs/5.3/layout/columns/