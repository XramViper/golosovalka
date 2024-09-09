Go to the Google Cloud Console.
**Create a new project or select an existing one.**

1. Navigate to ‘APIs & Services’ > ‘Credentials’.
2. Click on ‘Create Credentials’ and select ‘OAuth client ID’.
3. Set up the consent screen, and choose ‘Web application’ as the application type.
4. Add your application’s URI to ‘Authorized redirect URIs’, typically http://localhost/api/auth/callback/google for local development.
5. Once created, you’ll get your Client ID and Client Secret.

https://karthickragavendran.medium.com/setup-guide-for-nextauth-with-google-and-credentials-providers-in-next-js-13-8f5f13414c1e
