import React, {useState} from 'react';
import MyButton from "./ui/Button/MyButton";

const CreateModal = ({priorities, statuses, createTask, setOpenModal}) => {

    const initialTask = {
        name: "",
        description: "",
        priority: priorities[0],
        status: statuses[0]?.title
    }
    const [newTask, setNewTask] = useState(initialTask);

    const onCloseModal = () => {
        setNewTask(initialTask)
        setOpenModal({
            isOpen: false,
            mode: null,
            data: null
        })
    }
    const onCreate = () => {
        createTask(newTask)
        onCloseModal()
    }

    const onCancel = () => {
        onCloseModal()
    }

    return (
        <div>
            <h3>Create new task</h3>
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input onChange={(event) => setNewTask({...newTask, name: event.target.value})} value={newTask.name} type="text" className="form-control" id="floatingInputGroup1" placeholder="Taskname"></input>
                        <label htmlFor="nameInput">Task name</label>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="form-floating">
                    <input onChange={(event) => setNewTask({...newTask, description: event.target.value})} value={newTask.description} type="text" className="form-control" id="floatingInputGroup1" placeholder="Description"></input>
                    <label htmlFor="descriptionInput">Description</label>
                </div>
            </div>

            <div className="form-floating mb-3">
                <select onChange={(event) => setNewTask({...newTask, priority: event.target.value})} value={newTask.priority} className="form-select" id="floatingSelect" aria-label="Select priority">
                    {priorities.map((priority, index) => <option key={index} value={priority}>{priority}</option>)}
                </select>
                <label htmlFor="prioritySelector">Priority</label>
            </div>

            <div className="form-floating mb-3">
                <select onChange={(event) => setNewTask({...newTask, status: event.target.value})} value={newTask.status} className="form-select" id="floatingSelect" aria-label="Select status">
                    <option selected></option>
                    {statuses.map((el) => <option key={el._id} value={el.title}>{el.title}</option>)}
                </select>
                <label htmlFor="statusSelector">Status</label>
            </div>
            <MyButton onClick={onCreate}>Create</MyButton>
            <MyButton onClick={onCancel}>Cancel</MyButton>

        </div>
    );
};

export default CreateModal;