const express = require("express")
const app = express();

//middleware
app.use(express.json());

// root end point
app.get("/",(req,res)=>{ 
    res.send("hii from first root path")
});


// org - Mu
app.get("/org",(req,res)=>
{
    res.send("MU")
});

// org/school FOT

app.get("/org/school",(req,res)=>{
    res.send("FOT")
});


// student Priyank
// app.get("/student",(req,res)=>{
//     res.send("deep manani")
// });

app.get("/displayname/:name",(req,res)=>{
    var nm = req.params.name;
    res.send("hii,"+ nm.toUpperCase())
})

app.get("/displayfullname/:fname + lname",(req,res)=>{
    var fullname = req.query.fname + " " + req.query.lname;
    res.send("Hii, " + fullname.toUpperCase())

})

//login endpoint
app.post("/login",(req,res)=>{
    var unm = req.body.uname;
    var pwd = req.body.upwd;
    
    if(unm === pwd){
        res.send("welcome")

    }else{
        res.send("invalid credential")
    }
})

//create endpoint to perform foloowig operation of book
//addd new book
// display all book
//specific book id
//delete
//update

// id ame auther price publication public yar numebr of page

app.post("/book",(req,res)=>{
    var id = req.body.bid;
    var name = req.body.bname;
    var auther = req.body.bauther;
    var price = req.body.bprice;
    var publication = req.bpublication;
    var year = req.body.byear;
    var pg = req.body.pg;

    res.send("invalid credential")
})






//create endpoint wich alllow past student or students end display your name

app.get("/students?",(req,res)=>{
    res.json({'msg':"hii priyank"});
})



//create endpoint which allows good and end number times of o will be allow
app.get("/goo+d",(req,res)=>{
    res.json({'msg':"hii from goods details"});
})


//create endpoint wich start with g and end with gle

app.get("/g*gle",(req,res)=>{
    res.json({'msg':"hii from google"});
})


//create endpoint wich allows food or foods. 2.book with endnumber of o. 3.endpoint start with m. 4.if not any of this then print invalid. 


app.get("/food(s)?",(req,res)=>{
    res.json({'msg':"hii from food"});
})

app.get("/boo+k",(req,res)=>{
    res.json({'msg':"hii from books details"});
})

app.get("/m*",(req,res)=>{
    res.json({'msg':"hii from start m"});
})

app.get("/*",(req,res)=>{
    res.json({'msg':"hey!8"})
})

app.listen(3000,()=>{
    console.log("server is running on 3000");
})


var data = [{
	name:'ABC',
	enroll:'123',
	marks:[
		{
			sub_code:'s1',
			marks:20
		},{
			sub_code:'s2',
			marks:25
		}
	]
},{
	name:'deep',
	enroll:'92100133049',
	marks:[
		{
			sub_code:'ict01a',
			marks:18
		},{
			sub_code:'ict02',
			marks:35
		}
	]
}]


//order categories product



// apply express routers  to print current time for all the requst