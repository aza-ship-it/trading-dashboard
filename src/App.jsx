import { useState, useEffect } from 'react'
import './App.css'

// Generate watchlist prices outside the component
const initialWatchlistStocks = ['AMZN', 'META', 'NFLX', 'NVDA'].map((symbol) => ({
  symbol,
  price: (Math.random() * 300 + 100).toFixed(2)
}))

function App() {
  const [portfolio, setPortfolio] = useState([
    { id: 1, symbol: 'AAPL', shares: 10, price: 178.45, change: 2.34 },
    { id: 2, symbol: 'GOOGL', shares: 5, price: 142.89, change: -1.23 },
    { id: 3, symbol: 'MSFT', shares: 8, price: 384.22, change: 3.67 },
    { id: 4, symbol: 'TSLA', shares: 15, price: 242.18, change: -5.42 },
  ])
  
  const [selectedStock, setSelectedStock] = useState(null)
  const [tradeAmount, setTradeAmount] = useState('')
  const [activeTab, setActiveTab] = useState('portfolio')

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolio(prev => prev.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 2,
        change: stock.change + (Math.random() - 0.5) * 0.5
      })))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const totalValue = portfolio.reduce((sum, stock) => sum + (stock.shares * stock.price), 0)

  const handleBuy = () => {
    if (selectedStock && tradeAmount) {
      setPortfolio(prev => prev.map(stock => 
        stock.symbol === selectedStock 
          ? { ...stock, shares: stock.shares + parseInt(tradeAmount) }
          : stock
      ))
      setTradeAmount('')
      alert(`Bought ${tradeAmount} shares of ${selectedStock}`)
    }
  }

  const handleSell = () => {
    if (selectedStock && tradeAmount) {
      setPortfolio(prev => prev.map(stock => 
        stock.symbol === selectedStock 
          ? { ...stock, shares: Math.max(0, stock.shares - parseInt(tradeAmount)) }
          : stock
      ))
      setTradeAmount('')
      alert(`Sold ${tradeAmount} shares of ${selectedStock}`)
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>📈 Trading Dashboard</h1>
        <div className="portfolio-summary">
          <span className="total-value">Total Portfolio Value: ${totalValue.toFixed(2)}</span>
        </div>
      </header>

      <div className="tabs">
        <button 
          className={activeTab === 'portfolio' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={activeTab === 'trade' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('trade')}
        >
          Trade
        </button>
        <button 
          className={activeTab === 'watchlist' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('watchlist')}
        >
          Watchlist
        </button>
      </div>

      {activeTab === 'portfolio' && (
        <div className="portfolio-section">
          <h2>My Portfolio</h2>
          <div className="stocks-grid">
            {portfolio.map(stock => (
              <div key={stock.id} className="stock-card" onClick={() => {
                setSelectedStock(stock.symbol)
                setActiveTab('trade')
              }}>
                <div className="stock-header">
                  <h3>{stock.symbol}</h3>
                  <span className={stock.change >= 0 ? 'positive' : 'negative'}>
                    {stock.change >= 0 ? '▲' : '▼'} {Math.abs(stock.change).toFixed(2)}%
                  </span>
                </div>
                <div className="stock-details">
                  <p className="price">${stock.price.toFixed(2)}</p>
                  <p className="shares">Shares: {stock.shares}</p>
                  <p className="value">Value: ${(stock.shares * stock.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'trade' && (
        <div className="trade-section">
          <h2>Execute Trade</h2>
          <div className="trade-form">
            <div className="form-group">
              <label>Select Stock:</label>
              <select 
                value={selectedStock || ''} 
                onChange={(e) => setSelectedStock(e.target.value)}
                className="select-input"
              >
                <option value="">Choose a stock...</option>
                {portfolio.map(stock => (
                  <option key={stock.id} value={stock.symbol}>{stock.symbol}</option>
                ))}
              </select>
            </div>
            
            {selectedStock && (
              <>
                <div className="selected-stock-info">
                  <p>Current Price: ${portfolio.find(s => s.symbol === selectedStock)?.price.toFixed(2)}</p>
                  <p>Your Shares: {portfolio.find(s => s.symbol === selectedStock)?.shares}</p>
                </div>
                
                <div className="form-group">
                  <label>Number of Shares:</label>
                  <input 
                    type="number" 
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="number-input"
                    min="1"
                  />
                </div>
                
                <div className="button-group">
                  <button onClick={handleBuy} className="buy-btn">Buy</button>
                  <button onClick={handleSell} className="sell-btn">Sell</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {activeTab === 'watchlist' && (
        <div className="watchlist-section">
          <h2>Market Watchlist</h2>
          <div className="watchlist-grid">
            {initialWatchlistStocks.map((stock, idx) => (
              <div key={idx} className="watchlist-item">
                <h3>{stock.symbol}</h3>
                <p className="price">${stock.price}</p>
                <button 
                  onClick={() => {
                    setPortfolio([...portfolio, {
                      id: portfolio.length + 1,
                      symbol: stock.symbol,
                      shares: 0,
                      price: parseFloat(stock.price),
                      change: (Math.random() - 0.5) * 10
                    }])
                    alert(`Added ${stock.symbol} to portfolio`)
                  }}
                  className="add-btn"
                >
                  Add to Portfolio
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
