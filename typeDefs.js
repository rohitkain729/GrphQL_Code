
export const  typeDefs = `

type Student{
rno:Int
name:String
add:String
}


type Query{
   getName:String
   getPlayers:[String]
   getStd:[Student]
}

type Mutation{
  saveUser:String
}

`