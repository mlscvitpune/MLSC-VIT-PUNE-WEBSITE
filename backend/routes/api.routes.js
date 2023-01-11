import express from "express";
import eventRoutes from "./events.routes.js";
import projectRoutes from "./project.routes.js";
import teamRoutes from "./teams.routes.js";
import blogRoutes from "./blogs.routes.js";

const router = express.Router();

router.use("/events", eventRoutes);
router.use("/projects", projectRoutes);
router.use("/teams", teamRoutes);
router.use("/blogs", blogRoutes);

export default router;
