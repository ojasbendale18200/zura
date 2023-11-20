import { Project } from "../model/Project.model.js";

// Create Project
export const createProject = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { projectName } = req.body;

    if (!projectName) {
      return res
        .status(404)
        .json({ message: "Project name is required", status: false });
    }

    const data = await Project.create({
      projectName: projectName,
      user: userId,
    });

    if (data) {
      return res.status(201).json({ status: true, data: data });
    } else {
      return res.status(400).json({ status: false, message: "error" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: error, message: error.message });
  }
};

// Get All Projects

export const getProjects = async (req, res) => {
  try {
    let userId = req.params.userId;
    const projects = await Project.find({ user: userId }).populate("user");

    return res.status(200).json({ status: true, data: projects });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};
