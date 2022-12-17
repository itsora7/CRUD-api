import UserSchema from "./UserSchema.js";

//create
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//read
export const getUsers = () => {
  return UserSchema.find();
};
//update filter, updateObj must be an object data type
export const updateUsers = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj, {
    new: true,
  }); //{ new: true } returns data after updating the dabase
};
//delete, filter must be an object data type
// export const deleteUser = (filter) => {
//   return UserSchema.findByIdAndDelete(filter);
// };

// delete user by _id
export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
