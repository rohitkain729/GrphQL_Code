export const resolvers = {
  Query: {
    getName: () => {
      return "rohit";
    },
    getPlayers:()=>{
      return ["kholi","rahul","abhishek","rohit"];
    },
    getStd:()=>{
      return [{rno:1,name:"s1",add:"gwl"},
        {rno:2,name:"s2",add:"Hyd"},
        {rno:3,name:"s3",add:"Banglore"},
        {rno:4,name:"s4",add:"Bhopal"}
      ]
    }
  },
  Mutation: {
    saveUser: () => {
      return "Success  Saving";
    },
  },
};
