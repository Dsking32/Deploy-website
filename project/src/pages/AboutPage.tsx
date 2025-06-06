import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import { FaBullseye, FaEye } from 'react-icons/fa'; // Using react-icons for mission/vision

export default function AboutPage() {
  return (
    <div className="pt-32 bg-gradient-to-br from-yellow-400 to-yellow-100 min-h-screen">
      <Container>
        <SectionHeading
          title="About Venix"
          subtitle="Building the future of banking with innovation and trust"
          centered
          className="text-primary-900"
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
          {/* Sidebar Visual / Image */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div
              className="w-full max-w-md h-96 rounded-xl shadow-xl bg-gradient-to-tr from-yellow-400 to-yellow-500
                         flex items-center justify-center motion-safe:animate-fadeIn"
            >
              <img
                src="/images/logo.png"
                alt="Venix Logo"
                className="max-h-60 max-w-xs object-contain mx-auto"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-1/2 space-y-12 text-yellow-900">
            {/* Our Company */}
            <section className="motion-safe:animate-fadeInUp">
              <h2 className="text-5xl font-extrabold mb-6 border-b-4 border-yellow-500 inline-block pb-2 tracking-wide">
                Our Company
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We are a technology and network infrastructure company, specializing in developing innovative mobile value-added services (mVAS) and technology platforms for diverse industries, including gaming, telecommunications, finance, media, music, entertainment, and more. Our cutting-edge solutions empower businesses to succeed in the digital ecosystem.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                At Venix Partners Limited, we harness the power of technology to deliver innovative mobile VAS solutions, cutting-edge telecom services, customized digital solutions, and reliable information services. Our team of experts is dedicated to providing exceptional service delivery through various platforms.
              </p>
              <div className="text-xl font-semibold">
                <p>Paul Omugbe</p>
                <p className="text-gray-600 text-sm italic mt-1">MD / CEO of Venix</p>
              </div>
            </section>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-yellow-500 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 motion-safe:animate-fadeInUp">
                <div className="flex items-center gap-4 mb-4 text-yellow-600">
                  <FaBullseye size={28} />
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Our mission is to empower businesses and individuals by providing innovative service delivery and cutting-edge digital solutions through mobile VAS. We strive to deliver exceptional service through various platforms, fostering growth and innovation in the digital landscape.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-yellow-500 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 motion-safe:animate-fadeInUp delay-100">
                <div className="flex items-center gap-4 mb-4 text-yellow-600">
                  <FaEye size={28} />
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  Our vision is to become the premier innovative mobile value-added service provider, transforming the digital landscape by connecting 100 million individuals and businesses and empowering them to achieve their full potential through our cutting-edge technology solutions and exceptional service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}