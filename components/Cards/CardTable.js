import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { format, getMonth, differenceInMonths } from "date-fns";
// components
import Image from "next/image";

export default function CardTable(props) {
  const { color } = props;
  const [data, setData] = useState(props.data);
  const [myclass, setMyclass] = useState([]);
  const setupdata = useCallback(() => {
    for (let x = 0; x < data.length; x++) {
      const date_props = data[x].date ?? "1970-01-01";
      const datax = {
        program: data[x].class,
        type: data[x].type,
        date: format(new Date(date_props), "dd MMMM yyy"),
        style_completion: "",
        style_beforecompletion: "",
        style_status: "",
        completion: "",
        status: "",
      };
      const join_month = new Date(data[x].date);
      const now_month = new Date();
      const dif_month = differenceInMonths(now_month, join_month);
      if (dif_month == 0 || dif_month < 0) {
        datax.style_status = "text-indigo-500";
        datax.style_completion = "bg-indigo-500";
        datax.style_beforecompletion = "bg-indigo-200";
        datax.completion = "50%";
        datax.status = "On Schedule";
      } else if (dif_month == 1) {
        datax.style_status = "text-sky-500";
        datax.style_completion = "bg-sky-500";
        datax.style_beforecompletion = "bg-sky-200";
        datax.completion = "75%";
        datax.status = "On Schedule";
      } else if (dif_month == 2) {
        datax.style_status = "text-teal-500";
        datax.style_completion = "bg-teal-500";
        datax.style_beforecompletion = "bg-teal-200";
        datax.completion = "90%";
        datax.status = "On Schedule";
      } else {
        datax.style_status = "text-emerald-500";
        datax.style_completion = "bg-emerald-500";
        datax.style_beforecompletion = "bg-emerald-200";
        datax.completion = "100%";
        datax.status = "Completed";
      }
      setMyclass((oldArray) => [...oldArray, datax]);
    }
  }, [data]);
  useEffect(() => {
    setupdata();
  }, [setupdata]);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-slate-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-slate-700" : "text-white")
                }
              >
                Kelas yang diikuti
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-slate-600 text-slate-200 border-slate-500")
                  }
                >
                  Program
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-slate-600 text-slate-200 border-slate-500")
                  }
                >
                  Class
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-slate-600 text-slate-200 border-slate-500")
                  }
                >
                  Join Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-slate-600 text-slate-200 border-slate-500")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-slate-600 text-slate-200 border-slate-500")
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 border-slate-100"
                      : "bg-slate-600 text-slate-200 border-slate-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {myclass.map((data, index) => {
                return (
                  <tr key={index}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <div className="h-12 w-12 p-3 bg-white rounded-full border">
                        <Image
                          src="/sketch.jpg"
                          alt="..."
                          width={60}
                          height={60}
                          layout="responsive"
                        />
                      </div>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light" ? "text-slate-600" : "text-white")
                        }
                      >
                        {data.program}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.type.toUpperCase()}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {format(new Date(data.date), "dd MMMM yyy")}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i
                        className={"fas fa-circle mr-2 " + data.style_status}
                      ></i>{" "}
                      {data.status}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">{data.completion}</span>
                        <div className="relative w-full">
                          <div
                            className={
                              "overflow-hidden h-2 text-xs flex rounded " +
                              data.style_beforecompletion
                            }
                          >
                            <div
                              style={{ width: data.completion }}
                              className={
                                "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center " +
                                data.style_completion
                              }
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
