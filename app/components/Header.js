import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ariaLabel = { "aria-label": "description" };

const Header = () => {
  return (
    <>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "40px",
          // gap: "10px",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div>
            <MenuIcon fontSize="large" />
          </div>
          <div>
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"></img>
          </div>
          <div>
            <p
              style={{
                fontSize: "30px",
                color: "rgb(95, 99, 104)",
                color: "yellow",
              }}
            >
              Keep
            </p>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <div style={{}}>
            <p
              style={{
                fontSize: "45px",
                fontFamily: "cursive",
                color: "yellowgreen",
                whiteSpace: "wrap",
              }}
            >
              Notes Organized, Tasks Simplified
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <div>
            <SettingsApplicationsIcon fontSize="large" />
          </div>
          <div>
            <FormatAlignJustifyOutlinedIcon fontSize="large" />
          </div>
          <div>
            <AccountBoxIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
