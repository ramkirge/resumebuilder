import { FaRegFileAlt, FaRobot, FaMedal, FaUserTie } from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { PiSmileyFill } from "react-icons/pi";

const features = [
  {
    icon: <FaRegFileAlt className="text-yellow-500 text-3xl" />,
    title: "A better resume in minutes",
    description:
      "Replace your old resume in a few simple clicks. Our builder gives recruiters what they want.",
  },
  {
    icon: <MdCheckCircleOutline className="text-orange-500 text-3xl" />,
    title: "ATS-friendly templates",
    description:
      "Tick every box and make sure your resume is never filtered out by the hiring software.",
  },
  {
    icon: <BsPencilSquare className="text-pink-500 text-3xl" />,
    title: "Pre-written content",
    description:
      "Stop worrying about words. Save time by adding pre-approved, tested content from certified writers.",
  },
  {
    icon: <FaRobot className="text-blue-500 text-3xl" />,
    title: "Easy with AI",
    description:
      "Quickly generate formal phrases and summaries. Sound professional, faster.",
  },
  {
    icon: <FaMedal className="text-purple-500 text-3xl" />,
    title: "Beat the competition",
    description:
      "Our tested resume templates are designed to make you more attractive to recruiters.",
  },
  {
    icon: <PiSmileyFill className="text-yellow-400 text-3xl" />,
    title: "Get paid more",
    description:
      "A higher salary begins with a strong resume. Our salary analyzer tells you if your job offer is competitive (or not).",
  },
];

function Feature() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Get hired fast with a powerful resume
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-4 text-left">
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-blue-700 relative  top-20 w-fit content-center left-2/5 text-2xl   border-blue-800 hover:bg-blue-800 border-4 rounded-2xl px-8 p-4 text-white'>
            <a className='hover'>  <button>Get Started Now</button></a> 
          </div>
      </div>
    </section>
  );
}
export default Feature