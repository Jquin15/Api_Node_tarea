import {Router} from 'express';
import { DataUser } from '../data/users.data.js';
import {validarUser, validarUpdateUser} from '../validations/users.validation.js'


const UserRouter = Router();

//GET USER
UserRouter.get("/get/:id", (req, res) => {

    const id = parseInt(req.params.id)
    const findUser = DataUser.find(u => u.id === id)

    res.status(200).json({
        status: 'success',
        User: findUser
    })
})

//GETALL USERS
UserRouter.get("/getAll", (req, res) => {
    res.status(200).json({
        status: 'success',
        Data: DataUser
    })
})

//CREATE USERS
UserRouter.post('/create', (req, res) => {
    if (validarUser(req.body)) {
        return res.status(201).json({
            status: 'error',
        })
    }

    DataUser.push(req.body)

    res.status(200).json({
        status: 'success',
        message: 'Successfully created user'
    })
})

//UPDATE USERS
UserRouter.put('/update/:id', (req, res) => {

    const error = validarUpdateUser(req.body);

    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error
        });
    }

    const id = parseInt(req.params.id)
    const findUser = DataUser.find(u => u.id === id)

    if (!findUser) {
        return res.status(201).json({
            status: 'error',
            message: "User not found"
        })
    }

    Object.assign(findUser, req.body)

    res.status(200).json({
        status: 'success',
        message: 'Successfully updated user'
    })
})

//DELETE USERS
UserRouter.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = DataUser.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
    }

    const deletedUser = DataUser.splice(index, 1);

    res.status(200).json({
        status: 'success',
        message: 'User deleted successfully',
        data: deletedUser[0]
    });
})


export default UserRouter;