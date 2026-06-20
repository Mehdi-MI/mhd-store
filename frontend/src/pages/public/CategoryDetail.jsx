import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import ProductGrid from '../../components/products/ProductGrid';
import ProductFilter from '../../components/products/ProductFilter';
import './CategoryDetail.css';

const MOCK_CATEGORY = {
  id: 1,
  name: 'Fashion & Apparel',
  slug: 'fashion-apparel',
  description: 'Discover handcrafted clothing, accessories, and sustainable fashion from independent designers.',
  icon: '👕',
  productCount: 3421,
  sellerCount: 287,
  featured: ['Dresses', 'Outerwear', 'Accessories', 'Shoes'],
};

const MOCK_PRODUCTS = [
  { id: 1, name: 'Cashmere Blend Overcoat — Midnight', price: 349, originalPrice: null, images: [], rating: 4.6, reviewCount: 61, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 2, name: 'Merino Wool Sweater — Ivory', price: 189, originalPrice: null, images: [], rating: 4.8, reviewCount: 142, seller: { store_name: 'Craft & Hide' }, badge: null },
  { id: 3, name: 'Silk Blend Dress — Sage', price: 275, originalPrice: 320, images: [], rating: 4.7, reviewCount: 89, seller: { store_name: 'Ethereal Threads' }, badge: 'Sale' },
  { id: 4, name: 'Linen Button-Up — White', price: 124, originalPrice: null, images: [], rating: 4.5, reviewCount: 34, seller: { store_name: 'Urban Bound' }, badge: null },
  { id: 5, name: 'Wool Trousers — Charcoal', price: 215, originalPrice: null, images: [], rating: 4.9, reviewCount: 128, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 6, name: 'Cotton Shirt — Navy', price: 99, originalPrice: 129, images: [], rating: 4.6, reviewCount: 76, seller: { store_name: 'Craft & Hide' }, badge: 'Sale' },
  { id: 7, name: 'Linen Blazer — Cream', price: 285, originalPrice: null, images: [], rating: 4.7, reviewCount: 102, seller: { store_name: 'Ethereal Threads' }, badge: null },
  { id: 8, name: 'Cashmere Scarf — Burgundy', price: 145, originalPrice: null, images: [], rating: 4.8, reviewCount: 94, seller: { store_name: 'Urban Bound' }, badge: null },
  { id: 9, name: 'Leather Jacket — Black', price: 425, originalPrice: null, images: [], rating: 4.9, reviewCount: 156, seller: { store_name: 'Maison Élite' }, badge: null },
  { id: 10, name: 'Silk Camisole — Rose', price: 89, originalPrice: 115, images: [], rating: 4.5, reviewCount: 48, seller: { store_name: 'Craft & Hide' }, badge: 'Sale' },
  { id: 11, name: 'Wool Coat — Camel', price: 395, originalPrice: null, images: [], rating: 4.8, reviewCount: 121, seller: { store_name: 'Ethereal Threads' }, badge: null },
  { id: 12, name: 'Cotton Dress — Floral', price: 178, originalPrice: 215, images: [], rating: 4.6, reviewCount: 67, seller: { store_name: 'Urban Bound' }, badge: 'Sale' },
];

export default function CategoryDetail() {
  const { slug } = useParams();
  const heroRef = useReveal();
  const gridRef = useReveal();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    rating: 0,
    sortBy: 'featured',
  });

  useEffect(() => {
    // Mock data — replace with: dispatch(fetchCategoryBySlug(slug))
    setCategory(MOCK_CATEGORY);
    setProducts(MOCK_PRODUCTS);
    setFilteredProducts(MOCK_PRODUCTS);
  }, [slug]);

  useEffect(() => {
    let result = [...products];

    // Price filter
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Rating filter
    if (filters.rating > 0) {
      result = result.filter(p => p.rating >= filters.rating);
    }

    // Sort
    if (filters.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [filters, products]);

  if (!category) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  return (
    <div className="category-detail-page">
      {/* ── Hero ───────────────────────────────── */}
      <section className="category-detail-hero" ref={heroRef}>
        <div className="category-detail-hero__inner">
          <span className="section-tag reveal">Category</span>
          <div className="category-detail-header reveal reveal-delay-1">
            <span className="category-detail-icon">{category.icon}</span>
            <h1 className="category-detail-title">{category.name}</h1>
          </div>
          <p className="category-detail-description reveal reveal-delay-2">
            {category.description}
          </p>
          
          <div className="category-detail-stats reveal reveal-delay-3">
            <div className="category-detail-stat">
              <span className="category-detail-stat__num">{category.productCount.toLocaleString()}+</span>
              <span className="category-detail-stat__label">Products</span>
            </div>
            <div className="category-detail-stat">
              <span className="category-detail-stat__num">{category.sellerCount}+</span>
              <span className="category-detail-stat__label">Sellers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Subcategories ─────────────────────────────── */}
      <section className="category-detail-featured">
        <div className="category-detail-featured__inner">
          <h2>Browse by Subcategory</h2>
          <div className="subcategory-grid">
            {category.featured.map(sub => (
              <Link key={sub} to={`/categories/${category.slug}?sub=${sub.toLowerCase()}`} className="subcategory-card">
                <span>{sub}</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products with Filters ──────────────────────────────── */}
      <section className="category-detail-products" ref={gridRef}>
        <div className="category-detail-products__inner">
          <div className="category-detail-layout">
            {/* Sidebar Filter */}
            <aside className="category-detail-sidebar">
              <ProductFilter filters={filters} onFilterChange={setFilters} />
            </aside>

            {/* Products Grid */}
            <main className="category-detail-main">
              <div className="category-detail-header-bar">
                <p className="category-detail-count">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="category-detail-sort"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="category-detail-empty">
                  <p>No products found matching your filters.</p>
                  <button
                    onClick={() => setFilters({ priceRange: [0, 500], rating: 0, sortBy: 'featured' })}
                    className="btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="category-detail-cta">
        <div className="category-detail-cta__inner">
          <h2>Become a seller in this category</h2>
          <p>Reach thousands of buyers looking for {category.name.toLowerCase()}</p>
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
