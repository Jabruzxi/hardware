// components/Header.js
const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-semibold">FM Hardware</h1>
          <nav>
            <ul className="flex justify-center space-x-6 mt-4">
              <li><a href="#home" className="text-white hover:bg-white hover:text-gray-800 py-2 px-4 rounded">Home</a></li>
              <li><a href="#shop" className="text-white hover:bg-white hover:text-gray-800 py-2 px-4 rounded">Shop</a></li>
              <li><a href="#about" className="text-white hover:bg-white hover:text-gray-800 py-2 px-4 rounded">About Us</a></li>
              <li><a href="#contact" className="text-white hover:bg-white hover:text-gray-800 py-2 px-4 rounded">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  