import axios from "axios";

const url = 'https://kanban-server-qq74.onrender.com/tasks'

export async function fetchTasks(){
    const response = await axios.get(url)
    return response
}

export async function postTask(newTask){
    const response = await axios.post(url, newTask)
    return response
}

export const updateTask = async (id, updatedTask) => {
    const taskUrl = `${url}/${id}`
    const response = await axios.patch(taskUrl, updatedTask)
    return response
}

export const deleteTask = async (id) => {
    const taskUrl = `${url}/${id}`
    const response = await axios.delete(taskUrl)
    return response
}
export async function deletedTask(tasks){

}