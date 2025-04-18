import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bookings = [
  {
    name: "John Doe",
    room: "Deluxe Suite",
    checkIn: "Apr 18",
    checkOut: "Apr 21",
    status: "Confirmed",
  },
  {
    name: "Sarah Lee",
    room: "Single Room",
    checkIn: "Apr 19",
    checkOut: "Apr 20",
    status: "Pending",
  },
  {
    name: "Michael Chen",
    room: "Double Room",
    checkIn: "Apr 17",
    checkOut: "Apr 22",
    status: "Confirmed",
  },
  {
    name: "Emily Stone",
    room: "Standard Room",
    checkIn: "Apr 20",
    checkOut: "Apr 23",
    status: "Cancelled",
  },
];

const statusColor = {
  Confirmed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Cancelled: "bg-red-100 text-red-800",
};

export default function BookingListTable() {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-4">
          Recent Bookings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground border-b">
                <th className="text-left py-2 px-3 font-medium">Guest</th>
                <th className="text-left py-2 px-3 font-medium">Room</th>
                <th className="text-left py-2 px-3 font-medium">Check-in</th>
                <th className="text-left py-2 px-3 font-medium">Check-out</th>
                <th className="text-left py-2 px-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2 px-3">{booking.name}</td>
                  <td className="py-2 px-3">{booking.room}</td>
                  <td className="py-2 px-3">{booking.checkIn}</td>
                  <td className="py-2 px-3">{booking.checkOut}</td>
                  <td className="py-2 px-3">
                    <Badge
                      className={`${
                        statusColor[booking.status as keyof typeof statusColor]
                      } rounded px-2 py-1 text-xs`}
                    >
                      {booking.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
