import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import './Sellers.css';

const MOCK_SELLERS = [
  {
    id: 1,
    storeName: 'Maison Élite',
    storeSlug: 'maison-elite',
    avatar: null,
    initials: 'ME',
    rating: 4.9,
    reviewCount: 1243,
    productCount: 145,
    joinedDate: '2024-03-15',
    category: 'Fashion & Apparel',
    description: 'Curated luxury fashion and timeless pieces from independent designers.',
    followers: 8342,
  },
  {
    id: 2,
    storeName: 'Craft & Hide',
    storeSlug: 'craft-hide',
    avatar: null,
    initials: 'CH',
    rating: 4.8,
    reviewCount: 892,
    productCount: 87,
    joinedDate: '2024-05-22',
    category: 'Fashion & Apparel',
    description: 'Premium leather goods, wallets, and accessories handcrafted with care.',
    followers: 5123,
  },
  {
    id: 3,
    storeName: 'Grove & Wax',
    storeSlug: 'grove-wax',
    avatar: null,
    initials: 'GW',
    rating: 4.9,
    reviewCount: 567,
    productCount: 56,
    joinedDate: '2024-04-10',
    category: 'Beauty & Care',
    description: 'Handmade candles and botanical wellness products made with natural ingredients.',
    followers: 3821,
  },
  {
    id: 4,
    storeName: 'Atelier Nord',
    storeSlug: 'atelier-nord',
    avatar: null,
    initials: 'AN',
    rating: 4.7,
    reviewCount: 445,
    productCount: 102,
    joinedDate: '2024-06-03',
    category: 'Home & Living',
    description: 'Scandinavian-inspired home décor and minimalist furniture pieces.',
    followers: 4256,
  },
  {
    id: 5,
    storeName: 'Zenith Ceramics',
    storeSlug: 'zenith-ceramics',
    avatar: null,
    initials: 'ZC',
    rating: 4.8,
    reviewCount: 723,
    productCount: 134,
    joinedDate: '2024-02-28',
    category: 'Art & Collectibles',
    description: 'Hand-thrown ceramic art and functional pottery by master artisans.',
    followers: 6789,
  },
  {
    id: 6,
    storeName: 'Ethereal Threads',
    storeSlug: 'ethereal-threads',
    avatar: null,
    initials: 'ET',
    rating: 4.9,
    reviewCount: 934,
    productCount: 78,
    joinedDate: '2024-03-30',
    category: 'Fashion & Apparel',
    description: 'Sustainable and ethical fashion with beautiful, timeless designs.',
    followers: 7543,
  },
  {
    id: 7,
    storeName: 'Urban Bound',
    storeSlug: 'urban-bound',
    avatar: null,
    initials: 'UB',
    rating: 4.6,
    reviewCount: 612,
    productCount: 165,
    joinedDate: '2024-04-15',
    category: 'Electronics',
    description: 'Quality tech accessories and urban gadgets for the modern lifestyle.',
    followers: 5621,
  },
  {
    id: 8,
    storeName: 'Wellness & Co',
    storeSlug: 'wellness-co',
    avatar: null,
    initials: 'WC',
    rating: 4.8,
    reviewCount: 521,
    productCount: 92,
    joinedDate: '2024-05-12',
    category: 'Beauty & Care',
    description: 'Organic and natural supplements for health and wellness.',
    followers: 4123,
  },
];

export default function Sellers() {
  const heroRef = useReveal();
  const gridRef = useReveal();
  const [sellers, setSellers] = useState([]);
  const [filteredSellers, setFilteredSellers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    setSellers(MOCK_SELLERS);
    setFilteredSellers(MOCK_SELLERS);
  }, []);

  useEffect(() => {
    let result = [...sellers];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(s => s.category === selectedCategory);
    }

    // Filter by search
    if (search) {
      result = result.filter(s =>
        s.storeName.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));
    } else if (sortBy === 'followers') {
      result.sort((a, b) => b.followers - a.followers);
    }

    setFilteredSellers(result);
  }, [search, selectedCategory, sortBy, sellers]);

  const categories = ['All', ...new Set(sellers.map(s => s.category))];

  return (
    <div className="sellers-page">
      {/* ── Hero ───────────────────────────────── */}
      <section className="sellers-hero" ref={heroRef}>
        <div className="sellers-hero__inner">
          <span className="section-tag reveal">Curated Sellers</span>
          <h1 className="sellers-hero__title reveal reveal-delay-1">
            Meet Our <em>Independent</em> Sellers
          </h1>
          <p className="sellers-hero__sub reveal reveal-delay-2">
            Browse 840+ verified sellers offering exceptional products from around the world.
            Every seller is hand-picked for quality and reliability.
          </p>
        </div>
      </section>

      {/* ── Search & Filter ─────────────────────────────── */}
      <section className="sellers-controls">
        <div className="sellers-controls__inner">
          
          {/* Search */}
          <div className="sellers-search">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search sellers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="sellers-search__input"
            />
          </div>

          {/* Category Filter */}
          <div className="sellers-filter">
            <label htmlFor="category-select">Category:</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="sellers-filter__select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase() === 'all' ? 'all' : cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="sellers-sort">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sellers-sort__select"
            >
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
              <option value="followers">Most Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* ── Sellers Grid ────────────────────────────────── */}
      <section className="sellers-results" ref={gridRef}>
        <div className="sellers-results__inner">
          <p className="sellers-results__count">
            Showing {filteredSellers.length} of {sellers.length} sellers
          </p>

          {filteredSellers.length > 0 ? (
            <div className="sellers-grid">
              {filteredSellers.map((seller, i) => (
                <Link
                  key={seller.id}
                  to={`/sellers/${seller.storeSlug}`}
                  className={`seller-card reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''}`}
                >
                  {/* Avatar */}
                  <div className="seller-card__avatar">
                    {seller.initials}
                  </div>

                  {/* Store Name */}
                  <h3 className="seller-card__name">{seller.storeName}</h3>

                  {/* Category */}
                  <p className="seller-card__category">{seller.category}</p>

                  {/* Description */}
                  <p className="seller-card__description">{seller.description}</p>

                  {/* Stats */}
                  <div className="seller-card__stats">
                    <div className="seller-card__stat">
                      <span className="seller-card__stat-label">Rating</span>
                      <span className="seller-card__stat-value">
                        {seller.rating} <span className="seller-card__stat-count">({seller.reviewCount})</span>
                      </span>
                    </div>
                    <div className="seller-card__stat">
                      <span className="seller-card__stat-label">Products</span>
                      <span className="seller-card__stat-value">{seller.productCount}</span>
                    </div>
                    <div className="seller-card__stat">
                      <span className="seller-card__stat-label">Followers</span>
                      <span className="seller-card__stat-value">{seller.followers.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="seller-card__badge">
                    View Store
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="sellers-empty">
              <p>No sellers found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="sellers-cta">
        <div className="sellers-cta__inner">
          <h2>Want to become a seller?</h2>
          <p>Join our community of independent sellers and reach thousands of buyers worldwide.</p>
          <Link to="/seller/register" className="btn-primary">
            Get Started
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
