import { User } from "../model/User.model.js";

export const userLogin = async (req, res) => {
    try {
      const { username, email } = req.body;
      if (!username && !email) {
        return res
          .status(statusCode.badRequest)
          .json({ message: "please enter required field", status: false });
      }
      const userDetails = await User.findOne({
        $or: [{ email: email }, { username: username }],
      });
  
      if (!userDetails) {
        const user = await User.create({ email: email, username: username });
        return res
          .status(201)
          .json({ status: true, message: "user cretated", data: user });
      } else {
        if (userDetails.email === email && userDetails.username === username) {
          return res.status(200).json({
            status: true,
            message: "welcome  " + userDetails.username,
            data: userDetails,
          });
        } else {
          return res.status(400).json({
            status: false,
            message: "user name and email are not matched",
          });
        }
      }
    } catch (error) {
      res.status(500).json({ message: error.message, error: error });
    }
  };

//   Get User
  export const getUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      if (!userId) {
        return res
          .status(statusCode.badRequest)
          .json({ message: "User not Found", status: false });
      } else {
        const user = await User.findById(userId);
        return res.status(200).json({ status: true, data: user });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message, status: false });
    }
  };

//   Update User Details
export const updateUser = async(req,res) => {
try {
    const userId = req.params.userId
    const data = req.body
    if(!data){
        return res
        .status(404)
        .json({ status: false, message: "All Fields Required" });
    }

    
    const UpdatedUser = await User.findByIdAndUpdate(
        userId,
        data,
        { new: true }
      );
  
      return res.status(201).json({ status: "user updated", data: UpdatedUser });
} catch (error) {
    return res.status(500).json({ message: error.message, status: false });
}
}