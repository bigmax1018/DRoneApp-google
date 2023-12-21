import { Providers, SvelteKitAuth } from 'sk-auth';

export const auth = new SvelteKitAuth({
  jwtSecret: import.meta.env.VITE_JWT_SECRET,
  providers: [
    new Providers.GoogleOAuth2Provider({
      clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_SECRET,
      profile(profile) {
        return { ...profile, provider: 'google' };
      }
    })
  ]
});