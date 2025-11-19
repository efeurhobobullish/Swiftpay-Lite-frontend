import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Plus, TrendingUp, Clock, CheckCircle, XCircle } from "lucide-react";

const WalletPage = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("transactions");

  const walletBalance = 24500.75;
  const transactions = [
    {
      id: 1,
      type: "credit",
      amount: 5000,
      description: "Wallet Funding",
      date: "2024-01-15",
      time: "14:30",
      status: "success"
    },
    {
      id: 2,
      type: "debit",
      amount: 1500,
      description: "Airtime Purchase - 08012345678",
      date: "2024-01-15",
      time: "10:15",
      status: "success"
    },
    {
      id: 3,
      type: "debit",
      amount: 2500,
      description: "Data Purchase - MTN 1GB",
      date: "2024-01-14",
      time: "16:45",
      status: "success"
    },
    {
      id: 4,
      type: "credit",
      amount: 10000,
      description: "Bank Transfer",
      date: "2024-01-14",
      time: "09:20",
      status: "success"
    },
    {
      id: 5,
      type: "debit",
      amount: 3500,
      description: "DSTV Subscription",
      date: "2024-01-13",
      time: "19:30",
      status: "failed"
    }
  ];

  const stats = [
    {
      title: "Total Spent",
      amount: 7500,
      change: "+12%",
      trend: "up"
    },
    {
      title: "This Month",
      amount: 3500,
      change: "-5%",
      trend: "down"
    },
    {
      title: "Savings",
      amount: 12000,
      change: "+8%",
      trend: "up"
    }
  ];

  const formatAmount = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <Link to="/dashboard" className="back-button">
          <ArrowLeft size={20} />
        </Link>
        <h1>My Wallet</h1>
      </div>

      <div className="wallet-content">
        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-header">
            <div>
              <p className="balance-label">Available Balance</p>
              <div className="balance-amount">
                {balanceVisible ? (
                  <h2>{formatAmount(walletBalance)}</h2>
                ) : (
                  <h2>••••••</h2>
                )}
              </div>
            </div>
            <button 
              className="visibility-toggle"
              onClick={() => setBalanceVisible(!balanceVisible)}
            >
              {balanceVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="balance-actions">
            <Link to="/wallet/fund" className="action-btn primary">
              <Plus size={18} />
              Fund Wallet
            </Link>
            <Link to="/wallet/withdraw" className="action-btn secondary">
              Withdraw
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-title">{stat.title}</p>
              <div className="stat-amount">
                {formatAmount(stat.amount)}
                <span className={`stat-change ${stat.trend}`}>
                  <TrendingUp size={14} />
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transactions Section */}
        <div className="transactions-section">
          <div className="section-header">
            <h2>Recent Transactions</h2>
            <div className="tabs">
              <button
                className={`tab ${activeTab === "transactions" ? "active" : ""}`}
                onClick={() => setActiveTab("transactions")}
              >
                All
              </button>
              <button
                className={`tab ${activeTab === "credits" ? "active" : ""}`}
                onClick={() => setActiveTab("credits")}
              >
                Credits
              </button>
              <button
                className={`tab ${activeTab === "debits" ? "active" : ""}`}
                onClick={() => setActiveTab("debits")}
              >
                Debits
              </button>
            </div>
          </div>

          <div className="transactions-list">
            {transactions
              .filter(transaction => {
                if (activeTab === "credits") return transaction.type === "credit";
                if (activeTab === "debits") return transaction.type === "debit";
                return true;
              })
              .map(transaction => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-icon">
                    {transaction.type === "credit" ? (
                      <div className="icon-credit">+</div>
                    ) : (
                      <div className="icon-debit">-</div>
                    )}
                  </div>
                  
                  <div className="transaction-details">
                    <div className="transaction-main">
                      <p className="transaction-desc">{transaction.description}</p>
                      <p className={`transaction-amount ${transaction.type}`}>
                        {transaction.type === "credit" ? "+" : "-"}
                        {formatAmount(transaction.amount)}
                      </p>
                    </div>
                    <div className="transaction-meta">
                      <div className="transaction-date">
                        <Clock size={12} />
                        {formatDate(transaction.date)} • {transaction.time}
                      </div>
                      <div className={`transaction-status ${transaction.status}`}>
                        {transaction.status === "success" ? (
                          <CheckCircle size={12} />
                        ) : (
                          <XCircle size={12} />
                        )}
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {transactions.filter(t => 
            activeTab === "transactions" || 
            t.type === activeTab.slice(0, -1)
          ).length === 0 && (
            <div className="empty-state">
              <p>No transactions found</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .wallet-container {
          min-height: 100dvh;
          background: var(--light-bg);
          padding: 1rem;
        }

        .wallet-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .back-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--medium-bg);
          color: var(--font-color);
          transition: background 0.3s ease;
        }

        .back-button:hover {
          background: var(--border);
        }

        .wallet-header h1 {
          font-size: 1.5rem;
          color: var(--font-color);
          font-weight: 600;
        }

        .balance-card {
          background: var(--gradient);
          border-radius: 16px;
          padding: 1.5rem;
          color: var(--white);
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow);
        }

        .balance-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .balance-label {
          opacity: 0.9;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .balance-amount h2 {
          font-size: 2rem;
          font-weight: 700;
        }

        .visibility-toggle {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 8px;
          padding: 0.5rem;
          color: var(--white);
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .visibility-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .balance-actions {
          display: flex;
          gap: 0.75rem;
        }

        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .action-btn.primary {
          background: var(--white);
          color: var(--primary-color);
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.2);
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--white);
          padding: 1rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
        }

        .stat-title {
          color: var(--font-color-light);
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .stat-amount {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          color: var(--font-color);
        }

        .stat-change {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
        }

        .stat-change.up {
          background: var(--green);
          color: var(--white);
        }

        .stat-change.down {
          background: var(--crimson);
          color: var(--white);
        }

        .transactions-section {
          background: var(--white);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: var(--shadow);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .section-header h2 {
          font-size: 1.25rem;
          color: var(--font-color);
          font-weight: 600;
        }

        .tabs {
          display: flex;
          background: var(--medium-bg);
          border-radius: 12px;
          padding: 4px;
        }

        .tab {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          color: var(--font-color-light);
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab.active {
          background: var(--primary-color);
          color: var(--white);
        }

        .transactions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          transition: background 0.3s ease;
        }

        .transaction-item:hover {
          background: var(--medium-bg);
        }

        .transaction-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.125rem;
        }

        .icon-credit {
          background: var(--green);
          color: var(--white);
        }

        .icon-debit {
          background: var(--crimson);
          color: var(--white);
        }

        .transaction-details {
          flex: 1;
        }

        .transaction-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .transaction-desc {
          color: var(--font-color);
          font-weight: 500;
          flex: 1;
        }

        .transaction-amount {
          font-weight: 700;
          margin-left: 1rem;
        }

        .transaction-amount.credit {
          color: var(--green);
        }

        .transaction-amount.debit {
          color: var(--crimson);
        }

        .transaction-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: var(--font-color-light);
        }

        .transaction-date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .transaction-status {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .transaction-status.success {
          background: var(--green);
          color: var(--white);
        }

        .transaction-status.failed {
          background: var(--crimson);
          color: var(--white);
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--font-color-light);
        }

        @media (max-width: 480px) {
          .wallet-container {
            padding: 0.5rem;
          }

          .balance-amount h2 {
            font-size: 1.75rem;
          }

          .balance-actions {
            flex-direction: column;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: stretch;
          }

          .tabs {
            justify-content: center;
          }

          .transaction-main {
            flex-direction: column;
            gap: 0.5rem;
          }

          .transaction-amount {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WalletPage;
