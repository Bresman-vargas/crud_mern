import axios from 'axios'

export const getTasksRequest = async () =>{
    return await axios.get('http://localhost:4000/tasks/')
}

export const createTaskRequest = async (task) => {
    return await axios.post('http://localhost:4000/tasks/', task)
}

export const delateTaskRequest = async (id) => {
    return await axios.delete(`http://localhost:4000/tasks/${id}`) 
}

