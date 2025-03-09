import React from "react";
import { BiBarChartAlt } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";

const Categories = () => {
  return (
    <div className="bg-white w-4/5 px-8">
      <div className="mt-5">
        <h1 className="text-[30px] font-medium">Categories</h1>
        <ol className="flex items-center">
          <a href="/" className="pr-3">
            <BiHomeAlt />
          </a>
          <li>Categories</li>
        </ol>
      </div>
      <section className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-700 text-2xl">List Categories</h2>
          <button className="bg-blue-500 p-3 text-white rounded-sm">
            <a href="/create">Create New Product</a>
          </button>
        </div>
        <div class="w-full max-w-6xl mx-auto overflow-x-auto lg:overflow-visible mt-5">
          <table class="w-full border border-gray-300 bg-white">
            <thead>
              <tr class="bg-gray-200 text-gray-700">
                <th class="px-4 py-2 text-left border-b">#</th>
                <th class="px-4 py-2 text-left border-b">Name</th>
                <th class="px-4 py-2 text-left border-b">Description</th>
                <th class="px-4 py-2 text-left border-b">Code</th>
                <th class="px-4 py-2 text-left border-b">Status</th>
                <th class="px-4 py-2 text-left border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-gray-100">
                <td class="px-4 py-2">1</td>
                <td class="px-4 py-2">Jane Smith</td>
                <td class="px-4 py-2">Editor</td>
                <td class="px-4 py-2">123456789</td>
                <td class="px-4 py-2">
                  <span class="px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded">
                    Active
                  </span>
                </td>
                <td class="px-4 py-2 space-x-2">
                  <a
                    href="#"
                    class="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <Outlet /> */}
      </section>
    </div>
  );
};

export default Categories;
