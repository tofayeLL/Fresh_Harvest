"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "@/components/home/LoginForm";
import SignupForm from "@/components/home/SignupForm";
import { FC } from "react";

interface CombineModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  authView: "login" | "signup";
  setAuthView: (view: "login" | "signup") => void;
}

const CombineModal: FC<CombineModalProps> = ({ open, setOpen, authView, setAuthView }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="lg:max-w-md ">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl capitalize">
            {authView === "login" ? "Login" : "Sign Up"}
          </DialogTitle>
        </DialogHeader>

        {authView === "login" ? (
          
            <LoginForm switchToSignup={() => setAuthView("signup")} />
          
        ) : (
          <SignupForm switchToLogin={() => setAuthView("login")} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CombineModal;
