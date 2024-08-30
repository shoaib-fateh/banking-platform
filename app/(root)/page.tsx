import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const LoggedIn = {
    firstName: "Shoaib",
    lastName: "Fateh",
    email: "shoaibfateh21@yahoo.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and transactions efficiently"
            user={LoggedIn.lastName}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1353.23}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={LoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 2342.23 }, { currentBalance: 2342.23 }]}
      />
    </section>
  );
}

export default Home;
