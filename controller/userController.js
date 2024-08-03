import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(409).json({
        message: "User Alredy Exist",
        data: userExist,
      });
    }
    const savedData = await User.create(req.body);
    res.status(201).json({
      message: "User data saved successfully",
      data: savedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving user data",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = await User.findByIdAndUpdate(userId, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure the update is valid according to the schema
    });

    if (!updatedData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User data updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user data",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedData = await User.findByIdAndDelete(userId);

    if (!deletedData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User data deleted successfully",
      data: deletedData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user data",
      error: error.message,
    });
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      message: "All user data retrieved successfully",
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user data",
      error: error.message,
    });
  }
};

export const findUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User data retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user data",
      error: error.message,
    });
  }
};
