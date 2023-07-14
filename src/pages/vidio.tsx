import { useEffect, useState } from "react";
import Footer from "components/Footer";
import Headers from "components/Headers";

export default function Vidio() {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const notificationCountElement = document.querySelector(
      ".notification-count"
    ) as HTMLSpanElement;

    if (notificationCountElement) {
      const count = parseInt(notificationCountElement.textContent || "0");
      setUnreadCount(count);
    }
  }, []);

  function hasUnread(): boolean {
    return unreadCount > 0;
  }

  // Usage example:
  console.log(unreadCount); // Output: 0
  console.log(hasUnread()); // Output: false

  console.log(unreadCount); // Output: 1
  console.log(hasUnread()); // Output: true

  return (
    <>
      <div className="w-screen flex justify-center mt-8">
        <Headers />
      </div>

      <div className="md:px-24 px-12 pt-12 md:pt-24 pb-12 lg:px-48">
        <p className="text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl font-semibold leading-relaxed mb-24">
          Vidio: Question 4
        </p>
        <p className="text-[#1A1A1A] text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
            unreadCount: {unreadCount}
        </p>
        <p className="text-[#1A1A1A] text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed">
            hasUnread: {hasUnread() ? "true" : "false"}
        </p>

        <button className="mt-24 bg-zinc-600 text-white p-4" onClick={() => setUnreadCount(unreadCount+1)}>
            Increment Unread Count
        </button>
        <button className="mt-24 ml-24 bg-red-600 text-white p-4" onClick={() => setUnreadCount(0)}>
            Reset
        </button>
      </div>

      <Footer />
    </>
  );
}