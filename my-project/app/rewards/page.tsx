"use client";
import { useEffect, useState } from "react";

export default function RewardsPage() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([
    { id: 1, name: "Coffee Coupon", cost: 50 },
    { id: 2, name: "Free Flower Bouquet", cost: 200 },
    { id: 3, name: "Discount 10%", cost: 120 },
  ]);
  const [message, setMessage] = useState("");

  // Fetch user (points)
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.user) setUser(data.user);
    };
    fetchUser();
  }, []);

  const buyItem = async (item) => {
    if (!user) return;

    const res = await fetch("/api/rewards/buy", {
      method: "POST",
      body: JSON.stringify({ itemId: item.id }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(`You bought ${item.name}!`);
      setUser({ ...user, points: data.points });
    } else {
      setMessage(data.error);
    }
  };

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Rewards Shop</h1>

      <p className="mb-6 text-lg">
        Your Points: <strong>{user.points}</strong>
      </p>

      {message && (
        <div className="mb-4 p-3 bg-yellow-200 rounded">{message}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="mt-2">Cost: {item.cost} points</p>
            <button
              onClick={() => buyItem(item)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              disabled={user.points < item.cost}
            >
              {user.points < item.cost ? "Not enough points" : "Buy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
