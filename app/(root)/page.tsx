import Balance from "@components/Balance";
import PageHeader from "@components/PageHeader";
import RightSideBar from "@components/RightSideBar";

const HomePage = () => {
    const loggedIn = {firstName: "Yayoo", lastName:"btc", email:"bitlord@btc.crypto"}

  return (
    <section className=" home">
      <div className="home-content">
       <header className="home-header">
       <PageHeader
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access & manage your account and transactions efficiently."
        />
        <Balance  accounts={[]}
                totalBanks= {1}
                totalCurrentBalance={1985566}/>
       </header>
      </div>

      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 7433.59}, {currentBalance: 7433.59}]}/>
    </section>
  );
};

export default HomePage;
