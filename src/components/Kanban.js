import React from 'react';
import FileLoader from "../utils/FileLoader";
import StatusColumns from "./StatusColumns";

const Kanban = ({
                    isStatusesLoader,
                    isTasksLoader,
                    statusesError,
                    tasksError,
                    statuses,
                    tasks,
                    changePriority,
                    setOpenModal,
                    changeStatus,
                    priorities,
                    editTask
}) => {

    if(isStatusesLoader || isTasksLoader){
        return <FileLoader />
    }

    if(statusesError ) {
        return <h2>{statusesError}</h2>
    }

    if (tasksError){
        return <h2>{tasksError}</h2>
    }

    //  {isLoader && <FileLoader />}

    return (
        <div>

            <div className="container text-center">
                <div className="row align-items-start">
                    {statuses.map(status =>
                        <StatusColumns
                            key={status.id}
                            status={status}
                            tasks={tasks}
                            changePriority={changePriority}
                            setOpenModal={setOpenModal}
                            changeStatus={changeStatus}
                            statuses={statuses}
                            priorities={priorities}
                            editTask={editTask}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Kanban;