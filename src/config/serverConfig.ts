// import dotenv from 'dotenv';

//set ENV to development by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// const envFound = dotenv.config();

export const config = {

    port: process.env.PORT || 3000, 
};