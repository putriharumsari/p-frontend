const { VUE_APP_OKTA_CLIENTID, VUE_APP_OKTA_ISSUER } = process.env

export default {
  oidc: {
    clientId: VUE_APP_OKTA_CLIENTID,
    issuer: VUE_APP_OKTA_ISSUER,
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
