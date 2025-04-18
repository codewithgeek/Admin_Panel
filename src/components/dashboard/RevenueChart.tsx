"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { month: "Dec", revenue: 115000 },
  { month: "Jan", revenue: 132000 },
  { month: "Feb", revenue: 98000 },
  { month: "Mar", revenue: 145000 },
  { month: "Apr", revenue: 123000 },
  { month: "May", revenue: 168000 },
];

export default function RevenueChart() {
  return (
    <Card className="col-span-1 md:col-span-2 shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">
          Revenue (Last 6 Months)
        </h2>
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
