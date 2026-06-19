// Всички външни снимки на едно място — лесно за подмяна с локални файлове.
// Замени URL-ите със собствени снимки (напр. import от ../assets/...).

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u('1571019613454-1cb2f99b2d8b', 1400),       // треньор в зала
  about: `${import.meta.env.BASE_URL}opit.png`,       // портрет на Георги (public/opit.png)
  speaker: u('1517836357463-d25dfeac3438', 1200),     // на сцена / зала
  dashboardAvatar: u('1599058917212-d750089bc07e', 300),
  contact: u('1534438327276-14e5300c3a48', 1400),     // тъмна зала с тежести
  // Реални трансформации (public/)
  martin: `${import.meta.env.BASE_URL}martin.webp`,    // Мартин Будинов — подготвен за сцена
  djesi: `${import.meta.env.BASE_URL}djesi.webp`,      // Джеси Димитрова — Wellness Champion 2025
};

export default images;
