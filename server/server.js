import connectDB from "./db/index.js"
import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
import authRoutes from "./routes/auth/auth_route.js";
import adminProductsRoutes from "./routes/admin/products-routes.js";
import shopProductsRoutes from "./routes/shop/product-routes.js"

const app=express()
const PORT=process.env.PORT || 5000

dotenv.config({
    path:"./.env"
})

app.use(
    cors({
        origin:`http://localhost:5173`,
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials:true,
    })
)
console.log(process.env.MONGO_URI);

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server connected at port  :${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.error("MongoDB connection failed!!!",error)
})

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminProductsRoutes);
app.use("/api/shop/products", shopProductsRoutes);

app.listen(PORT,()=>console.log(`server is now running on port :${PORT}`))
