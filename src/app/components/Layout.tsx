"use client";
import { useLocalStorage } from "@/utils/hooks";
import React, { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const themes = ["blue", "purple", "valentine"];
const Layout = ({ children }) => {
  const [theme, setTheme] = useState("valentine");
  console.log("theme:", theme);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <body>
        <div className="navbar bg-base-100 mb-5 shadow-md sticky top-0 z-50">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">JSON Translate</a>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-gray-100 rounded-box w-52"
              >
                {themes.map((theme) => (
                  <li key={theme}>
                    <a onClick={() => setTheme(theme)}>{theme}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
};

export default Layout;
