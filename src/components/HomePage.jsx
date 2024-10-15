// Home.js

const HomePage = () => {
  return (
    <section className="hero bg-cover bg-center h-[1200px]" style={{ backgroundImage: "url('https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold">Welcome to Our Education Institute</h1>
          <p className="text-white text-lg mt-2">Empowering Minds Through Quality Education</p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">Explore Our Courses</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
