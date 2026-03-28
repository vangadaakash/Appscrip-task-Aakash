export const dynamic = "force-dynamic";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FilterSidebar from '@/components/FilterSidebar/FilterSidebar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import styles from './page.module.css';

const fallbackProducts = [
  {
    id: 1,
    title: "Leather Backpack",
    price: 120,
    category: "bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  },
  {
    id: 2,
    title: "Casual Sneakers",
    price: 79,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c4d1c7c"
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 199,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1518441902110-4b5c5d0d5f68"
  },
  {
    id: 5,
    title: "Stylish Sunglasses",
    price: 49,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 6,
    title: "Women Handbag",
    price: 85,
    category: "bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  },
  {
    id: 7,
    title: "Denim Jacket",
    price: 110,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
  },
  {
    id: 8,
    title: "Running Shoes",
    price: 95,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 9,
    title: "Bluetooth Speaker",
    price: 60,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
  },
  {
    id: 10,
    title: "Classic Wrist Watch",
    price: 150,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 11,
    title: "Laptop Bag",
    price: 70,
    category: "bags",
    image: "https://images.unsplash.com/photo-1512499617640-c2f999098c01"
  },
  {
    id: 12,
    title: "Men T-Shirt",
    price: 25,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  }
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
