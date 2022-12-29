import Project from "../models/project.model.js";

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({message: "200", projects});
  } catch (error) {
    res.status(404).json({ message: "404", data: error.message });
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({_id: id});
    if (!project)
        return res.status(400).json({ message: "400", data: "Bad Request" });
    res.status(200).json({message: "200", project});
  } catch(error) {
    res.status(404).json({ message: "404", data: error.message });
  }
};

const createProject = async (req, res) => {
  const project = req.body;
  if (!project)
    return res.status(400).json({ message: "400", data: "Empty Request" });
  try {
    const newProject = new Project({
      name: project.name,
      description: project.description,
      thumbnail: project.thumbnail,
      images: project.images,
      liveLink: project.liveLink,
      githubRepo: project.githubRepo ? project.githubRepo : "",
    });
    await newProject.save();
    res.status(200).json({ message: "200", newProject });
  } catch (error) {
    res.status(404).json({ message: "404", data: error.message });
  }
};

const updateProject = async (req, res) => {
  const project = req.body;
  if (!project)
    return res.status(400).json({ message: "400", data: "Empty Request" });
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      {
        name: project.name,
        description: project.description,
        thumbnail: project.thumbnail,
        images: project.images,
        liveLink: project.liveLink,
        githubRepo: project.githubRepo ? project.githubRepo : "",
      },
      { new: true }
    );
    if (!updatedProject)
        return res.status(400).json({ message: "400", data: "Incorrect Request" });
    res.status(200).json({ message: "200", updatedProject });
  } catch (error) {
    res.status(404).json({ message: "404", data: error.message });
  }
};

const deleteProject = async (req, res) => {
  const project = req.body;
  if (!project)
    return res.status(400).json({ message: "400", data: "Empty Request" });
  try {
    const deletedProject = await Project.findByIdAndDelete(project._id);
    res.status(200).json({ message: "200", deletedProject });
  } catch (error) {
    res.status(404).json({ message: "404", data: error.message });
  }
};

export { getProjects, getProject, createProject, updateProject, deleteProject };
