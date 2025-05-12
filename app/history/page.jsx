"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserId } from "../auth/auth";
import Header from "../components/header";
import Footer from "../components/footer";
import HistoryPage from "./history";

export default function History() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = getUserId();
    if (!userId) {
      router.push("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div>
        <Header />
        <HistoryPage />
        <Footer />
    </div>
  );
}
