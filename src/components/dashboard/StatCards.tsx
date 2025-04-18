import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarCheck,
  CalendarPlus,
  DollarSign,
  LogOut,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "New Bookings",
    value: 840,
    icon: CalendarPlus,
    diff: "+20%",
    trend: "up",
  },
  {
    title: "Check-in",
    value: 231,
    icon: CalendarCheck,
    diff: "+15.5%",
    trend: "up",
  },
  {
    title: "Check-out",
    value: 124,
    icon: LogOut,
    diff: "-10.6%",
    trend: "down",
  },
  {
    title: "Total Revenue",
    value: "$123,980",
    icon: DollarSign,
    diff: "+25%",
    trend: "up",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, idx) => (
        <Card key={idx} className="bg-white shadow-sm">
          <CardContent className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">{item.title}</div>
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl font-bold">{item.value}</div>
            <div
              className={cn(
                "text-sm flex items-center gap-1",
                item.trend === "up" ? "text-green-500" : "text-red-500"
              )}
            >
              {item.trend === "up" ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowDownRight className="h-4 w-4" />
              )}
              <span>{item.diff} from last week</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
