import React from "react";
import HamburgerNav from "./HamburgerNav";

function header() {
  return (
    <header className="w-full bg-slate-100 justify-between flex p-3">
      <button>Button</button>
      <span>Uyama</span>
      <button>Theme</button>
      <HamburgerNav />
    </header>
  );
}

export default header;
