import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-none z-50">
      <div className="container mx-auto">
        <Card className="bg-white shadow-none text-midnight-blue text-sm">
          <CardHeader className="text-center">
            <CardTitle className="font-bold text-xs">Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center justify-center space-x-4">
            <Link href="/" legacyBehavior passHref>
              <span className="text-midnight-blue cursor-pointer">About</span>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <span className="text-midnight-blue cursor-pointer">Expertise</span>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <span className="text-midnight-blue cursor-pointer">Procedure</span>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <span className="text-midnight-blue cursor-pointer">Contact</span>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <span className="text-midnight-blue cursor-pointer">Login</span>
            </Link>
          </CardContent>
          <CardFooter className="text-center text-gray-500 mt-4">
            ©2016 - 2024 DEYI Consultants. All rights reserved.
          </CardFooter>
        </Card>
      </div>
    </footer>
  );
}