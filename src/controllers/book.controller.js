import{getConnection} from "./../database/database"

//Get all books in the database
const getBooks = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id,title,genre,author_id FROM books")
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
//Get book by ID
const getBook = async (req,res)=>{
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id,title,genre,author_id FROM books WHERE id = ?", id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const methods={
    getBooks,
    getBook
}