# Next.js Unexpected Behavior: Modifying `req` or `res` in `getServerSideProps`

This repository demonstrates an uncommon bug in Next.js where modifying the `req` or `res` objects within `getServerSideProps` (or similar functions like `getStaticProps` and API routes) leads to unpredictable behavior.

The issue stems from Next.js's internal handling of these objects. Directly mutating them can cause inconsistencies and potentially crash the application.  This bug is subtle because it doesn't always throw an explicit error.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the unexpected behavior (likely a crash or incorrect data rendering).

## Solution

The solution is to avoid directly modifying the `req` or `res` objects. Instead, create copies or use data in a read-only manner. The provided solution showcases how to achieve this using spread syntax. 

## Contributing

Contributions are welcome!