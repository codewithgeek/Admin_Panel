import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import StatCards from "@/components/dashboard/StatCards";
import RoomAvailabilityCard from "@/components/dashboard/RoomAvailabilityCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ReservationsChart from "@/components/dashboard/ReservationsChart";
import BookingPieChart from "@/components/dashboard/BookingPieChart";
import BookingListTable from "@/components/dashboard/BookingListTable";
import TaskTimeline from "@/components/dashboard/TaskTimeline";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6">
          <StatCards />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevenueChart />
            <RoomAvailabilityCard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReservationsChart />
            <BookingPieChart />
            <TaskTimeline />
          </div>
          <BookingListTable />
        </div>
      </main>
    </div>
  );
}
