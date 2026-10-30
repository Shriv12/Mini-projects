import React from "react";
import "../css/CssStyles.css";
import { useNavigate, Outlet } from "react-router-dom";
function CssStyles() {
    const navigate = useNavigate()
  return (
    <div className="css-container">
        <button onClick={() => navigate('/css-styles/advanced-css')}>AdvancedCss</button>
      <div>
        <h3>Transition</h3>

        <div className="box"></div>
      </div>

        <div>
            <h3>Animation</h3>
      <div className="box-container">
        <div className="box"></div>
      </div>
        </div>
         <Outlet />
    </div>
  );
}

export default CssStyles;
