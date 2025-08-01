"use client"
import DashboardSidebar from "@/components/DashboardSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ProfilesAPIClient from "@/APIClients/ProfilesAPIClient";
import { DashboardStoreProvider } from "@/providers/dashboard-store-provider";

interface DashboardProps {
    children: React.ReactNode,
}

export default function DashboardLayout({ children }: DashboardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchUser = async () => {
      const user = await ProfilesAPIClient.getUser();
      setUser(user);
    };

    fetchUser();
    setLoading(false);
  }, []);

  return <div className="flex flex-row overflow-x-hidden">
    <DashboardStoreProvider>
      <SidebarProvider defaultOpen={false}>
	<DashboardSidebar 
	  user={user}
	  loading={loading}
	/>
	<SidebarTrigger className="-ml-1 mx-2 my-4 px-2" />
	<SidebarInset>
	  {children}
	</SidebarInset>
      </SidebarProvider>
    </DashboardStoreProvider>
  </div>
}
