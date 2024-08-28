import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const PortfolioList = ({ portfolios, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Portfolios</h2>
      <table className="text-black min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Portfolio Name</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio) => (
            <tr key={portfolio.id}>
              <td className="py-2 px-4 border-b">{portfolio.name}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex space-x-4">
                  <button
                    onClick={() => onEdit(portfolio.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(portfolio.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioList;
