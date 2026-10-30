import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>React mini projects</h1>
      <div className="btn-wrapper">
        <button className="btn" onClick={() => navigate("/otp-login")}>OTP-login</button>
        <button className="btn">Progress bar</button>
        <button className="btn" onClick={() => navigate("/tic-tac-toe")}>Tic-tac-toe</button>
        <button className="btn">VSCode clone</button>
        <button className="btn" onClick={() => navigate("/theme-switcher")}>Theme Switcher</button>
        <button className="btn" onClick={() => navigate("/real-work-scenarios")}>Real Work Scenarios</button>
        <button className="btn" onClick={() => navigate("/css-styles")}>CSS styles</button>
      </div>
    </div>
  );
}

export default Home;
