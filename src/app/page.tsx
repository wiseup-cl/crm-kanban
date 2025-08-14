'use client';

// Mock data for design mode
const mockData = {
  stats: [
    { label: 'Orders', value: '201', change: '+8.2%', changeType: 'positive', icon: '📦', since: 'since last month' },
    { label: 'Approved', value: '36', change: '+9.4%', changeType: 'positive', icon: '✅', since: 'since last month' },
    { label: 'Users', value: '4,890', change: '', changeType: 'neutral', icon: '👥', since: 'since last month' },
    { label: 'Subscriptions', value: '1,201', change: '', changeType: 'neutral', icon: '💳', since: 'since last month' },
    { label: 'Month total', value: '25410', change: '+0.2%', changeType: 'positive', icon: '$', since: 'since last month' },
    { label: 'Revenue', value: '1352', change: '-1.2%', changeType: 'negative', icon: '💰', since: 'since last month' }
  ],
  customers: [
    { name: 'Press', location: 'London', date: '22.08.2022', status: 'Delivered', price: '$920', avatar: 'https://ui-avatars.com/api/?name=Press&background=4f8ff7&color=fff' },
    { name: 'Martha', location: 'Man city', date: '24.08.2022', status: 'Processed', price: '$452', avatar: 'https://ui-avatars.com/api/?name=Martha&background=10b981&color=fff' },
    { name: 'Alex', location: 'Unknown', date: '18.08.2022', status: 'Cancelled', price: '$1200', avatar: 'https://ui-avatars.com/api/?name=Alex&background=ef4444&color=fff' },
    { name: 'Robert', location: 'New York', date: '03.08.2022', status: 'Delivered', price: '$1235', avatar: 'https://ui-avatars.com/api/?name=Robert&background=8b5cf6&color=fff' }
  ]
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1a1d23] p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>01.08.2022 - 31.08.2022</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span>📅</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-6 bg-blue-500 rounded-full flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full ml-auto mr-0.5"></div>
                </div>
              </div>
              <span className="text-gray-400">🌙</span>
            </div>
            <img 
              src="https://ui-avatars.com/api/?name=Kristi+Kamlykova&background=4f8ff7&color=fff&size=40" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white">Kristi Kamlykova</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockData.stats.map((stat, index) => (
            <div key={index} className="bg-[#262b35] rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              {stat.change && (
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 text-xs">{stat.since}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sales Chart */}
          <div className="lg:col-span-2 bg-[#262b35] rounded-xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Sales dynamics</h2>
              <select className="bg-transparent text-gray-400 border border-gray-600 rounded px-3 py-1">
                <option>2021</option>
              </select>
            </div>
            
            {/* Mock chart */}
            <div className="h-64 flex items-end justify-between gap-2 mb-4">
              {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((month, i) => (
                <div key={month} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col justify-end h-48 gap-1">
                    <div className={`w-full rounded-sm ${i % 2 === 0 ? 'bg-blue-500' : 'bg-blue-400'}`} 
                         style={{height: `${Math.random() * 80 + 20}%`}}></div>
                    <div className={`w-full rounded-sm ${i % 3 === 0 ? 'bg-gray-600' : 'bg-gray-700'}`} 
                         style={{height: `${Math.random() * 60 + 10}%`}}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">{month}</span>
                </div>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>400k</span>
              <br />
              <span>300k</span>
              <br />
              <span>200k</span>
              <br />
              <span>100k</span>
              <br />
              <span>0</span>
            </div>
          </div>

          {/* Customer Orders */}
          <div className="bg-[#262b35] rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-6">Customer order</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-5 text-xs text-gray-500 uppercase tracking-wide pb-2">
                <span>Profile</span>
                <span>Address</span>
                <span>Date</span>
                <span>Status</span>
                <span>Price</span>
              </div>
              
              {mockData.customers.map((customer, index) => (
                <div key={index} className="grid grid-cols-5 gap-3 py-3 border-b border-gray-700 last:border-b-0 items-center">
                  <div className="flex items-center gap-2">
                    <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full" />
                    <span className="text-white text-sm truncate">{customer.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm truncate">{customer.location}</span>
                  <span className="text-gray-400 text-sm">{customer.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                    customer.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                    customer.status === 'Processed' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>{customer.status}</span>
                  <span className="text-white font-semibold">{customer.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-[#262b35] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-purple-400">💰</span>
                </div>
                <span className="text-gray-400 text-sm">Paid Invoices</span>
              </div>
              <div className="text-right">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  +15%
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">$30256.23</span>
            <p className="text-xs text-gray-500 mt-1">Current Financial Year</p>
          </div>

          <div className="bg-[#262b35] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-green-400">💼</span>
                </div>
                <span className="text-gray-400 text-sm">Funds received</span>
              </div>
              <div className="text-right">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  +89%
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">$150256.23</span>
            <p className="text-xs text-gray-500 mt-1">Current Financial Year</p>
          </div>
        </div>
    </div>
  );
}