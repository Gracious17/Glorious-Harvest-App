import { useState } from 'react';
import { ShoppingCart, User,  Menu, X,  } from 'lucide-react';
import vegetable from  '../assets/Vegetable.jpg'
import grain from  '../assets/grain.jpg'
import honey from  '../assets/Honey_collection.jpg'
import maria from  '../assets/maria_gonzalez.jpg'
import uche from  '../assets/uche_okafor.jpg'
import protein from  '../assets/protein_bar.jpg'






const GloriousHarvestDemo = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [accountBalance, setAccountBalance] = useState(5000);
  const [commissions, setCommissions] = useState(1250);
  const [networkSize, setNetworkSize] = useState(24);
  const [loginStatus, setLoginStatus] = useState(false);
  const [notification, setNotification] = useState(null);

  console.log('setNetwork',setNetworkSize,"setCommission",setCommissions);
  
  // Products data based on Glorious Harvest offerings
  const products = [
    { id: 1, name: 'Organic Vegetable Basket', price: 45.99, image: vegetable, category: 'Fresh Produce', description: 'Weekly selection of seasonal organic vegetables from local farmers' },
    { id: 2, name: 'Whole Grain Cereal Pack', price: 29.99, image: grain, category: 'Essential Staples', description: 'Nutrient-rich whole grain cereals, perfect for healthy breakfasts' },
    { id: 3, name: 'Protein Supplement Pack', price: 89.99, image: protein, category: 'Health Foods', description: 'High-quality protein supplements for nutrition and fitness' },
    { id: 4, name: 'Local Honey Collection', price: 35.50, image: honey, category: 'Specialty Foods', description: 'Locally sourced honey varieties with natural health benefits' }
  ];

  // Banking transactions data
  const transactions = [
    { id: 1, date: '2025-05-08', description: 'Direct Sales Commission', amount: 350, type: 'credit' },
    { id: 2, date: '2025-05-07', description: 'Network Bonus', amount: 185.47, type: 'credit' },
    { id: 3, date: '2025-05-05', description: 'Product Purchase', amount: 120, type: 'debit' },
    { id: 4, date: '2025-05-03', description: 'Storage Service Fee', amount: 45.99, type: 'debit' }
  ];

  // Team members (downline)
  const teamMembers = [
    { id: 1, name: 'Sarah Johnson', level: 'Silver', sales: 1250, joinDate: '2025-01-15' },
    { id: 2, name: 'Michael Chen', level: 'Bronze', sales: 850, joinDate: '2025-02-22' },
    { id: 3, name: 'Aisha Patel', level: 'Gold', sales: 3200, joinDate: '2024-11-05' },
    { id: 4, name: 'Carlos Rodriguez', level: 'Bronze', sales: 650, joinDate: '2025-03-10' }
  ];

  // Projects and partnerships
  const projects = [
    { id: 1, name: 'Community Garden Initiative', location: 'Urban Areas', participants: 120 },
    { id: 2, name: 'School Nutrition Program', location: 'Regional Schools', participants: 1500 },
    { id: 3, name: 'Farmer Training Workshop', location: 'Rural Communities', participants: 75 }
  ];

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    showNotification(`Added ${product.name} to cart`, 'success');
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    showNotification('Item removed from cart', 'info');
  };

  // Update cart quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showNotification('Your cart is empty', 'error');
      return;
    }
    if (accountBalance < cartTotal) {
      showNotification('Insufficient funds for purchase', 'error');
      return;
    }
    setAccountBalance(prev => prev - cartTotal);
    setCartItems([]);
    showNotification('Purchase successful! Products will be delivered soon.', 'success');
  };

  // Handle fund transfer
  const handleTransfer = (amount, type) => {
    if (amount <= 0) {
      showNotification('Please enter a valid amount', 'error');
      return;
    }
    if (type === 'withdraw' && accountBalance < amount) {
      showNotification('Insufficient funds for withdrawal', 'error');
      return;
    }
    if (type === 'withdraw') {
      setAccountBalance(prev => prev - amount);
      showNotification(`Successfully withdrew $${amount}`, 'success');
    } else {
      setAccountBalance(prev => prev + amount);
      showNotification(`Successfully deposited $${amount}`, 'success');
    }
  };

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle login/logout
  const toggleLogin = () => {
    setLoginStatus(!loginStatus);
    if (!loginStatus) {
      showNotification('Successfully logged in!', 'success');
    } else {
      showNotification('You have been logged out', 'info');
    }
  };

  // For fund transfer input
  const [transferAmount, setTransferAmount] = useState('');
  const [transferType, setTransferType] = useState('deposit');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-md shadow-md ${
          notification.type === 'success' ? 'bg-green-500' :
            notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`}>
          {notification.message}
        </div>
      )}

      {/* Header */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="font-bold text-xl">
                <img src="/Ceo.jpg" alt="Ceo "  className='rounded-full'  />
              </span>
            </div>
            <h1 className="text-2xl font-bold">Glorious Harvest</h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setActiveTab('home')}
              className={`hover:text-green-200 ${activeTab === 'home' ? 'font-bold border-b-2 border-white' : ''}`}
            >Home</button>
            <button
              onClick={() => setActiveTab('shop')}
              className={`hover:text-green-200 ${activeTab === 'shop' ? 'font-bold border-b-2 border-white' : ''}`}
            >Shop</button>
            <button
              onClick={() => setActiveTab('business')}
              className={`hover:text-green-200 ${activeTab === 'business' ? 'font-bold border-b-2 border-white' : ''}`}
            >Business Center</button>
            <button
              onClick={() => setActiveTab('banking')}
              className={`hover:text-green-200 ${activeTab === 'banking' ? 'font-bold border-b-2 border-white' : ''}`}
            >Financial Center</button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`hover:text-green-200 ${activeTab === 'projects' ? 'font-bold border-b-2 border-white' : ''}`}
            >Projects</button>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => setActiveTab('cart')} className="relative">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button onClick={toggleLogin} className="flex items-center space-x-1">
              <User size={24} />
              <span className="hidden md:inline">{loginStatus ? 'Logout' : 'Login'}</span>
            </button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-800 p-4">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className={`hover:text-green-200 text-left ${activeTab === 'home' ? 'font-bold' : ''}`}
              >Home</button>
              <button
                onClick={() => { setActiveTab('shop'); setMobileMenuOpen(false); }}
                className={`hover:text-green-200 text-left ${activeTab === 'shop' ? 'font-bold' : ''}`}
              >Shop</button>
              <button
                onClick={() => { setActiveTab('business'); setMobileMenuOpen(false); }}
                className={`hover:text-green-200 text-left ${activeTab === 'business' ? 'font-bold' : ''}`}
              >Business Center</button>
              <button
                onClick={() => { setActiveTab('banking'); setMobileMenuOpen(false); }}
                className={`hover:text-green-200 text-left ${activeTab === 'banking' ? 'font-bold' : ''}`}
              >Financial Center</button>
              <button
                onClick={() => { setActiveTab('projects'); setMobileMenuOpen(false); }}
                className={`hover:text-green-200 text-left ${activeTab === 'projects' ? 'font-bold' : ''}`}
              >Projects</button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 mt-6">
        {/* Home Page */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section */}
            <div className="bg-green-600 text-white rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Empowering Communities Through Food</h2>
              <p className="text-xl mb-6">Join Glorious Harvest to improve food security and create financial stability for you and your community.</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('shop')}
                  className="bg-white text-green-700 px-6 py-2 rounded-md font-semibold hover:bg-green-100"
                >Shop Products</button>
                <button
                  onClick={() => setActiveTab('business')}
                  className="bg-transparent border-2 border-white px-6 py-2 rounded-md font-semibold hover:bg-green-700"
                >Join Our Network</button>
              </div>
            </div>
            {/* Features */}
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-green-700">Food Security</h4>
                <p>Providing affordable, high-quality food products to enhance nutrition and food access for all communities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-green-700">Financial Empowerment</h4>
                <p>Creating sustainable income opportunities through our network marketing business model.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 text-green-700">Community Building</h4>
                <p>Fostering a culture of collaboration, growth, and shared success through partnerships and projects.</p>
              </div>
            </div>
            {/* Featured Products */}
            <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <p className="text-green-700 font-bold mt-2">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                  >Add to Cart</button>
                </div>
              ))}
            </div>
            {/* Testimonials */}
            <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full mr-4">
                    <img src={maria} alt="maria" className='rounded-full w-[100%] h-[100%] object-cover'  />
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Gonzalez</h4>
                    
                    <p className="text-sm text-gray-600">Network Partner since 2023</p>
                  </div>
                </div>
                <p>Joining Glorious Harvest changed my life. I&apos;ve built a steady income while providing healthy food to my community. The support system is incredible!</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full mr-4">
                     <img src={uche} alt="uche" className='rounded-full w-[100%] h-[100%] object-cover'  />
                  </div>
                  <div>
                    <h4 className="font-semibold">David Okafor</h4>
                    <p className="text-sm text-gray-600">Network Partner since 2024</p>
                  </div>
                </div>
                <p>I started as a customer and fell in love with the products. Now I run my own business with Glorious Harvest and have helped five farmers connect to better markets.</p>
              </div>
            </div>
          </div>
        )}

        {/* Shop Page */}
        {activeTab === 'shop' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Shop Our Products</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md flex" />
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <p className="text-green-700 font-bold mt-2">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                  >Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cart Page */}
        {activeTab === 'cart' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <table className="w-full mb-6">
                  <thead>
                    <tr>
                      <th className="text-left p-2">Product</th>
                      <th className="text-left p-2">Price</th>
                      <th className="text-left p-2">Quantity</th>
                      <th className="text-left p-2">Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td className="p-2">{item.name}</td>
                        <td className="p-2">${item.price.toFixed(2)}</td>
                        <td className="p-2">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 border rounded p-1"
                          />
                        </td>
                        <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
                        <td className="p-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:underline"
                          >Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-right mb-4 font-bold text-lg">
                  Cart Total: ${cartTotal.toFixed(2)}
                </div>
                <button
                  onClick={handleCheckout}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                >Checkout</button>
              </div>
            )}
          </div>
        )}

        {/* Business Center */}
        {activeTab === 'business' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Business Center</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Your Network</h4>
                <p>Team Members: <span className="font-bold">{networkSize}</span></p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Commissions</h4>
                <p>₦<span className="font-bold">{commissions}</span></p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-2">Sales</h4>
                <p>₦{teamMembers.reduce((sum, tm) => sum + tm.sales, 0)}</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Your Team</h3>
            <table className="w-full mb-8">
              <thead>
                <tr>
                  <th className="text-left p-2">Name</th>
                  <th className="text-left p-2">Level</th>
                  <th className="text-left p-2">Sales</th>
                  <th className="text-left p-2">Join Date</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map(member => (
                  <tr key={member.id}>
                    <td className="p-2">{member.name}</td>
                    <td className="p-2">{member.level}</td>
                    <td className="p-2">₦{member.sales}</td>
                    <td className="p-2">{member.joinDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Financial Center */}
        {activeTab === 'banking' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Financial Center</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h4 className="font-semibold text-lg mb-2">Account Balance</h4>
              <p className="text-green-700 font-bold text-2xl mb-4">${accountBalance.toFixed(2)}</p>
              <div className="flex gap-4 mb-2">
                <button
                  className={`px-4 py-2 rounded-md ${transferType === 'deposit' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setTransferType('deposit')}
                >Deposit</button>
                <button
                  className={`px-4 py-2 rounded-md ${transferType === 'withdraw' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setTransferType('withdraw')}
                >Withdraw</button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  placeholder="Amount"
                  value={transferAmount}
                  onChange={e => setTransferAmount(e.target.value)}
                  className="border rounded p-2 w-32"
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    handleTransfer(Number(transferAmount), transferType);
                    setTransferAmount('');
                  }}
                >Submit</button>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">Recent Transactions</h4>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Description</th>
                  <th className="text-left p-2">Amount</th>
                  <th className="text-left p-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(tx => (
                  <tr key={tx.id}>
                    <td className="p-2">{tx.date}</td>
                    <td className="p-2">{tx.description}</td>
                    <td className={`p-2 ${tx.type === 'credit' ? 'text-green-700' : 'text-red-600'}`}>
                      {tx.type === 'credit' ? '+' : '-'}${tx.amount.toFixed(2)}
                    </td>
                    <td className="p-2 capitalize">{tx.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Projects */}
        {activeTab === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Community Projects & Partnerships</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                  <p className="mb-1">Location: {project.location}</p>
                  <p>Participants: {project.participants}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default GloriousHarvestDemo;
