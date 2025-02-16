"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully");
      router.push("/quiz");
    } catch (error) {
      const err = error as Error;
      toast.error(err?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <Card className="w-full max-w-md mx-4">
        <Image
          src="https://learn.themouthpieceng.com/assets/logo-DuZ5KuNq.png"
          alt="Logo"
          width={200}
          height={80}
          className="mx-auto mt-6"
        />
        <CardHeader>
          <CardTitle className="text-center">
            Login to Start Your Quiz
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleAuth}>
          <CardContent className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? <Loader2 className="animate-spin mr-2" /> : null}
              {loading ? "Logging in..." : "Login"}
            </Button>
            <a
              href="https://learn.themouthpieceng.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button type="button" variant="outline" className="w-full">
                Need an account? Sign Up
              </Button>
            </a>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
