import {pool} from '../db.js'

export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * from todo ORDER BY create_at DESC;'
        )
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const getTask = async (req, res) => {
    const {id} = req.params
    try {
        const [row] = await pool.query(
            'SELECT * from todo WHERE id = ?;',
            [id]
        )
        if (row.length === 0) {
            return res.status(404).json({message : "Tarea no encontrada"})
        }
        res.status(200).json(row[0])

    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const putTask = async (req, res) => {
    const {id} = req.params;
    const {title, description, completed} = req.body
    try {
        const [result] = await pool.query(
            'UPDATE todo SET title = ?, description = ?, completed = ? WHERE id = ?', 
            [title, description, completed, id]
        )
        if(result.affectedRows === 0){
            return res.status(404).json({message : "Tarea no encontrada"})
        }
        res.status(200).json({ message: 'Tarea actualizada', id })
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const postTask = async (req, res) => {
    const {title, description} = req.body
    const completed = req.body.completed === 'True'

    try {
        const [result] = await pool.query(
            'INSERT INTO todo (title, description, completed ) VALUES (?, ?, ?);', 
            [title, description, completed]
        )

        res.status(201).json({
            message : 'Agregado correctamente',
            taskID : result.insertId
        })

    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}

export const deleteTask = async (req, res) => {
    const {id} = req.params;
    try {
        const [result] = await pool.query(
            'DELETE from todo WHERE id = ?', [id]
        )
        if (result.affectedRows === 0){
            return res.status(404).json({message : "No se puedo eliminar"})
        }
        res.status(200).json({message : "Eliminado exitosamente", id })
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}