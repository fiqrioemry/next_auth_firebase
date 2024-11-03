import React from "react";
import NavMenu from "./NavMenu";
import NavProfil from "./NavProfil";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            Next<span className="text-secondary">Project</span>
          </h1>
        </div>
        <NavMenu />
        <NavProfil />
      </div>
    </header>
  );
};

export default Header;
