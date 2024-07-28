import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Your Habits</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Title</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Days Passed</div>
                </th>
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sales</div>
                </th> */}
                <th className="p-2">
                  <div className="font-semibold text-center">Completion Rate</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                    <circle fill="#FFD700" cx="18" cy="18" r="18" />
                  </svg>
                    <div className="text-gray-800 dark:text-gray-100">Read Book</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">2.4K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$3,877</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">267</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.7%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                    <circle fill="#33FF57" cx="18" cy="18" r="18" />
                  </svg>
                    <div className="text-gray-800 dark:text-gray-100">Drink 5L of water</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">2.2K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$3,426</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">249</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.4%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                    <circle fill="#FF5733" cx="18" cy="18" r="18" />
                  </svg>
                    <div className="text-gray-800 dark:text-gray-100">Solve DSA problem (atleast one)</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">2.0K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,444</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">224</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.2%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                    <circle fill="#0E2439" cx="18" cy="18" r="18" />
                  </svg>
                    <div className="text-gray-800 dark:text-gray-100">Workout</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1.9K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,236</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">220</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.2%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                  <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
                    <circle fill="#0E2439" cx="18" cy="18" r="18" />
                  </svg>
                    <div className="text-gray-800 dark:text-gray-100">Avoid Outside food</div>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center">1.7K</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,034</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">204</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.9%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
