import SectionHeading from '../components/ui/SectionHeading';
import { FaMobileAlt, FaGamepad, FaMusic, FaNewspaper, FaSms, FaNetworkWired, FaRobot, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaMobileAlt className="text-yellow-500 h-7 w-7" />,
    title: "Digital Platforms",
    description: "Innovative digital products for payments, messaging, analytics, and more.",
  },
  {
    icon: <FaGamepad className="text-yellow-500 h-7 w-7" />,
    title: "Mobile Gaming Services",
    description: "Solutions for mobile game development, publishing, and distribution, offering gamers access to a variety of mobile games.",
  },
  {
    icon: <FaMusic className="text-yellow-500 h-7 w-7" />,
    title: "Entertainment Services",
    description: "Music and video content platforms designed to deliver quality entertainment to users.",
  },
  {
    icon: <FaNewspaper className="text-yellow-500 h-7 w-7" />,
    title: "Digital Media Services",
    description: "Content creation, distribution, and monetization services to help media companies expand their reach.",
  },
  {
    icon: <FaChartLine className="text-yellow-500 h-7 w-7" />,
    title: "Information Services",
    description: "Access to news updates, financial data, and relevant content to keep users informed.",
  },
  {
    icon: <FaSms className="text-yellow-500 h-7 w-7" />,
    title: "Bulk SMS Aggregator Platform",
    description: "Cost-effective and efficient bulk messaging services for businesses and organizations.",
  },
  {
    icon: <FaNetworkWired className="text-yellow-500 h-7 w-7" />,
    title: "Telecommunication Network Services",
    description: "Infrastructure, connectivity, and managed telecom services tailored for operators and enterprises.",
  },
  {
    icon: <FaRobot className="text-yellow-500 h-7 w-7" />,
    title: "Innovative Service Delivery",
    description: "Leverage AI, IoT, and cloud technologies to deliver exceptional customer experiences.",
  },
  {
    icon: <FaMobileAlt className="text-yellow-500 h-7 w-7" />,
    title: "Cutting-Edge mVAS Solutions",
    description: "Customized mobile value-added services that enhance user engagement and drive business growth.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-yellow-400 to-yellow-100">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="Discover the range of services we offer to help you achieve your financial and digital goals."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}