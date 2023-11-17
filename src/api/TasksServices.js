import axios from "axios";

const url = 'http://3.101.20.102:5000/api/tasks'

export async function fetchTasks(){
    const response = await axios.get(url)
    return response
}

export async function postTask(newTask){
    const response = await axios.post(url, newTask)
    return response
}

export const updateTask = async (_id, updatedTask) => {
    const taskUrl = `${url}/${_id}`
    const response = await axios.patch(taskUrl, updatedTask)
    return response
}

export const deleteTask = async (_id) => {
    const taskUrl = `${url}/${_id}`
    const response = await axios.delete(taskUrl)
    return response
}
export async function deletedTask(tasks){

}