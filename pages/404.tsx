import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return <div>Halaman tidak tersedia....</div>;
}
