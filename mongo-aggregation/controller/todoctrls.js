const getDatabase = require('../db.js');

async function getAllTodos(req, res) {
    try {
        const db = await getDatabase();
        const todos =  await db.collection("data");
        const allTodos = await todos.find().toArray();
        res.status(200).json(allTodos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

 async function getOneTodos(req, res) {
    const id =req.params.id;
    console.log({id})
    const db =await getDatabase();
    const todods =await db.collection("data");

    const todos = await todos.find({_id: mongodb.Object(Id)}.toArray())    
    res.status(200).json(todos);
}

 async function addOneTodos(req, res) {
    const {userId, title ,completed} = req.body;
    const db =await getDatabase();
    const todos= await db.collection("data");

    const result =await todos.insertOne({userId ,title , completed});
    res.status(201).json(result); 
    
}

 async function updateOneTodos(req, res) {
    const id =req.params.id;
    const {userId, title ,completed} = req.body;
    const updates ={};
    if (title !== undefined)
    {
        updates.title =title;
    }
    if(completed !== undefined)
    {
        updates.completed =completed
    }
    const db =await getDatabase();
    const todos =await db.collection("data");

    const result = await todos.updateOne(
        {_id: new momgodb.ObjectId(id) },
        {$set: updates}
    );

    res.status(200).json(result);


}

 async function deleteOneTodos(req, res) {
    const {userId, title ,completed} = req.body;
    const db =await getDatabase();
    const todos= await db.collection("data");

    const todo = await todos.find({_id: mongodb.Object(Id)}.toArray());
    if(todo.length <=0) 
    {
        return res.status[404]({message: "not found"});
    }
}

module.exports = {
    getAllTodos,
    getOneTodos,
    addOneTodos,
    updateOneTodos,
    deleteOneTodos
};
