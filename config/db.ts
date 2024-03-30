import mongoose from "mongoose";

const DB = process.env.DATABASE_URL as string;

async function main() {
  const connection = await mongoose.connect(DB);
  if(connection) {
    console.log('db connected');
  }
}
main().catch((err)=> {
  console.log(err);
});

export default main;