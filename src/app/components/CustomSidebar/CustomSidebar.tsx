
type NavigationItem = {
  label: string;
  href: string;
  icon: string;
};

type CustomSidebarProps = {
  readonly navigationItems: NavigationItem[];
  readonly activeHref: string;
};

export default function CustomSidebar({
  navigationItems,
  activeHref,
}: CustomSidebarProps) {
  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        padding: "24px 16px",
        backgroundColor: "#10243A",
        color: "#FFFFFF",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      <h2 style={{ marginBottom: "32px" }}>Lewis TMS</h2>

      <nav>
        {navigationItems.map((item) => {
          const isActive = item.href === activeHref;

          return isActive ? (
            <span
              key={item.href}
              aria-current="page"
              aria-disabled="true"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                padding: "12px",
                marginBottom: "8px",
                color: "#FFFFFF",
                textDecoration: "none",
                borderRadius: "6px",
                backgroundColor: "#244765",
                cursor: "default",
                opacity: 0.8,
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ) : (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                padding: "12px",
                marginBottom: "8px",
                color: "#FFFFFF",
                textDecoration: "none",
                borderRadius: "6px",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}