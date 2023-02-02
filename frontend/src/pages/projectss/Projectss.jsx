import Project from "../project/Project";
import "./projectss.scss";
const Projectss = () => {
  const projects = [
    {
      index: 0,
      projectTitle: 'MLSC Website',
      projectDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeatut asperiores minima obcaecati. Molestias tenetur neque itaqueunde assumenda.',
    },
    {
      index: 1,
      projectTitle: 'AI Pathology',
      projectDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam culpa cum adipisci cupiditate, blanditiis expedita corporis quia odio, doloribus vel quasi ad animi molestiae soluta. Suscipit eaque culpa ut.",
    },
    {
      index: 2,
      projectTitle: 'sdfdsf',
      projectDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, sit eum, aliquid minima nesciunt fugiat tempore, earum repellat quas ipsam voluptas consequatur mollitia? Aliquam hic voluptates delectus doloremque vero. Nesciunt?",
    },
  ];
  return (
    <div className="projects d-flex flex-column justify-content-center align-items-center">
      {projects.map(project => (
        <Project project={project} key={project.index} />
      ))}
    </div>
  )
}
export default Projectss