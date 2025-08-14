export default function Dashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your sales overview.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Leads</h3>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">248</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Opportunities</h3>
            <span className="text-2xl">💼</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">64</p>
          <p className="text-sm text-green-600 mt-2">+8% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Closed Deals</h3>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-red-600 mt-2">-4% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">$124.5k</p>
          <p className="text-sm text-green-600 mt-2">+18% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Pipeline</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <div className="min-w-[280px] bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-3">Qualified (8)</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-sm">Acme Corp</p>
                    <p className="text-xs text-gray-500">$45,000</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-sm">TechStart Inc</p>
                    <p className="text-xs text-gray-500">$30,000</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[280px] bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-3">Proposal (5)</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-sm">Global Systems</p>
                    <p className="text-xs text-gray-500">$75,000</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-sm">DataFlow Pro</p>
                    <p className="text-xs text-gray-500">$55,000</p>
                  </div>
                </div>
              </div>

              <div className="min-w-[280px] bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-700 mb-3">Negotiation (3)</h3>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-medium text-sm">Enterprise Co</p>
                    <p className="text-xs text-gray-500">$120,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">New lead from website</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Deal closed: TechCorp</p>
                  <p className="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Meeting scheduled with ABC Inc</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-gray-900">Proposal sent to DataFlow</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}