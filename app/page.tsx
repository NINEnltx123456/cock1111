
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Bangkok",
  });

  const date = time.toLocaleDateString("th-TH", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  });

  return (
    <main className={dark ? "app dark" : "app light"}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>

      <style jsx>{`
        .app {
          min-height: 100vh;
          padding: 30px;
          transition: 0.3s;
        }

        .dark {
          background: #070b14;
          color: #fff;
        }

        .light {
          background: #f1f5f9;
          color: #0f172a;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
        }

        .logo {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #38bdf8;
        }

        .logo span {
          color: #fff;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .status {
          font-size: 12px;
          color: #94a3b8;
          letter-spacing: 2px;
        }

        .toggle {
          background: #172033;
          border: 1px solid #334155;
          color: white;
          padding: 10px 15px;
          border-radius: 10px;
          cursor: pointer;
        }

        .clock-card {
          border: 1px solid #1e293b;
          background: linear-gradient(145deg, #101827, #090e18);
          border-radius: 28px;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 0 40px rgba(14, 165, 233, 0.08);
        }

        .light .clock-card {
          background: white;
          border-color: #cbd5e1;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        .badge {
          display: inline-block;
          border: 1px solid #164e63;
          background: #082f49;
          color: #38bdf8;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .date {
          color: #94a3b8;
          font-size: 18px;
          margin-bottom: 15px;
        }

        .time {
          font-size: clamp(60px, 12vw, 120px);
          font-weight: 800;
          letter-spacing: 5px;
          color: #38bdf8;
          text-shadow: 0 0 30px rgba(56, 189, 248, 0.25);
        }

        .sub {
          margin-top: 20px;
          color: #64748b;
          font-size: 13px;
          letter-spacing: 3px;
        }

        .section-title {
          margin: 40px 0 20px;
          font-size: 18px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .feature {
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #1e293b;
          background: #0f1724;
          transition: 0.3s;
        }

        .light .feature {
          background: white;
          border-color: #cbd5e1;
        }

        .feature:hover {
          transform: translateY(-5px);
          border-color: #38bdf8;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.1);
        }

        .icon {
          font-size: 30px;
          margin-bottom: 20px;
        }

        .feature h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .feature p {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }

        .footer {
          margin-top: 40px;
          text-align: center;
          color: #64748b;
          font-size: 12px;
          letter-spacing: 2px;
        }

        @media (max-width: 700px) {
          .app {
            padding: 20px;
          }

          .navbar {
            margin-bottom: 30px;
          }

          .status {
            display: none;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .clock-card {
            padding: 45px 15px;
          }

          .time {
            letter-spacing: 2px;
          }
        }
      `}</style>

      <div className="container">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="logo">
            NTP<span> CLOCK</span>
          </div>

          <div className="nav-right">
            <div className="status">
              ● SYSTEM ONLINE
            </div>

            <button
              className="toggle"
              onClick={() => setDark(!dark)}
            >
              {dark ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </header>

        {/* MAIN CLOCK */}
        <section className="clock-card">
          <div className="badge">
            LIVE CLOCK
          </div>

          <div className="date">
            {date}
          </div>

          <div className="time">
            {hours}
          </div>

          <div className="sub">
            ASIA / BANGKOK · GMT+7
          </div>
        </section>

        {/* FEATURES */}
        <h2 className="section-title">
          Clock Tools
        </h2>

        <section className="grid">
          <div className="feature">
            <div className="icon">⏰</div>
            <h3>Alarm</h3>
            <p>
              Alarm clock interface
              for daily schedules.
            </p>
          </div>

          <div className="feature">
            <div className="icon">⏱️</div>
            <h3>Stopwatch</h3>
            <p>
              Stopwatch interface
              for tracking time.
            </p>
          </div>

          <div className="feature">
            <div className="icon">⌛</div>
            <h3>Timer</h3>
            <p>
              Countdown timer
              interface for activities.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          NTP CLOCK © 2026 · DIGITAL TIME SYSTEM
        </footer>
      </div>
    </main>
  );
}
