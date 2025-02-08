import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "5",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "6",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "7",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "8",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "9",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "10",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "11",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "12",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
