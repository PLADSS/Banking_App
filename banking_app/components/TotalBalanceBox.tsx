// TotalBalanceBox.tsx
import React from 'react';
import AnimatedCounter from './ui/AnimatedCounter';
import DoughnutChart from './ui/DoughnutChart';

function TotalBalanceBox({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <div className="total-balance-label">
            Total Current Balance
            <div className="total-balance-amount flex-center gap-2">
              <AnimatedCounter amount={totalCurrentBalance} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TotalBalanceBox;
