import OktaSignIn from '@okta/okta-signin-widget'
import { OktaAuth } from '@okta/okta-auth-js'

const oktaSignIn = new OktaSignIn({
  baseUrl: 'https://dev-90532266.okta.com',
  clientId: '0oa7trrhn4KNtoBcu5d7',
  redirectUri: process.env.VUE_APP_FRONTEND_BASE_URL + '/login/callback',
  authParams: {
    pkce: true,
    issuer: 'https://dev-90532266.okta.com/oauth2/default',
    display: 'page',
    scopes: ['openid', 'profile', 'email']
  },
  features: { registration: true },
  language: 'de'
})

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-90532266.okta.com/oauth2/default',
  clientId: '0oa7trrhn4KNtoBcu5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email']
})

export { oktaAuth, oktaSignIn }
