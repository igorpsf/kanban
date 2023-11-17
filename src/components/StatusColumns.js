import React from 'react';
import Task from "./Task";

const StatusColumns = ({status, tasks, changePriority, setOpenModal, changeStatus, statuses, priorities, editTask}) => {
    return (
            <div className="col">
                <h3>{status.title}</h3>

                {tasks.filter(task => task.status === status.title).map(task =>
                    <Task
                        key={task.id}
                        task={task}
                        changePriority={changePriority}
                        setOpenModal={setOpenModal}
                        changeStatus={changeStatus}
                        statuses={statuses}
                        priorities={priorities}
                        editTask={editTask}
                    />
                )}

            </div>
    );
};

export default StatusColumns;