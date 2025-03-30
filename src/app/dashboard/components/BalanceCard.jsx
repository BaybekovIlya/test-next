const BalanceCard = ({
  balance,
  currency,
  transactionsCount,
  lastTransactionDate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Текущий баланс
        </h2>
        <p className="text-2xl font-bold text-black">
          {balance} {currency}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Количество транзакций
        </h2>
        <p className="text-2xl font-bold text-black">{transactionsCount}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-600 mb-2">
          Последняя транзакция
        </h2>
        <p className="text-2xl font-bold text-black">{lastTransactionDate}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
