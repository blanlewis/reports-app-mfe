
"use client";

import { useSearchParams } from "next/navigation";
import { CustomSidebar } from "@blanlewis0/lewis-tms-shared-ui";

const allNavigationItems = [
  { label: "Dashboard", href: "/", icon: "🏠" },
  { label: "Bookings", href: "/bookings?source=host", icon: "📦" },
  { label: "Fleet", href: "/fleet?source=host", icon: "🚚" },
  { label: "Reports", href: "/reports?source=host", icon: "📊" },
];

const standaloneNavigationItems = [
  { label: "Reports", href: "/reports", icon: "📊" },
];

interface ReportsLayoutContentProps {
  readonly children: React.ReactNode;
}
export default function ReportsLayoutContent({
  children,
}: ReportsLayoutContentProps) {
  const searchParams = useSearchParams();
  const openedThroughHost = searchParams.get("source") === "host";

  const navigationItems = openedThroughHost
    ? allNavigationItems
    : standaloneNavigationItems;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <CustomSidebar
        navigationItems={navigationItems}
        activeHref="/reports"
      />

      <main style={{ flex: 1, minWidth: 0 }}>
        {children}
      </main>
    </div>
  );
}