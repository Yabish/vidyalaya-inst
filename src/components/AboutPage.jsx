const About = () => {
  return (
    <div className="">
      {/* Why Choose Us Section */}
      <section className="padding bg-gray-100 animate-fadeIn">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 text-3xl">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3 className="text-xl font-bold ml-2">Qualified Faculty</h3>
              </div>
              <p>
                Learn from industry experts and experienced educators dedicated
                to your success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 text-3xl">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3 className="text-xl font-bold ml-2">
                  State-of-the-Art Facilities
                </h3>
              </div>
              <p>
                Access to modern classrooms, labs, and technology to enhance
                your learning experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 text-3xl">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3 className="text-xl font-bold ml-2">
                  Personalized Attention
                </h3>
              </div>
              <p>
                Small class sizes ensure you receive the attention and support
                you need to excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="padding animate-fadeIn">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Course 1</h3>
              <p>
                A brief description of Course 1 that highlights its key features
                and benefits.
              </p>
            </div>
            <div className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Course 2</h3>
              <p>
                A brief description of Course 2 that highlights its key features
                and benefits.
              </p>
            </div>
            <div className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Course 3</h3>
              <p>
                A brief description of Course 3 that highlights its key features
                and benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="padding bg-gray-100 animate-fadeIn">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            What Our Students Say
          </h2>
          <div className="flex flex-wrap justify-center">
            <blockquote className="border-l-4 border-blue-500 pl-4 mb-6 mx-4 max-w-sm bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
              <p className="italic">
                "This institute changed my life! The faculty is amazing and the
                support is unbeatable."
              </p>
              <cite className="block mt-2 text-right font-semibold">
                - Student A
              </cite>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 mb-6 mx-4 max-w-sm bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
              <p className="italic">
                "The courses are well-structured and really helped me understand
                the concepts."
              </p>
              <cite className="block mt-2 text-right font-semibold">
                - Student B
              </cite>
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 mb-6 mx-4 max-w-sm bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
              <p className="italic">
                "I gained the skills I needed to succeed in my career, thanks to
                the hands-on approach."
              </p>
              <cite className="block mt-2 text-right font-semibold">
                - Student C
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Advantage Section */}

      <section className="padding w-full py-12 bg-white animate-fadeIn">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-600">Our Advantages</h2>
            <p className="mt-4 text-lg text-gray-700">
              Why students choose us for their education and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Expert Faculty</h3>
              <p>
                Learn from highly qualified and experienced educators dedicated
                to your academic success.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Interactive Learning</h3>
              <p>
                Benefit from engaging and interactive learning sessions that
                make difficult concepts easy to grasp.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-book-reader"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Comprehensive Study Material
              </h3>
              <p>
                Access our curated, in-depth study materials designed to
                complement classroom learning.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-medal"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Proven Success Record</h3>
              <p>
                Join a community of students who have achieved academic
                excellence and success in their careers.
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Global Exposure</h3>
              <p>
                Our curriculum includes global perspectives and prepares
                students for international opportunities.
              </p>
            </div>

            {/* Advantage 6 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-user-check"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Personalized Mentorship
              </h3>
              <p>
                Receive personalized attention and mentorship from faculty to
                help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
