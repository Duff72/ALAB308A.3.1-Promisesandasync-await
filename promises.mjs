// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";
let test = [];

async function getUserData(id) {
  let result = [];
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  try {
    const database = await central(id);
    const userInfo1 = await dbs[database](id);
    const userInfo2 = await vault(id);
    const userData = {
      ...userInfo1,
      ...userInfo2,
    };
    return console.log(userData);
  } catch {
    console.log("error getting user data");
  }
}

getUserData(1);
