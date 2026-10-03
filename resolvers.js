import mongo from "mongodb";
import getDB from "./utils/DBconnection.js";

export const resolvers = {
  Query: {
    loginAdmin: async (parent, args, context, info) => {
      try {
        const db = await getDB();
        const collection = db.collection("admin");
        const users = await collection.findOne(args?.data);
        console.log(users);
        return users;
      } catch (err) {
        console.log(err);
      }
    },

     getVendors: async (parent, args, context, info) => {
      try {
        const db = await getDB();
        const collection = db.collection("vendors");
        const vendorsData = await collection.find().toArray();
        return vendorsData;
      } catch (err) {
        console.log(err.message);
        return err.message;
      }
    },
   
  },

  Mutation: {
    registerVendor: async (parent, args, context, info) => {
      try {
        const db = await getDB();
        const vendor = db.collection("vendors");
        const result = await vendor.insertOne(args?.data);
        return result;
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
