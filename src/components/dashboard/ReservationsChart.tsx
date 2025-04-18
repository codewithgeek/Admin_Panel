"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { day: "Sun", reservations: 45 },
  { day: "Mon", reservations: 63 },
  { day: "Tue", reservations: 52 },
  { day: "Wed", reservations: 71 },
  { day: "Thu", reservations: 49 },
  { day: "Fri", reservations: 85 },
  { day: "Sat", reservations: 77 },
];

export default function ReservationsChart() {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">
          Reservations (Last 7 Days)
        </h2>
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="reservations"
                fill="#3b82f6"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
