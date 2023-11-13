export default function kyc() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-8 p-8 md:p-8 md:w-full">
        <h1 className="text-3xl font-medium">KYC</h1>
        <div
          role="alert"
          className="relative flex w-full rounded-lg border p-4  bg-background text-foreground mt-8"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="h-4 w-4 mr-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"
            ></path>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"
            ></path>
            <path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"></path>
          </svg>
          <div>
            <h5 className="mb-1 font-medium leading-none tracking-tight">
              Notice
            </h5>
            <div className="text-sm ">
              KYC onboarding has not started yet. Please check back for updates!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
