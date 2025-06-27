import {Router} from 'express'
import {
    postTask, getTasks, getTask, putTask, deleteTask
} from '../controllers/task.controllers.js'
const router = Router()


router.post('/tasks', postTask)
router.get(`/tasks`, getTasks)
router.get(`/tasks/:id`, getTask)
router.put('/tasks/:id', putTask)
router.delete('/tasks/:id', deleteTask)

 
export default router