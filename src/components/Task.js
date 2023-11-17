import React from 'react';
import UpdateModal from "./UpdateModal";

const Task = ({task, changePriority, setOpenModal, changeStatus, statuses, priorities, editTask}) => {
    //console.log(priorities[5])
    //console.log(statuses[0].status)
    return (
        <div>
            <div className="card mb-3">
                <div className="card-header">

                    Priority: {task.priority}
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm ms-2 me-1"
                        onClick={() => changePriority(task._id, {priority: +task.priority + 1})}
                        disabled={priorities[5].toString() === task.priority}
                    >↑</button>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => changePriority(task._id, {priority: task.priority - 1})}
                        disabled={priorities[0].toString() === task.priority}
                    >↓</button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Task name: {task.name}</h5>
                    <p className="card-text">Description: {task.description}</p>

                    <div style={{margin: '4px'}}>
                        <button
                            type="button"
                            className='btn btn-outline-primary btn-sm me-1'
                            onClick={() => changeStatus(task._id, task.status, -1)}
                            disabled={statuses[0].status === task.status}
                        >←</button>
                        <button
                            type="button"
                            className='btn btn-outline-primary btn-sm'
                            onClick={() => changeStatus(task._id, task.status, 1)}
                            disabled={statuses[statuses.length - 1].status === task.status}
                        >→</button>
                    </div>

                    {/*<a*/}
                    {/*    href="#" className="btn btn-primary me-1"*/}
                    {/*>Update</a>*/}
                    <UpdateModal
                        statuses={statuses}
                        priorities={priorities}
                        task={task}
                        editTask={editTask}
                    />
                    <button
                        className="btn btn-outline-danger m-1"
                        onClick={() => setOpenModal({
                            isOpen: true,
                            mode: "delete",
                            data: task
                        })}
                    >Delete</button>


                </div>
            </div>
        </div>
    );
};

export default Task;