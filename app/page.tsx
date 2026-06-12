export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Karibu MarafikiForum</h1>
      <p>Community for friends – jobs, housing, immigration tips. Monetized from day 1.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <a href="/forum" className="p-6 border rounded-xl">Join Discussions</a>
        <a href="/premium" className="p-6 border rounded-xl bg-black text-white">Go Premium $4.99</a>
        <a href="/jobs" className="p-6 border rounded-xl">Post a Job $29</a>
      </div>
    </div>
  )
}
