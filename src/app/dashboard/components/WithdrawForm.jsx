"use client";
import { useState } from "react";

const WithdrawForm = ({ balance, currency, onWithdraw }) => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    const numBalance = parseFloat(balance);

    if (!amount) {
      setError("Введите сумму для вывода");
      return;
    }

    switch (true) {
      case isNaN(numAmount):
        setError("Введите корректную сумму");
        return;
    
      case numAmount > numBalance:
        setError("Недостаточно средств на балансе");
        return;
    
      case numAmount <= 0:
        setError("Сумма должна быть больше нуля");
        return;
    }

    onWithdraw(numAmount);
    setAmount("");
    setError("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Вывод средств
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <label
              className="block text-gray-700 mb-2"
              htmlFor="withdrawAmount"
            >
              Сумма для вывода ({currency})
            </label>
            <input
              id="withdrawAmount"
              type="number"
              className="w-full px-3 py-2 border rounded-lg text-black"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Введите сумму"
              step="0.01"
              min="0"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Вывести баланс
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WithdrawForm;
