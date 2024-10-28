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

//add book to database
const addBooks = async (req,res)=>{
    try {
        const{ title, genre, author_id } = req.body;
        if(title === undefined || genre === undefined || author_id === undefined){
            req.status(400).json({message: "Bad request, please fill all fields."})
        }
        const book = { title, genre, author_id };
        const connection = await getConnection();
        const result=await connection.query("INSERT INTO books SET ?", book);
        res.json({ message: "Book added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//update a register added to the database
const updateBook = async (req,res)=>{
    try {
        const { id } = req.params;
        const{ title, genre, author_id } = req.body;

        if (id === undefined || title === undefined || genre === undefined || author_id === undefined){
            req.status(400).json({message: "Bad request, please fill all fields."})
        }
        const book = { title, genre, author_id };
        const connection = await getConnection();
        const result = await connection.query("UPDATE books SET ? WHERE id = ?", [book,id])
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods={
    getBooks,
    getBook,
    addBooks,
    updateBook
}