import { getServerSessionAction } from "@/app/_actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export default async function Auth({searchParams}: {searchParams : {callbackUrl : string}}) {
  const { callbackUrl } = searchParams;
  const session = await getServerSessionAction();
  if (session) {
    redirect(callbackUrl ? callbackUrl : "/");
  }
  return (
    <div className="flex min-h-[80vh] w-full justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col  gap-4">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
