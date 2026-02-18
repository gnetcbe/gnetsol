"use client";

export default function HostingTypesPage() {
  const hostingData = [
    {
      type: "Shared Hosting",
      how: "Multiple websites share one server and its resources",
      best: "Beginners, small websites, blogs",
      pros: "Cheapest option, easy to set up, provider handles maintenance",
      cons: "Limited resources, slower performance, less control",
    },
    {
      type: "Business Hosting",
      how: "Enhanced shared hosting with more resources and support",
      best: "Small to medium businesses needing reliability",
      pros: "Affordable, better performance than shared, includes business tools",
      cons: "Still limited compared to VPS/dedicated, less customization",
    },
    {
      type: "VPS Hosting",
      how: "One physical server divided into virtual servers with dedicated resources",
      best: "Growing websites, e-commerce, moderate traffic",
      pros: "More control, scalable, better performance",
      cons: "More expensive than shared, requires technical knowledge",
    },
    {
      type: "Dedicated Servers",
      how: "Entire physical server dedicated to one client",
      best: "Large businesses, high-traffic sites, apps needing full control",
      pros: "Maximum performance, full customization, high security",
      cons: "Expensive, requires server management expertise",
    },
    {
      type: "Cloud Hosting",
      how: "Websites hosted across multiple servers in a cloud network",
      best: "Businesses needing scalability and reliability",
      pros: "Highly scalable, pay-as-you-go pricing, high uptime",
      cons: "Pricing can be unpredictable, requires technical setup",
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Hosting Types Comparison</h1>

      <div className="table-container">
        <table className="desktop-table">
          <thead>
            <tr>
              <th>Hosting Type</th>
              <th>How It Works</th>
              <th>Best For</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            {hostingData.map((item, index) => (
              <tr key={index}>
                <td className="type">{item.type}</td>
                <td>{item.how}</td>
                <td>{item.best}</td>
                <td>{item.pros}</td>
                <td>{item.cons}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="mobile-cards">
          {hostingData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.type}</h3>

              <div className="field">
                <span>How It Works</span>
                <p>{item.how}</p>
              </div>

              <div className="field">
                <span>Best For</span>
                <p>{item.best}</p>
              </div>

              <div className="field">
                <span>Pros</span>
                <p>{item.pros}</p>
              </div>

              <div className="field">
                <span>Cons</span>
                <p>{item.cons}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page {
          padding: 60px 20px;
          background: #f5f7fa;
        
        }

        .title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 50px;
          color: #1e293b;
        }

        .table-container {
          max-width: 1200px;
          margin: auto;
        }

        /* ===== Desktop Table ===== */
        .desktop-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        thead {
          background: #1e3a8a;
          color: white;
        }

        th {
          padding: 18px;
          text-align: left;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        td {
          padding: 18px;
          font-size: 14px;
          color: #1f2937;
          vertical-align: top;
        }

       tbody tr {
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

/* Corporate pastel row colors */
tbody tr:nth-child(1) {
  background: #eef2ff; /* Soft blue */
}

tbody tr:nth-child(2) {
  background: #f0f9ff; /* Soft sky */
}

tbody tr:nth-child(3) {
  background: #ecfdf5; /* Soft green */
}

tbody tr:nth-child(4) {
  background: #fff7ed; /* Soft orange */
}

tbody tr:nth-child(5) {
  background: #fdf2f8; /* Soft rose */
}

tbody tr:hover {
  transform: scale(1.01);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}


        .type {
          font-weight: 600;
          color: #1e3a8a;
        }

        /* ===== Mobile Layout ===== */
        .mobile-cards {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-table {
            display: none;
          }

          .mobile-cards {
            display: block;
          }

          .card {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
            border-top: 4px solid #1e3a8a;
          }

          .card h3 {
            margin-bottom: 15px;
            font-size: 18px;
            color: #1e3a8a;
          }

          .field {
            margin-bottom: 12px;
          }

          .field span {
            display: block;
            font-size: 13px;
            font-weight: 600;
            color: #475569;
            margin-bottom: 4px;
          }

          .field p {
            font-size: 14px;
            color: #1f2937;
            margin: 0;
          }

          .title {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
}
