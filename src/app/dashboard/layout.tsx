"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Profile", path: "/dashboard/profile" },
    { name: "Create Project", path: "/dashboard/create-project" },
    { name: "My Project", path: "/dashboard/my-project" },
    { name: "Communication", path: "/dashboard/communication" },
    { name: "Sign Out", path: "/" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          background: "#f0f0f0",
          padding: "20px",
        }}
      >
        <h3>Student Dashboard</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.path} style={{ margin: "10px 0" }}>
              <Link
                href={item.path}
                style={{
                  color: pathname === item.path ? "#000" : "#555",
                  fontWeight: pathname === item.path ? "bold" : "normal",
                  textDecoration: "none",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, padding: "30px" }}>
        {children}
      </div>
    </div>
  );
}