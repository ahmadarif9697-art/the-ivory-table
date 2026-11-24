import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageId } from './data/restaurantData';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { StoryPage } from './pages/StoryPage';

const VALID_PAGES: PageId[] = [
  'home',
  'menu',
  'story',
  'gallery',
  'reservations',
  'contact',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (page: PageId) => {
    setActivePage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#1B1817]">
      <Navbar activePage={activePage} onNavigate={navigate} />

      <main className="flex-1">
        {activePage === 'home' && <HomePage onNavigate={navigate} />}
        {activePage === 'menu' && <MenuPage onNavigate={navigate} />}
        {activePage === 'story' && <StoryPage onNavigate={navigate} />}
        {activePage === 'gallery' && <GalleryPage />}
        {activePage === 'reservations' && <ReservationsPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
