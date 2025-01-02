// components/Shop.js
const Shop = () => {
    return (
      <section id="shop" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="product-grid">
            {/* Dynamic product items will be rendered here */}
            <div className="border p-4 bg-white text-center">
              <img src="product-image.jpg" alt="Product" className="w-full h-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product Name</h3>
              <p className="text-gray-600">$99.99</p>
            </div>
            {/* Add more products here */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Shop;
  