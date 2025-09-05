export default interface IPayload {
  sub: string; // Subject (usually user ID)
  username: string; // Username or email
  iat?: number; // Issued at (timestamp)
  exp?: number; // Expiration time (timestamp)
}
