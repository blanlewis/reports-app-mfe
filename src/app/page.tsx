import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const reports = [
    { title: "Total Bookings", value: 128, change: "+12% this week" },
    { title: "Active Vehicles", value: 42, change: "8 currently available" },
    { title: "Completed Deliveries", value: 96, change: "+8% this week" },
    { title: "Pending Deliveries", value: 18, change: "5 due today" },
  ];

  const monthlyData = [
    { month: "May", bookings: 65 },
    { month: "June", bookings: 82 },
    { month: "July", bookings: 74 },
    { month: "August", bookings: 105 },
    { month: "September", bookings: 92 },
    { month: "October", bookings: 128 },
  ];
  
  const maxBookings = Math.max(...monthlyData.map((item) => item.bookings));

  return (
    <main
      style={{
        padding: "32px",
        fontFamily: "Arial, sans-serif",
        background: "#f8fafc",
        color: "#1e293b",
        minHeight: "100vh",
      }}
    >
      <h1>Reports & Analytics</h1>
      <p>Track transport operations and business performance.</p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {reports.map((report) => (
          <article
            key={report.title}
            style={{
              padding: "22px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
            }}
          >
            <p style={{ color: "#475569" }}>{report.title}</p>
            <h2 style={{ fontSize: "32px", margin: "12px 0" }}>
              {report.value}
            </h2>
            <p style={{ color: "#15803d", fontSize: "14px" }}>
              {report.change}
            </p>
          </article>
        ))}
      </section>

      <section
        style={{
          marginTop: "28px",
          padding: "24px",
          borderRadius: "12px",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
        }}
      >
        <h2>Monthly Bookings</h2>

        <div style={{ marginTop: "24px" }}>
          {monthlyData.map((item) => (
            <div
              key={item.month}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr 40px",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <span>{item.month}</span>

              <div
                style={{
                  height: "20px",
                  background: "#e2e8f0",
                  borderRadius: "5px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(item.bookings / maxBookings) * 100}%`,
                    height: "100%",
                    background: "#2563eb",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <strong>{item.bookings}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
