import * as tuitsDao from '../tuits/tuits-dao.js'
import posts from "./tuits.js";
let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.userName = "NASA";
    newTuit.handle = "@nasa";
    newTuit.image = "nasa.png";
    newTuit.time = "2h";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);

}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
 } 

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    try {
        var status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
        if (status['modifiedCount'] == 1){
            status=200;
        }
        res.sendStatus(status);
    } catch (error) {
        console.log(error);
    }
    
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    try {
        var status = await tuitsDao.deleteTuit(tuitdIdToDelete);
        if (status['deletedCount'] == 1){
            status=200;
        }
        res.sendStatus(status);
    } catch (error) {
        console.log(error);
    }
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

