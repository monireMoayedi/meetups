import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://moon:monire123@cluster0.qiqkl.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.insertOne(req.body);
    client.close();
    res.status(201).json({ message: "done" });
  }
}

//   // return (
//   //   <div>

//   //   </div>
//   // )
// }

// import { MongoClient } from "mongodb";

// // /api/new-meetup
// // POST /api/new-meetup

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     // "mongodb+srv://moon:zxcvbnm@cluster0.npvm2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//     const client = await MongoClient.connect(
//       "mongodb+srv://moon:monire123@cluster0.qiqkl.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     const db = client.db();

//     const meetupsCollection = db.collection("meetups");

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "Meetup inserted!" });
//   }
// }

// export default handler;
