import express from "express";
import {
  deleteUser,
  getUsers,
  insertUser,
  updateUsers,
} from "../models/user/UserModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //get all data from db and return to the client
    const data = await getUsers();
    res.json({
      status: "success",
      message: "here are the users",
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "user created successfully!!!",
        })
      : res.json({
          status: "error",
          message: "unable to create user :(",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    console.log(req.body);
    const filter = { _id };
    // const updateObj = { password };
    // const updatefName = { fName };

    const result = await updateUsers(filter, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully!!!",
        })
      : res.json({
          status: "error",
          message: "unable to update user :(",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    console.log(_id);
    const result = await deleteUser(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "user deleted successfully!!!",
        })
      : res.json({
          status: "error",
          message: "unable to delete user :(",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

export default router;
