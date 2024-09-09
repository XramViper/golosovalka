This is expected, based on your reproduction.

The issue in your case (and likely the same for your @freshtechs) is that you are invoking a Route Handler via fetch from a Server Component. By default, cookies are not passed in a server-side fetch call for security reasons (to avoid accidentally attaching cookies to third-party API calls). You have 2 options:

Don't use a Route Handler: Since you are already in a server context and just reading some data, you can import the function that returns the data directly.
Make sure to pass the headers to the fetch call:
import { headers } from "next/headers"

// ...
const response = await fetch(getApiUrl("api/projects"), {
  method: "GET",
  headers: headers()
})
In your case, option 1 makes more sense.