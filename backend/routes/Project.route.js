import express from "express";
import { createProject, getProjects } from "../controllers/Project.controller.js";

const projectRouter = express.Router();

projectRouter.get("/:userId", getProjects);

projectRouter.post("/create/:userId", createProject);

export default projectRouter;
