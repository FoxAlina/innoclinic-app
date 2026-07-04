import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const handleFeature = (feature) => {
    alert(`${feature} clicked`);
  };

  const features = [
    "👤 Profile",
    "📊 Reports",
    "📈 Analytics",
    "Inventory",
    "⚙️ Settings",
    "💬 Support"
  ];

  return (
    <div className="dashboard">

      {/* Header */}
      <header className="topbar">
        <div className="logo">
          InnoClinic
        </div>
        <div>
          <button key={"Settings"} className="login-btn" onClick={handleFeature}>⚙️</button>
          <button key={"Notifications"} className="login-btn" onClick={handleFeature}>🔔</button>
          <button className="login-btn" onClick={goToLogin}>Log in</button>
        </div>
      </header>

      <div className="body">

        {/* Sidebar */}
        <aside className="sidebar">
          <ul>
            {features.map((feature) => (
              <li key={feature} onClick={() => alert(feature)}>
                {feature}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          <div className="feature-grid">
            {features.map((feature) => (
              <button key={feature} className="feature-card" onClick={() => alert(feature)}>
                {feature}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;