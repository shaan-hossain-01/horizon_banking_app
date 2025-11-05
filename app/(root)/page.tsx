import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedInUser = { firstName: "Shaan", lastName: "Hossain", email: "hossainshaan5@gmail.com" };

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
        banks={[
          {
            $id: "1",
            id: "account-1",
            currentBalance: 5250.50,
            availableBalance: 5000,
            name: "Checking Account",
            officialName: "Primary Checking",
            mask: "4242",
            institutionId: "inst-001",
            type: "depository",
            subtype: "checking",
            appwriteItemId: "item-001",
            sharableId: "share-001",
            accountId: "acc-001",
            bankId: "bank-001",
            accessToken: "token-001",
            fundingSourceUrl: "https://example.com/fund-001",
            userId: "user-001"
          },
          {
            $id: "2",
            id: "account-2",
            currentBalance: 12500.75,
            availableBalance: 12000,
            name: "Savings Account",
            officialName: "Primary Savings",
            mask: "8765",
            institutionId: "inst-001",
            type: "depository",
            subtype: "savings",
            appwriteItemId: "item-002",
            sharableId: "share-002",
            accountId: "acc-002",
            bankId: "bank-002",
            accessToken: "token-002",
            fundingSourceUrl: "https://example.com/fund-002",
            userId: "user-001"
          }
        ]}
      />
    </section>
  );
};

export default Home;
