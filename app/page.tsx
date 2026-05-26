export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Block Slack distractions<br />during deep work sessions
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Deep Work Guardian blocks Slack and Discord while you focus — with smart urgency detection so real emergencies still get through.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on Chrome and Edge.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚫</div>
            <h3 className="font-semibold text-white mb-1">Smart Blocking</h3>
            <p className="text-sm text-[#8b949e]">Blocks Slack and Discord domains using declarativeNetRequest — no loopholes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🚨</div>
            <h3 className="font-semibold text-white mb-1">Urgency Detection</h3>
            <p className="text-sm text-[#8b949e]">Keyword scanning lets critical messages through so you never miss a real emergency.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-semibold text-white mb-1">Session Timers</h3>
            <p className="text-sm text-[#8b949e]">Set focus sessions from 25 to 120 minutes. Blocks lift automatically when time is up.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Block Slack &amp; Discord</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Smart urgency detection</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Custom session lengths</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Block custom domains</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Chrome &amp; Edge support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does urgency detection work?</h3>
            <p className="text-sm text-[#8b949e]">The extension scans notification titles for keywords like "urgent", "critical", or "production down" and temporarily allows access so you can respond to real emergencies without disabling your session.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which browsers are supported?</h3>
            <p className="text-sm text-[#8b949e]">Deep Work Guardian works on Chrome and Edge (any Chromium-based browser). Firefox support is on the roadmap.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I block other sites besides Slack and Discord?</h3>
            <p className="text-sm text-[#8b949e]">Yes. The options page lets you add any domain to your block list — Twitter, Reddit, Hacker News, or anything else that pulls your attention.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} Deep Work Guardian. All rights reserved.</p>
      </footer>
    </main>
  )
}
