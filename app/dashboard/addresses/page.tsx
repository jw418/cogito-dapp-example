export default function addresses() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-8 p-8 md:p-8 md:w-full">
        <h1 className="text-3xl font-medium">Addresses</h1>
        <p className="font-medium">
          Fund tokens may only be minted and redeemed from whitelisted
          addresses.
        </p>

        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="group border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Address
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Name
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {/* Rows would go here */}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-8 max-w-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Add New Address
            </h3>
            <p className="text-sm text-muted-foreground">
              Please complete KYC approval before whitelisting addresses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
