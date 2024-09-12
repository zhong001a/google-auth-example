"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function SigninButton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={() => signIn("google")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
