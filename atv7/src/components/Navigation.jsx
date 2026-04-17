function Navigation({ links }) {
  return (
    <nav className="site-navigation" aria-label="Menu principal">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
