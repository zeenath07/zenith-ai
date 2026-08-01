"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">

        <div className="flex items-center justify-between">

          <Label>Password</Label>

          <button
            type="button"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            Forgot Password?
          </button>

        </div>

        <div className="relative">

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

      </div>

      <Button
        className="w-full bg-cyan-500 hover:bg-cyan-400"
      >
        Sign In
      </Button>

    </form>
  );
}