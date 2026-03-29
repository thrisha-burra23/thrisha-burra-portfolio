import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedis, SiPostman } from "react-icons/si";

const iconMap = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  Git: <FaGitAlt />,
  Redis: <SiRedis />,
  Postman: <SiPostman />,

};

const SkillBadge = ({ name }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-indigo-100 hover:text-indigo-600 transition">
      <span className="text-lg">{iconMap[name]}</span>
      {name}
    </div>
  );
};

export default SkillBadge;