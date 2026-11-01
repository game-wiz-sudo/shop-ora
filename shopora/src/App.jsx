import { useEffect, useRef, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ChevronRight,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
  Plus,
  Minus,
} from "lucide-react";
import "./App.css";
import "./shopora-modal.css";

const categories = [
  { name: "Phones & Tablets", icon: "📱" },
  { name: "Electronics", icon: "🎧" },
  { name: "Fashion", icon: "👟" },
  { name: "Home & Living", icon: "🛋️" },
  { name: "Beauty", icon: "✨" },
  { name: "Sports", icon: "⚽" },
  { name: "Groceries", icon: "🛒" },
  { name: "More", icon: "•••" },
];

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 28500,
    oldPrice: 42000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    badge: "-32%",
  },
  {
    id: 2,
    name: "Smart Watch Series 8",
    category: "Electronics",
    price: 39500,
    oldPrice: 55000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    badge: "-28%",
  },
  {
    id: 3,
    name: "Everyday Running Sneakers",
    category: "Fashion",
    price: 32000,
    oldPrice: 45000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
    badge: "-29%",
  },
  {
    id: 4,
    name: "Minimalist Table Lamp",
    category: "Home & Living",
    price: 18500,
    oldPrice: 25000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1508028209469-933de69c0f1e?auto=format&fit=crop&w=700&q=80",
    badge: "-26%",
  },
  {
    id: 5,
    name: "Premium Skincare Set",
    category: "Beauty",
    price: 24000,
    oldPrice: 30000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
    badge: "-20%",
  },
  {
    id: 6,
    name: "Portable Power Bank 20000mAh",
    category: "Phones & Tablets",
    price: 22000,
    oldPrice: 32000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=85",
    badge: "-31%",
  },
  {
    id: 7,
    name: "Classic Everyday Backpack",
    category: "Fashion",
    price: 27000,
    oldPrice: 36000,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
    badge: "-25%",
  },
  {
    id: 8,
    name: "Insulated Stainless Water Bottle",
    category: "Sports",
    price: 12500,
    oldPrice: 18000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80",
    badge: "-30%",
  },
  {
    id: 9,
    name: "Android Smartphone 128GB",
    category: "Phones & Tablets",
    price: 185000,
    oldPrice: 220000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    badge: "-16%",
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    category: "Phones & Tablets",
    price: 19500,
    oldPrice: 28000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
    badge: "-30%",
  },
  {
    id: 11,
    name: "Tablet with Protective Case",
    category: "Phones & Tablets",
    price: 145000,
    oldPrice: 175000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=700&q=80",
    badge: "-17%",
  },
  {
    id: 12,
    name: "USB-C Fast Charger",
    category: "Phones & Tablets",
    price: 9500,
    oldPrice: 14000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=700&q=80",
    badge: "-32%",
  },
  {
    id: 13,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 26500,
    oldPrice: 35000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
    badge: "-24%",
  },
  {
    id: 14,
    name: "1080p Webcam",
    category: "Electronics",
    price: 32500,
    oldPrice: 42000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=700&q=80",
    badge: "-23%",
  },
  {
    id: 15,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 48500,
    oldPrice: 60000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85",
    badge: "-19%",
  },
  {
    id: 16,
    name: "Laptop Stand",
    category: "Electronics",
    price: 18000,
    oldPrice: 25000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=80",
    badge: "-28%",
  },
  {
    id: 17,
    name: "Men's Casual T-Shirt",
    category: "Fashion",
    price: 8500,
    oldPrice: 12000,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    badge: "-29%",
  },
  {
    id: 18,
    name: "Women's Everyday Handbag",
    category: "Fashion",
    price: 29500,
    oldPrice: 40000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
    badge: "-26%",
  },
  {
    id: 19,
    name: "Classic Denim Jeans",
    category: "Fashion",
    price: 22000,
    oldPrice: 30000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    badge: "-27%",
  },
  {
    id: 20,
    name: "Unisex Casual Slides",
    category: "Fashion",
    price: 10500,
    oldPrice: 15000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=80",
    badge: "-30%",
  },
  {
    id: 21,
    name: "Decorative Throw Pillow Set",
    category: "Home & Living",
    price: 16500,
    oldPrice: 22000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
    badge: "-25%",
  },
  {
    id: 22,
    name: "Non-stick Cookware Set",
    category: "Home & Living",
    price: 58500,
    oldPrice: 75000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80",
    badge: "-22%",
  },
  {
    id: 23,
    name: "Cotton Bedsheet Set",
    category: "Home & Living",
    price: 27500,
    oldPrice: 36000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80",
    badge: "-24%",
  },
  {
    id: 24,
    name: "Ceramic Dinnerware Set",
    category: "Home & Living",
    price: 34500,
    oldPrice: 45000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=700&q=80",
    badge: "-23%",
  },
  {
    id: 25,
    name: "Daily Moisturizer",
    category: "Beauty",
    price: 12500,
    oldPrice: 16000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
    badge: "-22%",
  },
  {
    id: 26,
    name: "Perfume Eau de Parfum",
    category: "Beauty",
    price: 32000,
    oldPrice: 42000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
    badge: "-24%",
  },
  {
    id: 27,
    name: "Hair Care Essentials Kit",
    category: "Beauty",
    price: 18500,
    oldPrice: 25000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
    badge: "-26%",
  },
  {
    id: 28,
    name: "Makeup Brush Set",
    category: "Beauty",
    price: 14500,
    oldPrice: 20000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=700&q=80",
    badge: "-28%",
  },
  {
    id: 29,
    name: "Yoga Mat",
    category: "Sports",
    price: 15500,
    oldPrice: 22000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=700&q=80",
    badge: "-30%",
  },
  {
    id: 30,
    name: "Adjustable Dumbbell Pair",
    category: "Sports",
    price: 65000,
    oldPrice: 80000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
    badge: "-19%",
  },
  {
    id: 31,
    name: "Football Training Ball",
    category: "Sports",
    price: 18000,
    oldPrice: 25000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=85",
    badge: "-28%",
  },
  {
    id: 32,
    name: "Resistance Bands Set",
    category: "Sports",
    price: 12000,
    oldPrice: 17000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=700&q=80",
    badge: "-29%",
  },
  {
    id: 33,
    name: "Rice 5kg",
    category: "Groceries",
    price: 14500,
    oldPrice: 17000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    badge: "-15%",
  },
  {
    id: 34,
    name: "Cooking Oil 2L",
    category: "Groceries",
    price: 9800,
    oldPrice: 12000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80",
    badge: "-18%",
  },
  {
    id: 35,
    name: "Breakfast Cereal Pack",
    category: "Groceries",
    price: 6500,
    oldPrice: 8000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    badge: "-19%",
  },
  {
    id: 36,
    name: "Coffee and Tea Selection",
    category: "Groceries",
    price: 8500,
    oldPrice: 11000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=700&q=80",
    badge: "-23%",
  },
];

