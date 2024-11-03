"use client";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { AuthUser } from "@/context";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const NavProfil = () => {
  const { user, loading, googleSignIn, googleSignOut } = AuthUser();

  const handleSignIn = async () => {
    await googleSignIn();
  };

  const handleSignOut = async () => {
    await googleSignOut();
  };

  return (
    <div className="flex items-center justify-between min-w-[200px]">
      {loading ? (
        <></>
      ) : user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-x-4">
              <button>
                <FaRegUserCircle />
              </button>
              <div>{user.displayName}</div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-2 text-primary">
            <div className="px-2 py-2">
              <h1 className="text-md text-center mb-2 border-b">
                {user.displayName}
              </h1>
              <Button className="w-full text-start text-primary bg-white shadow-none hover:bg-background  px-2 py-2 rounded-md">
                Profile
              </Button>
              <Button
                onClick={handleSignOut}
                className="w-full text-primary bg-white shadow-none hover:bg-background  px-2 py-2 rounded-md"
              >
                Sign Out
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="space-x-2">
          <Button onClick={handleSignIn}>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      )}
    </div>
  );
};

export default NavProfil;
