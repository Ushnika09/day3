const express=require('express')
const app=express()
// let books=require('./books.js')//works with filter
const books=require('./books.js')//with splice in delete

app.use(express.json())//midlewear to parse json


//Root route
app.get('/',(req,res)=>{
    res.status(200).json("WELCOME to Root Route")
})


//get method to get all books
app.get('/books',(req,res)=>{
    res.status(200).json(books)
})


//get method to get book by id
app.get('/books/:id',(req,res)=>{
    let id=parseInt(req.params.id)

    let book=books.find(book=>book.id===id)

    if (!book) return res.status(404).json("Book not found")

    res.status(200).json(book)
})




//post method to create entry for new book
app.post('/books',(req,res)=>{

    const {title,author}=req.body

    if(!title || !author) return res.status(400).json(`Title and author are required`)

    books.push(req.body);
    res.status(201).json(`New book added successfully`)
})


//put method to update a particular entry based on id completely
app.put('/books/:id',(req,res)=>{
    let id=parseInt(req.params.id)

    updatedBook=req.body

    let index=books.findIndex(book=>book.id==id)

    if(index===-1){
        return res.status(404).json("Book not found")
    }

    books[index]=updatedBook
    res.status(200).json("Book updated successfully")
})


//patch method to update a particular entry based on id partially
app.patch('/books/:id',(req,res)=>{
    let id=parseInt(req.params.id)

    updatedBook=req.body

    let index=books.findIndex(book=>book.id==id)

    if(index===-1){
        return res.status(404).json("Book not found")
    }

    books[index]={"id":id,...updatedBook}
    res.status(200).json("Book updated successfully")
})


//delete method to delete a particular entry based on id 
app.delete('/books/:id',(req,res)=>{
    let id=parseInt(req.params.id)

    let index=books.findIndex(book=>book.id==id)

    if(index===-1){
        return res.status(404).json("Book not found")
    }

    // books=books.filter(book=>book.id!==id)
    books.splice(index,1)


    res.status(200).json("Book deleted successfully")
})




const PORT=3000

app.listen(PORT,()=>{
    console.log(`Server is ruuning in port ${PORT}`);
})