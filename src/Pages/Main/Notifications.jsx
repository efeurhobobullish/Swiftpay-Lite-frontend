import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Bell, Check, Trash2, Filter, CheckCircle, XCircle, AlertCircle, Info, CreditCard, Shield } from "lucide-react";
import { toast } from "sonner";
import Header from "../../Components/User/Header";
import Layout from "../../Components/User/Layout";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Transaction Successful",
      message: "Your airtime purchase of ₦1,500 was successful",
      type: "success",
      date: "2024-01-15",
      time: "14:30",
      read: false,
      category: "transaction"
    },
    {
      id: 2,
      title: "Wallet Funded",
      message: "Your wallet has been credited with ₦10,000",
      type: "credit",
      date: "2024-01-15",
      time: "09:15",
      read: true,
      category: "wallet"
    },
    {
      id: 3,
      title: "Service Update",
      message: "New data plans are now available for MTN",
      type: "info",
      date: "2024-01-14",
      time: "16:45",
      read: false,
      category: "service"
    },
    {
      id: 4,
      title: "Security Alert",
      message: "New login detected from unknown device",
      type: "warning",
      date: "2024-01-14",
      time: "12:20",
      read: true,
      category: "security"
    },
    {
      id: 5,
      title: "Promotion",
      message: "Get 10% cashback on all cable TV subscriptions this weekend",
      type: "promo",
      date: "2024-01-13",
      time: "10:30",
      read: false,
      category: "promotion"
    },
    {
      id: 6,
      title: "Transaction Failed",
      message: "Your electricity bill payment failed. Insufficient funds",
      type: "error",
      date: "2024-01-13",
      time: "08:15",
      read: true,
      category: "transaction"
    }
  ]);

  const [filter, setFilter] = useState("all");
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const categories = [
    { id: "all", label: "All", count: notifications.length },
    { id: "unread", label: "Unread", count: notifications.filter(n => !n.read).length },
    { id: "transaction", label: "Transactions", count: notifications.filter(n => n.category === "transaction").length },
    { id: "wallet", label: "Wallet", count: notifications.filter(n => n.category === "wallet").length },
    { id: "security", label: "Security", count: notifications.filter(n => n.category === "security").length }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") return true;
    if (filter === "unread") return !notification.read;
    return notification.category === filter;
  });

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    toast.success("All notifications marked as read");
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
    toast.success("Notification deleted");
  };

  const deleteSelected = () => {
    setNotifications(notifications.filter(notif => !selectedNotifications.includes(notif.id)));
    setSelectedNotifications([]);
    toast.success(`${selectedNotifications.length} notifications deleted`);
  };

  const toggleSelect = (id) => {
    setSelectedNotifications(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} className="text-green-500" />;
      case "error":
        return <XCircle size={20} className="text-crimson" />;
      case "warning":
        return <AlertCircle size={20} className="text-orange-500" />;
      case "info":
        return <Info size={20} className="text-blue-500" />;
      case "credit":
        return <CreditCard size={20} className="text-green-500" />;
      case "promo":
        return <Bell size={20} className="text-purple-500" />;
      default:
        return <Bell size={20} className="text-primary-color" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "transaction":
        return <CreditCard size={16} />;
      case "wallet":
        return <CreditCard size={16} />;
      case "security":
        return <Shield size={16} />;
      default:
        return <Bell size={16} />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Yesterday";
    if (diffDays > 1) return `${diffDays - 1} days ago`;
    return "Today";
  };

  return (
    <Layout>
      <Header 
        title="Notifications" 
        subtitle="Manage your notifications"
        showBackButton={true}
        backUrl="/dashboard"
      />
      
      <div className="notifications-content">
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? "active" : ""}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
              <span className="filter-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          {selectedNotifications.length > 0 ? (
            <button className="action-btn danger" onClick={deleteSelected}>
              <Trash2 size={18} />
              Delete ({selectedNotifications.length})
            </button>
          ) : (
            <button className="action-btn" onClick={markAllAsRead}>
              <Check size={18} />
              Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="notifications-list">
          {filteredNotifications.length === 0 ? (
            <div className="empty-state">
              <Bell size={48} className="empty-icon" />
              <h3>No notifications</h3>
              <p>You're all caught up!</p>
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className={`notification-item ${notification.read ? "read" : "unread"} ${
                  selectedNotifications.includes(notification.id) ? "selected" : ""
                }`}
              >
                <div className="notification-select">
                  <input
                    type="checkbox"
                    checked={selectedNotifications.includes(notification.id)}
                    onChange={() => toggleSelect(notification.id)}
                  />
                </div>

                <Link
                  to={`/notifications/${notification.id}`}
                  className="notification-content"
                  onClick={() => !notification.read && markAsRead(notification.id)}
                >
                  <div className="notification-icon">
                    {getNotificationIcon(notification.type)}
                  </div>
                  
                  <div className="notification-details">
                    <div className="notification-header">
                      <h4 className="notification-title">{notification.title}</h4>
                      <span className="notification-time">
                        {formatDate(notification.date)} • {notification.time}
                      </span>
                    </div>
                    <p className="notification-message">{notification.message}</p>
                    <div className="notification-meta">
                      <span className={`notification-category ${notification.category}`}>
                        {getCategoryIcon(notification.category)}
                        {notification.category}
                      </span>
                      {!notification.read && <span className="unread-dot"></span>}
                    </div>
                  </div>
                </Link>

                <div className="notification-actions">
                  <button
                    className="action-icon"
                    onClick={() => deleteNotification(notification.id)}
                    title="Delete notification"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .notifications-content {
          padding: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .category-filters {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--medium-bg);
          color: var(--font-color-light);
          border: none;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn.active {
          background: var(--primary-color);
          color: var(--white);
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.125rem 0.5rem;
          border-radius: 10px;
          font-size: 0.75rem;
        }

        .filter-btn.active .filter-count {
          background: rgba(255, 255, 255, 0.3);
        }

        .header-actions {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 1.5rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: var(--primary-color);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .action-btn:hover {
          filter: brightness(110%);
        }

        .action-btn.danger {
          background: var(--crimson);
        }

        .notifications-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .notification-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--white);
          border-radius: 12px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .notification-item.unread {
          border-left-color: var(--primary-color);
          background: var(--medium-bg);
        }

        .notification-item.selected {
          background: var(--primary-color);
          color: var(--white);
        }

        .notification-item.selected * {
          color: var(--white) !important;
        }

        .notification-select {
          flex-shrink: 0;
        }

        .notification-select input {
          cursor: pointer;
        }

        .notification-content {
          flex: 1;
          display: flex;
          gap: 1rem;
          text-decoration: none;
        }

        .notification-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .notification-details {
          flex: 1;
        }

        .notification-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .notification-title {
          font-weight: 600;
          color: var(--font-color);
          margin: 0;
        }

        .notification-item.selected .notification-title {
          color: var(--white);
        }

        .notification-time {
          font-size: 0.75rem;
          color: var(--font-color-light);
          flex-shrink: 0;
        }

        .notification-message {
          color: var(--font-color-light);
          margin-bottom: 0.5rem;
          line-height: 1.4;
          font-size: 0.875rem;
        }

        .notification-item.selected .notification-message {
          color: rgba(255, 255, 255, 0.9);
        }

        .notification-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .notification-category {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          background: var(--medium-bg);
          color: var(--font-color-light);
          text-transform: capitalize;
        }

        .unread-dot {
          width: 8px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 50%;
        }

        .notification-actions {
          flex-shrink: 0;
        }

        .action-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--font-color-light);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-icon:hover {
          background: var(--crimson);
          color: var(--white);
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--font-color-light);
        }

        .empty-icon {
          margin-bottom: 1rem;
          color: var(--font-color-light);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--font-color);
        }

        @media (max-width: 768px) {
          .notification-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .notification-item {
            padding: 0.75rem;
          }

          .notification-content {
            gap: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .notifications-content {
            padding: 0.5rem;
          }

          .category-filters {
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .filter-btn {
            white-space: nowrap;
          }

          .header-actions {
            justify-content: center;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Notifications;
