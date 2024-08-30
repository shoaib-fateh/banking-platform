import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const LoggedIn = { lastName: "Fateh" };
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
      </div>
    </section>
  );
}

export default Home;
