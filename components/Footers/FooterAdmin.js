import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-2">
              <div className="text-sm text-slate-500 font-semibold py-1 self-center text-center lg:text-right">
                Hand-crafted & made with{" "}
                <i className="fas fa-heart text-red-500"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
