import React, { useState } from "react";

function Footer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <footer>
      <span className="bg-slate-200 w-full flex justify-center">
        create by &copy; Uyama 2023
      </span>
    </footer>
  );
}

export default Footer;
