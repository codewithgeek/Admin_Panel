"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Airbnb", value: 480 },
  { name: "Booking.com", value: 350 },
  { name: "Direct", value: 210 },
  { name: "Expedia", value: 140 },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

export default function BookingPieChart() {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">
          Bookings by Platform
        </h2>
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
