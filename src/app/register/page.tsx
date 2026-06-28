import { PublicLayout } from "@/components/layout/PublicLayout";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function RegisterPage() {
  return (
    <PublicLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-dianne flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-playfair font-bold">B</span>
          </div>
          <h1 className="font-playfair text-2xl font-bold text-primary mb-2">Join Boluwaji APCS</h1>
          <p className="text-muted-color text-sm mb-6">Full registration form coming in the next step.</p>
          <Link href="/login"><Button variant="outline" fullWidth>Already have an account? Sign In</Button></Link>
        </Card>
      </div>
    </PublicLayout>
  );
}
