"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 items-center border-b py-4 shadow-xl">
      <div className="flex items-center gap-2">
        <Logo />
        <SignedIn>
          <Link href={"/dashboard"}>Dashboard</Link>
        </SignedIn>
      </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="rounded-md">Login / Sign Up</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
