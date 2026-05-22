 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { postAPI, setSession,  ApiResponse } from "@/app/utils/api";
import { setSession } from "@/app/utils/api";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 

//  const handleLogin = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const response = await postAPI("/login", {
//       data: { username, password },
//     });

//     if (response.status === "success" && response.token) {
//       // ✅ store token only (no user in response)
//       setSession(response.token, null);

//       toast.success("Login successful!");

//       router.push("/dashboard");

//     } else {
//       toast.error(response.message || "Invalid credentials");
//     }
//   } catch (error: any) {
//     toast.error(error.message || "Login failed");
//   } finally {
//     setLoading(false);
//   }
// };

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {

    // fake user session
    setSession(
      "dummy-token",
      {
        id: 1,
        full_name: "Admin User",
        email: "admin@gmail.com",
        role: "admin",
      }
    );

    toast.success("Login successful!");
    console.log("Login successful!")

    router.push("/dashboard");

  } catch (error: any) {

    toast.error("Login failed");

  } finally {

    setLoading(false);
  }
};



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-center text-[#103BB5] mb-6">
          Stonebuild Admin Login
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#103BB5] outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#103BB5] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#103BB5] text-white hover:bg-[#103BB5]"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
