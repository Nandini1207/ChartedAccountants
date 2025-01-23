import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
<section
  className="relative flex items-center justify-center h-[80vh] bg-cover bg-center text-white rounded-lg overflow-hidden m-5"
  style={{
    backgroundImage: `url('/banner.jpg')`, // Ensure to replace this path with the actual path to the image
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
    <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight text-teal-100 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
      Empowering Your Financial Future with Expert Chartered Accountants
    </h1>
    <p className="mt-4 text-lg sm:text-xl text-teal-200 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
      Accounting Wiz connects you with certified professionals to ensure your business and financial matters are in expert hands.
    </p>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-teal-800">Why Choose Accounting Wiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              title: "Expert CAs Only",
              text: "Our Chartered Accountants are verified, highly qualified, and experts in various fields of accounting.",
              icon: "📈",
            },
            {
              title: "Personalized Services",
              text: "Find the perfect CA who fits your specific needs for tax planning, auditing, and more.",
              icon: "🔍",
            },
            {
              title: "Data Security Guaranteed",
              text: "We ensure the highest levels of security to protect your sensitive financial information.",
              icon: "🔒",
            }].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-xl hover:scale-105 transform transition-transform duration-300 hover:bg-teal-50 animate__animated animate__fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="text-4xl text-teal-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-teal-900 text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-teal-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              name: "Michael Turner",
              feedback: "Accounting Wiz helped me find a great CA to handle my tax planning. Highly recommend their services!",
            },
            {
              name: "Sarah White",
              feedback: "The platform is super easy to use and the CAs are all very knowledgeable and professional.",
            },
            {
              name: "Raj Singh",
              feedback: "An excellent service that matched me with the perfect Chartered Accountant for my business.",
            }].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-xl hover:scale-105 transform transition-transform duration-300 hover:bg-teal-50 animate__animated animate__fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.feedback}"
                </p>
                <h4 className="font-semibold text-teal-700">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-teal-800">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              name: "Sophia Bennett",
              role: "Founder & CEO",
              image: "/t1.jpg",
              description: "A visionary leader passionate about leveraging tech to empower accounting professionals.",
            },
            {
              name: "Ethan Carter",
              role: "Head of Technology",
              image: "/t2.jpg",
              description: "Technology strategist focused on creating seamless digital experiences for clients.",
            },
            {
              name: "Olivia Thompson",
              role: "Chief Operations Officer",
              image: "/t3.jpg",
              description: "Ensures smooth and efficient operational processes, optimizing customer satisfaction.",
            }].map((teamMember, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative overflow-hidden rounded-full w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-4 group">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-semibold text-xl text-teal-900 text-center mb-2">
                  {teamMember.name}
                </h3>
                <p className="text-teal-700 text-center">{teamMember.role}</p>
                <p className="text-gray-600 text-center mt-2">{teamMember.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto text-center px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Stay Informed with Accounting Wiz</h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter to receive updates, tips, and insights from the world of accounting.
          </p>
          <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded-lg border border-teal-400 text-black sm:w-80 w-full"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
