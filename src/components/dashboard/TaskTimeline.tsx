import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock3, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const tasks = [
  {
    title: "Clean Room 205",
    time: "10:00 AM",
    status: "in-progress",
  },
  {
    title: "Fix AC in Room 312",
    time: "10:30 AM",
    status: "pending",
  },
  {
    title: "Deliver extra towels to Room 108",
    time: "11:00 AM",
    status: "done",
  },
  {
    title: "Check minibar in Room 406",
    time: "12:00 PM",
    status: "pending",
  },
];

const statusMap = {
  done: {
    icon: CheckCircle2,
    color: "text-green-600",
  },
  "in-progress": {
    icon: Loader2,
    color: "text-blue-600 animate-spin",
  },
  pending: {
    icon: Clock3,
    color: "text-yellow-500",
  },
};

export default function TaskTimeline() {
  return (
    <Card className="shadow-sm h-full">
      <CardContent className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">
          Today's Tasks
        </h2>

        <div className="space-y-4">
          {tasks.map((task, idx) => {
            const Icon = statusMap[task.status as keyof typeof statusMap].icon;
            const color =
              statusMap[task.status as keyof typeof statusMap].color;

            return (
              <div key={idx} className="flex items-start gap-3">
                <Icon className={cn("w-4 h-4 mt-1", color)} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
