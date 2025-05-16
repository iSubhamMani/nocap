"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from "react";
import { Button } from "./ui/button";

type FormState = "login" | "register";

const AuthCard = ({
  children,
  initialFormState,
}: {
  children: ReactNode;
  initialFormState: FormState;
}) => {
  const [formType, setFormType] = useState<FormState>(initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const pwd = formData.get("password") as string;
    const confirmPwd = formData.get("confirm-password") as string;
    console.log("Email:", email);
    console.log("Password:", pwd);
    if (formType === "register") {
      console.log("Confirm Password:", confirmPwd);
      if (pwd !== confirmPwd) {
        alert("Passwords do not match");
        return;
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-md">
        <DialogHeader>
          <DialogTitle>
            {formType === "register" ? "Register" : "Login"}
          </DialogTitle>
          <DialogDescription>
            {formType === "register"
              ? "Create a new account"
              : "Login to your account"}
          </DialogDescription>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-4">
              <div className="grid gap-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="grid gap-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
              {formType === "register" && (
                <div className="grid gap-4">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-start">
                <p className="text-sm text-white/50">
                  {formType === "register"
                    ? "Already have an account?"
                    : "Don't have an account? "}
                </p>
                <span>
                  {formType === "register" ? (
                    <Button
                      type="button"
                      onClick={() => setFormType("login")}
                      size="sm"
                      variant="ghost"
                      className="font-bold text-pink-400 hover:text-pink-300 p-0 hover:bg-transparent"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={() => setFormType("register")}
                      size="sm"
                      variant="ghost"
                      className="font-bold text-pink-400 hover:text-pink-300 p-0  hover:bg-transparent"
                    >
                      Register
                    </Button>
                  )}
                </span>
              </div>
              <Button
                type="submit"
                className="bg-white/10 text-sm hover:bg-white/20 border border-white/10 text-white rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AuthCard;
