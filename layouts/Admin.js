import React, { useEffect, useState } from "react";
import Head from "next/head";
// components
import FooterAdmin from "components/Footers/FooterAdmin.js";
import AlertQuote from "components/Alerts/AlertQuote";
import AdminNavbar from "components/Navbars/AdminNavbar";

export default function Admin(props) {
  const [message, setMessage] = useState(
    "Reminder, All content in this site is confidential :)"
  );
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {/* {typeof window !== "undefined" && <Sidebar menus={menus} />} */}
      <div className="relative md:ml-64 bg-slate-100">
        <AdminNavbar message={message} />
        {/* Header */}
        <div className="relative bg-slate-800 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              <div className="flex flex-wrap">
                <div className="w-full px-4">
                  <AlertQuote />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {props.children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