const formatPrice = (price) =>
  `₦${price.toLocaleString("en-NG")}`;

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shopora-cart")) || [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shopora-favorites")) || [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem("shopora-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shopora-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
        setCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesFavorites = !showFavoritesOnly || favorites.includes(product.id);
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under20" && product.price < 20000) ||
        (priceFilter === "20to40" && product.price >= 20000 && product.price <= 40000) ||
        (priceFilter === "over40" && product.price > 40000);
      return matchesSearch && matchesCategory && matchesFavorites && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} added to your cart`);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 3200);
  };

  useEffect(() => () => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
  }, []);

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <div className="app">
      {toast && (
        <div className="shopora-toast" role="status" aria-live="polite">
          <span className="shopora-toast-check">✓</span>
          <span>{toast}</span>
          <button type="button" onClick={() => { setToast(null); setCartOpen(true); }}>View cart</button>
          <button type="button" className="shopora-toast-close" aria-label="Dismiss notification" onClick={() => setToast(null)}><X size={16} /></button>
        </div>
      )}
      <div className="top-strip">
        <span>Shop smart. Live better.</span>
        <span className="top-strip-right">Delivering across Nigeria</span>
      </div>

      <header className="header">
        <div className="header-main">
          <button
            className="icon-button mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <a className="logo" href="#">
            shop<span>ora</span>
            <i>.</i>
          </a>

          <div className="search-bar">
            <Search size={19} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for products, brands and more..."
            />
            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="header-actions">
            <button
              type="button"
              className={`header-action favorites-header-action ${showFavoritesOnly ? "active" : ""}`}
              onClick={() => { setShowFavoritesOnly((value) => !value); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
              aria-label="Toggle favorites filter"
              title="Favorites"
            >
              <Heart size={20} fill={showFavoritesOnly ? "currentColor" : "none"} />
              <span>Favorites</span>
            </button>
            <button
              type="button"
              className="cart-action-modern"
              onClick={() => setCartOpen(true)}
              aria-label={`Open cart, ${cartCount} items`}
            >
              <span className="cart-action-icon">
                <ShoppingCart size={20} strokeWidth={1.9} />
                <span className="cart-count-modern">{cartCount}</span>
              </span>
              <span className="cart-action-label">
                <small>Your bag</small>
                <strong>Cart</strong>
              </span>
            </button>
          </div>
        </div>

        <nav className={`category-nav ${mobileMenuOpen ? "open" : ""}`}>
          <button
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => {
              setActiveCategory("All");
              setMobileMenuOpen(false);
            }}
          >
            All Products
          </button>

          {categories.slice(0, 7).map((category) => (
            <button
              key={category.name}
              className={activeCategory === category.name ? "active" : ""}
              onClick={() => {
                setActiveCategory(category.name);
                setMobileMenuOpen(false);
              }}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="hero-eyebrow">THE EVERYDAY STORE</span>
            <h1>
              Good finds.
              <br />
              <span>Better prices.</span>
            </h1>
            <p>
              Discover the things you love, from everyday essentials to
              must-have gadgets.
            </p>
            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("products")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop collection <ChevronRight size={18} />
            </button>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85"
              alt="Shopping bags and gifts"
            />
            <div className="hero-floating-card">
              <span>✨</span>
              <div>
                <strong>Something for everyone</strong>
                <small>Explore our latest finds</small>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div>
            <Truck />
            <span>
              <strong>Convenient delivery</strong>
              <small>To your doorstep</small>
            </span>
          </div>
          <div>
            <ShieldCheck />
            <span>
              <strong>Shop with confidence</strong>
              <small>Quality picks</small>
            </span>
          </div>
          <div>
            <Headphones />
            <span>
              <strong>Here to help</strong>
              <small>Friendly support</small>
            </span>
          </div>
        </section>

        <section className="category-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">EXPLORE</span>
              <h2>Shop by category</h2>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                key={category.name}
                className="category-card"
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="category-emoji">{category.icon}</span>
                <span>{category.name}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading products-heading">
            <div>
              <span className="section-eyebrow">HANDPICKED FOR YOU</span>
              <h2>{activeCategory === "All" ? "Popular right now" : activeCategory}</h2>
            </div>
            <div className="product-toolbar">
              <span className="product-count">{filteredProducts.length} products</span>
              <select aria-label="Filter by price" value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)}>
                <option value="all">All prices</option>
                <option value="under20">Under ₦20,000</option>
                <option value="20to40">₦20,000–₦40,000</option>
                <option value="over40">Above ₦40,000</option>
              </select>
              <select aria-label="Sort products" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-state">
              <Search size={32} />
              <h3>No products found</h3>
              <p>Try another search or category.</p>
              <button
                className="secondary-button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article
                  className="product-card"
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") setSelectedProduct(product);
                  }}
                >
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    <span className="sale-badge">{product.badge}</span>
                    <button
                      className={`favorite-button ${
                        favorites.includes(product.id) ? "favorited" : ""
                      }`}
                      onClick={(event) => { event.stopPropagation(); toggleFavorite(product.id); }}
                      aria-label="Toggle favorite"
                    >
                      <Heart
                        size={18}
                        fill={
                          favorites.includes(product.id) ? "currentColor" : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <div className="rating">
                      <Star size={14} fill="currentColor" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="price-row">
                      <strong>{formatPrice(product.price)}</strong>
                      <del>{formatPrice(product.oldPrice)}</del>
                    </div>
                    <button
                      className="add-to-cart"
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        addToCart(product);
                      }}
                    >
                      <Plus size={17} /> Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <a className="support-fab" href="#support" aria-label="Customer support">
        <Headphones size={20} /><span>Help</span>
      </a>

      <footer className="footer">
        <div className="footer-main">
          <a className="logo footer-logo" href="#">
            shop<span>ora</span>
            <i>.</i>
          </a>
          <p>Your everyday store for good finds and better prices.</p>
          <div className="footer-links">
            <a href="#products">Shop</a>
            <a href="#products">Popular products</a>
            <a href="#products">Categories</a>
          </div>
          <div className="shop-trust-grid">
            <div><Truck size={19} /><span><strong>Delivery across Nigeria</strong><small>Delivery fees confirmed at checkout</small></span></div>
            <div><ShieldCheck size={19} /><span><strong>Shopping with confidence</strong><small>Contact us for returns and order help</small></span></div>
            <div id="support"><Headphones size={19} /><span><strong>Customer support</strong><small>We’re here to help with your order</small></span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Shopora. All rights reserved.</span>
          <span>Built by Joseph</span>
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <section
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.name}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="product-modal-close icon-button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              <X />
            </button>
            <div className="product-modal-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <span className="sale-badge">{selectedProduct.badge}</span>
            </div>
            <div className="product-modal-content">
              <span className="product-category">{selectedProduct.category}</span>
              <h2>{selectedProduct.name}</h2>
              <div className="rating">
                <Star size={15} fill="currentColor" />
                <span>{selectedProduct.rating} customer rating</span>
              </div>
              <div className="product-modal-price">
                <strong>{formatPrice(selectedProduct.price)}</strong>
                <del>{formatPrice(selectedProduct.oldPrice)}</del>
              </div>
              <p>
                A carefully selected everyday essential with great value and
                dependable quality. Add it to your cart and keep browsing Shopora.
              </p>
              <div className="product-modal-actions">
                <button
                  className="primary-button"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                    setCartOpen(true);
                  }}
                >
                  <ShoppingCart size={18} /> Add to cart
                </button>
                <button
                  className={`secondary-button modal-favorite ${
                    favorites.includes(selectedProduct.id) ? "favorited" : ""
                  }`}
                  onClick={() => toggleFavorite(selectedProduct.id)}
                >
                  <Heart
                    size={18}
                    fill={favorites.includes(selectedProduct.id) ? "currentColor" : "none"}
                  />
                  {favorites.includes(selectedProduct.id) ? "Saved" : "Save"}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
            <div className="cart-header">
              <div className="cart-heading-copy">
                <span className="cart-kicker">SHOPORA BAG</span>
                <h2>Your cart <span className="cart-header-count">{cartCount}</span></h2>
                <p>Review your picks before checkout.</p>
              </div>
              <button
                className="cart-close-button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={19} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <ShoppingCart size={42} />
                <h3>Your cart is empty</h3>
                <p>Add something you love to get started.</p>
                <button
                  className="primary-button"
                  onClick={() => setCartOpen(false)}
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-info">
                        <div className="cart-item-topline">
                          <h3>{item.name}</h3>
                          <button
                            className="cart-remove-button"
                            type="button"
                            onClick={() => changeQuantity(item.id, -item.quantity)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <X size={15} />
                          </button>
                        </div>
                        <strong className="cart-item-price">{formatPrice(item.price)}</strong>
                        <div className="cart-item-bottomline">
                          <div className="quantity-controls" aria-label={`Quantity ${item.quantity}`}>
                            <button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity">
                              <Minus size={13} />
                            </button>
                            <span>{item.quantity}</span>
                            <button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity">
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="cart-line-total">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Subtotal</span>
                    <strong>{formatPrice(cartTotal)}</strong>
                  </div>
                  <button className="primary-button checkout-button">
                    Proceed to checkout
                  </button>
                  <small>Checkout is a demo and is not connected to payments.</small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
