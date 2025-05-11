import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../../firebase/FirebaseConfiq";
import { Timestamp, addDoc, collection } from "firebase/firestore";

function Signup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const getPasswordValidationErrors = (password) => {
    const errors = [];

    if (password.length < 8 || password.length > 25) {
      errors.push("Password must be between 8 and 25 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must include at least one number.");
    }

    return errors;
  };

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !number || !email || !password || !confirmPassword) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Passwords do not match");
    }

    const passwordErrors = getPasswordValidationErrors(password);
    if (passwordErrors.length > 0) {
      setLoading(false);
      passwordErrors.forEach((err) => toast.error(err));
      return;
    }

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      const user = {
        logo: `https://ui-avatars.com/api/?name=${name}&background=random`,
        name,
        number,
        uid: users.user.uid,
        email: users.user.email,
        password: confirmPassword,
        rules: "user",
        time: Timestamp.now(),
      };

      await addDoc(collection(fireDB, "usersInfo"), user);

      toast.success("Signup Successfully");

      setName("");
      setNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      window.location.href = "/login";
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists");
      } else {
        toast.error("Signup failed — try again");
        console.error(error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-zinc-950 opacity-90 z-0" />
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-700 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Signup box */}
      <div className="relative z-10 w-full max-w-md bg-zinc-900 text-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        <form onSubmit={signup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="1234567890"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold flex justify-center items-center"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
