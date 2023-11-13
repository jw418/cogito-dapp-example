"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-8 p-4 md:p-8 md:w-full">
      <h2 className="sr-only">Steps</h2>

      <div>
        <ol className="grid grid-cols-1 divide-x divide-y divide-gray-300 overflow-hidden rounded-lg border border-gray-300 text-sm text-gray-500 md:grid-cols-4">
          <Link href="/dashboard/kyc">
            <li className="flex items-center md:justify-center gap-2 p-2 lg:p-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-secondary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-6 w-6 text-primary-foreground"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>

              <span className="ml-2 font-medium text-primary">
                Complete KYC
              </span>
            </li>
          </Link>
          <Link href="/dashboard/kyc">
            <li className="flex items-center md:justify-center gap-2 p-2 lg:p-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary group-hover:bg-secondary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-6 w-6 text-primary-foreground"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>

              <span className="ml-2 font-medium text-primary">Submit KYC</span>
            </li>
          </Link>

          <li className="flex items-center md:justify-center gap-2 p-2 lg:p-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300">
              <span className="">03</span>
            </span>

            <span className="ml-2 font-medium">Whitelist Addresses</span>
          </li>

          <li className="flex items-center md:justify-center gap-2 p-2 lg:p-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300">
              <span className="">04</span>
            </span>

            <span className="ml-2 font-medium">Ready to trade</span>
          </li>
        </ol>
      </div>
      <h1 className="text-2xl font-bold tracking-tight">Welcome, </h1>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Your Portfolio
          </h3>
        </div>
        <div className="p-6 pt-0">
          <h2 className="text-3xl tracking-tight">
            <span className="mr-2 font-extrabold">0</span>GFUND
          </h2>
          <h2 className="text-3xl tracking-tight">
            <span className="mr-2 font-extrabold">0</span>TFUND
          </h2>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Recent Transactions
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <caption className="mt-4 text-sm text-muted-foreground">
                No recent transactions.
              </caption>
              <thead className="[&amp;_tr]:border-b">
                <tr className="group border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"></th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Timestamp
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Address
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Action
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Value
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
