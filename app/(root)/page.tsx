import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedInUser = { firstName: "Shaan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser.firstName}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1337.45}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSideBar user={loggedInUser}
        transactions={[]}
        banks={[]}
      />
    </section>
  );
};

export default Home;
