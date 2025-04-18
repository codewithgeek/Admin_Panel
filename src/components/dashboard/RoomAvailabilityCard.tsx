import { Card, CardContent } from "@/components/ui/card";

const data = [
  { label: "Occupied", value: 286, color: "bg-red-400" },
  { label: "Reserved", value: 87, color: "bg-yellow-400" },
  { label: "Available", value: 32, color: "bg-green-400" },
  { label: "Not Ready", value: 13, color: "bg-gray-300" },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

export default function RoomAvailabilityCard() {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">
          Room Availability
        </h2>

        {/* Segmented Bar */}
        <div className="flex w-full h-3 overflow-hidden rounded-full mb-4">
          {data.map((item, idx) => {
            const width = (item.value / total) * 100;
            return (
              <div
                key={idx}
                className={`${item.color}`}
                style={{ width: `${width}%` }}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <div className="flex-1 flex justify-between">
                <span>{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
