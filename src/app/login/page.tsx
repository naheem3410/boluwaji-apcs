import { PublicLayout } from "@/components/layout/PublicLayout";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <PublicLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-dianne flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-playfair font-bold">B</span>
            </div>
            <h1 className="font-playfair text-2xl font-bold text-primary">Sign In</h1>
            <p className="text-muted-color text-sm mt-1">Access your Boluwaji APCS account</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-color mb-1.5">Email or Phone</label>
              <input type="text" placeholder="Enter email or phone" className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted-color text-sm focus:outline-none focus:ring-2 focus:ring-blue-dianne" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-color mb-1.5">Password</label>
              <input type="password" placeholder="Enter password" className="w-full px-4 py-2.5 rounded-xl border border-theme bg-secondary text-primary placeholder:text-muted-color text-sm focus:outline-none focus:ring-2 focus:ring-blue-dianne" />
            </div>
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-blue-dianne hover:underline">Forgot password?</Link>
            </div>
            <Button fullWidth size="lg">Sign In</Button>
            <p className="text-center text-sm text-muted-color">
              Not a member?{" "}
              <Link href="/register" className="text-blue-dianne font-medium hover:underline">Join Now</Link>
            </p>
          </div>
        </Card>
      </div>
    </PublicLayout>
  );
}
