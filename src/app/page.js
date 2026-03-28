export const dynamic = "force-dynamic";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import styles from './page.module.css';

const fallbackProducts = [
  { id: 1, title: 'PPXOC MILKYWAY DRESS IN...', price: 120, category: "women's clothing", image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg' },
  { id: 2, title: 'PRODUCT NAME', price: 49.99, category: "accessories", image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' },
  { id: 3, title: 'PRODUCT NAME', price: 35.0, category: "accessories", image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg' },
  { id: 4, title: 'PRODUCT NAME', price: 60.0, category: "clothing", image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg' },
  { id: 5, title: 'PRODUCT NAME', price: 25.0, category: "clothing", image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' },
  { id: 6, title: 'PRODUCT NAME', price: 99.99, category: "accessories", image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg' },
  { id: 7, title: 'PRODUCT NAME', price: 15.0, category: "clothing", image: 'https://fakestoreapi.com/img/71li-ujtlTaL._AC_UX679_.jpg' },
  { id: 8, title: 'PRODUCT NAME', price: 40.0, category: "clothing", image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 9, title: 'PRODUCT NAME', price: 55.0, category: "clothing", image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg' },
  { id: 10, title: 'PRODUCT NAME', price: 75.0, category: "accessories", image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg' },
  { id: 11, title: 'PRODUCT NAME', price: 20.0, category: "clothing", image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg' },
  { id: 12, title: 'PRODUCT NAME', price: 85.0, category: "women's clothing", image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg' }
];

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store', // 🔥 IMPORTANT FIX
    });

    if (!res.ok) {
      console.error('API responded with status:', res.status);
      return fallbackProducts;
    }

    const data = await res.json();

    return data && data.length > 0 ? data : fallbackProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return fallbackProducts;
  }
}

export default async function Home() {
  const products = await getProducts();

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        image: product.image,
        description: product.description,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
        },
      },
    })),
  };

  return (
    <div className="pageLayout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="mainContent">
        <div className="container">
          <div className={styles.heroSection}>
            <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.pageDesc}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>

          <div className={styles.controlsBar}>
            <div className={styles.itemsCount}>
              <strong>{products.length} ITEMS</strong>
              <button className={styles.toggleFilter}>&lt; HIDE FILTER</button>
            </div>
            <div className={styles.sortMobileFilter}>
              <span className={styles.mobileFilterToggle}>FILTER</span>
              <select className={styles.sortSelect} aria-label="Sort products">
                <option value="recommended">RECOMMENDED</option>
                <option value="newest">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="high-low">PRICE: HIGH TO LOW</option>
                <option value="low-high">PRICE: LOW TO HIGH</option>
              </select>
            </div>
          </div>

          <div className={`contentRow ${styles.contentArea}`}>
            <FilterSidebar isVisible={true} />
            <div className={styles.gridWrapper}>
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
