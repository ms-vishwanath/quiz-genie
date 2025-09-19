"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div>
      <div>
        <Logo />
        <Link href={"/dashboard"} />
      </div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button className="gradient-button">Login / Sign Up</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
