// components/Hero.js
const Hero = () => {
    return (
      <section id="home" className="bg-cover bg-center text-white text-center py-20" style={{ backgroundImage: "url('hero-image.jpg')" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-4">Welcome to FM Hardware</h2>
          <p className="mb-4">Your trusted supplier for all your hardware needs. Quality tools and materials delivered to your doorstep.</p>
          <a href="#shop" className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-gray-800">Shop Now</a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  