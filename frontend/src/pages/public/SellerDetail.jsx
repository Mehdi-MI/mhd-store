import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import ProductCard from '../../components/products/ProductCard';
import './SellerDetail.css';

const MOCK_SELLER = {
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
  isFollowing: false,
  bio: 'Welcome to Maison Élite, where we celebrate the intersection of craft and contemporary design. Every piece is carefully curated to embody the finest in fashion and aesthetic sensibility.',
  socialLinks: {
    instagram: 'https://instagram.com',
    website: 'https://example.com',
  },
};

const MOCK_PRODUCTS = [
  { id: 1, name: 'Cashmere Blend Overcoat — Midnight', price: 349, originalPrice: null, images: [], rating: 4.6, reviewCount: 61, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 2, name: 'Merino Wool Sweater — Ivory', price: 189, originalPrice: null, images: [], rating: 4.8, reviewCount: 142, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 3, name: 'Silk Blend Dress — Sage', price: 275, originalPrice: 320, images: [], rating: 4.7, reviewCount: 89, seller: { store_name: 'Maison Élite' }, badge: 'Sale' },
  { id: 4, name: 'Linen Button-Up — White', price: 124, originalPrice: null, images: [], rating: 4.5, reviewCount: 34, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 5, name: 'Wool Trousers — Charcoal', price: 215, originalPrice: null, images: [], rating: 4.9, reviewCount: 128, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 6, name: 'Cotton Shirt — Navy', price: 99, originalPrice: 129, images: [], rating: 4.6, reviewCount: 76, seller: { store_name: 'Maison Élite' }, badge: 'Sale' },
];

export default function SellerDetail() {
  const { id } = useParams();
  const heroRef = useReveal();
  const productsRef = useReveal();
  const [seller, setSeller] = useState(null);
  const [products, setProducts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Mock data — replace with: dispatch(fetchSellerById(id))
    setSeller(MOCK_SELLER);
    setIsFollowing(MOCK_SELLER.isFollowing);
    setProducts(MOCK_PRODUCTS);
  }, [id]);

  if (!seller) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  return (
    <div className="seller-detail-page">
      {/* ── Hero / Header ───────────────────────────────── */}
      <section className="seller-detail-hero" ref={heroRef}>
        <div className="seller-detail-hero__inner">
          {/* Store Avatar */}
          <div className="seller-detail-avatar reveal">{seller.initials}</div>

          {/* Store Info */}
          <div className="seller-detail-info reveal reveal-delay-1">
            <h1 className="seller-detail-name">{seller.storeName}</h1>
            <p className="seller-detail-category">{seller.category}</p>
            <p className="seller-detail-bio">{seller.bio}</p>

            {/* Ratings & Stats */}
            <div className="seller-detail-stats">
              <div className="seller-detail-stat">
                <span className="seller-detail-stat__label">Rating</span>
                <span className="seller-detail-stat__value">
                  {seller.rating} ⭐ ({seller.reviewCount} reviews)
                </span>
              </div>
              <div className="seller-detail-stat">
                <span className="seller-detail-stat__label">Products</span>
                <span className="seller-detail-stat__value">{seller.productCount}</span>
              </div>
              <div className="seller-detail-stat">
                <span className="seller-detail-stat__label">Followers</span>
                <span className="seller-detail-stat__value">{seller.followers.toLocaleString()}</span>
              </div>
              <div className="seller-detail-stat">
                <span className="seller-detail-stat__label">Joined</span>
                <span className="seller-detail-stat__value">{new Date(seller.joinedDate).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="seller-detail-actions reveal reveal-delay-2">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`seller-detail-follow ${isFollowing ? 'following' : ''}`}
              >
                {isFollowing ? '✓ Following' : '+ Follow'}
              </button>
              {seller.socialLinks?.website && (
                <a href={seller.socialLinks.website} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Visit Website
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ────────────────────────────────── */}
      <section className="seller-detail-products" ref={productsRef}>
        <div className="seller-detail-products__inner">
          <div className="seller-detail-products__header">
            <h2>Featured Products</h2>
            <p>Showing {products.length} items</p>
          </div>

          {products.length > 0 ? (
            <div className="product-grid">
              {products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''}`}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <p>No products available</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Related Sellers ─────────────────────────────── */}
      <section className="seller-detail-related">
        <div className="seller-detail-related__inner">
          <h2>Similar Sellers</h2>
          <p>You might also like these curated stores</p>

          <div className="seller-grid-mini">
            {[1, 2, 3].map(i => (
              <Link key={i} to={`/sellers/seller-${i}`} className="seller-card-mini reveal">
                <div className="seller-card-mini__avatar">{String.fromCharCode(64 + i)}{String.fromCharCode(64 + i)}</div>
                <h3>Store Name {i}</h3>
                <p>4.{7 + i} ⭐ (234 reviews)</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="seller-detail-cta">
        <div className="seller-detail-cta__inner">
          <h2>Become a seller yourself</h2>
          <p>Join our marketplace and start selling with zero setup fees</p>
          <Link to="/seller/register" className="btn-primary">
            Start Selling
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
