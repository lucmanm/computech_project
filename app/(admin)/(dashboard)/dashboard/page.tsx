import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Container from "@/app/(admin)/(dashboard)/dashboard/components/Container";
import { redirect } from "next/navigation";
import Overview from "./components/overview";

const adminDashboard = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <Container title="Dashboard">
        <Overview/>
        <h2> Welcome:{session?.user.username}</h2>
      </Container>
    );
  }
  else{
    redirect("/sign-in")
  }
};

export default adminDashboard;
