"use client";
import React from "react";
import { Button } from "./ui/button";
import { AuthUser } from "@/context";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const NavProfil = () => {
  const { user } = AuthUser();
  return (
    <div className="flex items-center justify-between">
      {/* display when user is login */}
      <div>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>OKE</SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavProfil;
