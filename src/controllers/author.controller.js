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

export const methods={
    getAuthors,
    getAuthor
}