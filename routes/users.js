import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createUser } from '../controllers/users.js';


const router = express.Router();
let users = [];
router.get('/',getUser);
router.post('/', createUser);

const users = [{
     firstName: "John",
     lastName: "Doe",
     age: 30,s
}]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});
 router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    const user =req.body;
    
    users.push( {user, id:uuidv4()});

    res.send(`User with the username ${user.firstName} added to the database`);
    
 });
 router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send(req.params);});
 export default router;