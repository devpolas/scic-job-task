"use client";

import { useEffect, useState } from "react";
import { getMe, logout } from "./auth";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    getMe().then((user) => setIsAuth(!!user));
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsAuth(false); // update state
  };
  return { isAuth, handleLogout };
}
