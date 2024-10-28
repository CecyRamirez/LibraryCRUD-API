import{getConnection} from "./../database/database"

//get all the authorsin database
const getAuthors = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id,name,bio FROM authors")
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Get an author by ID
const getAuthor = async (req,res)=>{
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id,name,bio FROM authors WHERE id = ?", id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Add a new author to database
const addAuthors = async (req,res)=>{
    try {
        const{ name, bio } = req.body;

        if(name === undefined || bio === undefined){
            req.status(400).json({message: "Bad request, please fill all fields."})
        }
        const author = { name, bio };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO authors SET ?", author);
        res.json({ message: "Author added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Update
const updateAuthor = async (req,res)=>{
    try {
        const { id } = req.params;
        const{ name, bio } = req.body;

        if (id === undefined || name === undefined || bio === undefined){
            req.status(400).json({message: "Bad request, please fill all fields."})
        }
        const author = { name, bio };
        const connection = await getConnection();
        const result = await connection.query("UPDATE authors SET ? WHERE id = ?", [author,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//delete an author by its id
const deleteAuthor = async (req,res)=>{
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM authors WHERE id = ?", id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getAuthors,
    getAuthor,
    addAuthors,
    updateAuthor,
    deleteAuthor
}