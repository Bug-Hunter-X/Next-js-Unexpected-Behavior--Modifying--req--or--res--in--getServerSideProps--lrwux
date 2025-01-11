The solution involves creating a copy of the `req.body` object before modifying it.  This prevents unexpected side effects.

```javascript
// pages/my-page.js
export async function getServerSideProps(context) {
  const { req, res } = context;
  // Correct: Create a copy of req.body
  const modifiedBody = { ...req.body, someProperty: 'newValue' }; 

  // ...use modifiedBody instead of req.body...
  console.log(modifiedBody);

  return {
    props: {
      // ... your props
    },
  };
}
```

This ensures that the original `req` object remains unchanged, preventing conflicts with Next.js's internal mechanisms.