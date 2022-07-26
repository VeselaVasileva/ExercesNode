import cors from "cors";
import express from "express";
import db from "src/mongo";

const router = express.Router();
router.use(express.json());

router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

router.get("/rooms", async (req, res) => {
  //let rooms = [{ name: "room1" }, { name: "room2" }, { name: "room3" }];

  const rooms = await db.collection("rooms").find({}).toArray();
  res.json(rooms);
});

router.get("/:room", (req, res) => {
  let messages = [
    {
      id: "60264ea7-eefc-4d97-82a6-e73ad853e7dc",
      username: "anonymous",
      text: "hello wolrd",
      sendAt: "2022-07-26T07:29:30.658Z",
      room: "main",
    },
  ];
  res.json(messages);
});

export default router;
