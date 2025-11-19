import { Link } from "react-router-dom";
import { WifiOff } from "lucide-react";

const Offline = () => {
  return (
    <div className="offline-container">
      <div className="offline-content">
        <div className="icon-container">
          <WifiOff size={64} />
        </div>
        
        <h1 className="title">You're Offline</h1>
        
        <p className="message">
          It seems you've lost your internet connection. 
          Please check your network settings and try again.
        </p>

        <div className="actions">
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
          <Link to="/" className="home-link">
            Go to Homepage
          </Link>
        </div>

        <div className="tips">
          <h3>Quick Tips:</h3>
          <ul>
            <li>Check your Wi-Fi or mobile data connection</li>
            <li>Restart your router if needed</li>
            <li>Try disabling and re-enabling airplane mode</li>
            <li>Move to an area with better signal</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .offline-container {
          min-height: 100dvh;
          background: var(--light-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .offline-content {
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        .icon-container {
          margin-bottom: 2rem;
          color: var(--font-color-light);
        }

        .title {
          font-size: 2rem;
          color: var(--font-color);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .message {
          color: var(--font-color-light);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .retry-btn {
          background: var(--primary-color);
          color: var(--white);
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: filter 0.3s ease;
          box-shadow: var(--shadow);
        }

        .retry-btn:hover {
          filter: brightness(110%);
        }

        .home-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem;
          transition: opacity 0.3s ease;
        }

        .home-link:hover {
          opacity: 0.8;
        }

        .tips {
          text-align: left;
          background: var(--medium-bg);
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid var(--primary-color);
        }

        .tips h3 {
          color: var(--font-color);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .tips ul {
          color: var(--font-color-light);
          line-height: 1.6;
          padding-left: 1rem;
        }

        .tips li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 480px) {
          .offline-container {
            padding: 1rem;
          }
          
          .title {
            font-size: 1.75rem;
          }
          
          .tips {
            padding: 1rem;
          }
        }

        .dark .offline-container {
          background: var(--light-bg);
        }

        .dark .tips {
          background: var(--medium-bg);
        }
      `}</style>
    </div>
  );
};

export default Offline;
