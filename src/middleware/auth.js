// src/middleware/auth.js
// Simple authentication middleware for a Node/Express style server.
// Checks for an Authorization header with a Bearer token. If the token is
// missing or invalid, it responds with a 401 status and a JSON error payload.
// Otherwise it calls `next()` to continue the request chain.

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function authMiddleware(req, res, next) {
  // Expect a header like "Authorization: Bearer <token>"
  const authHeader = req.headers && req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  const token = parts[1];
  // In a real app you'd verify the token (e.g., JWT). Here we accept a static token.
  const VALID_TOKEN = 'secret-token';
  if (token !== VALID_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }

  // Token is valid – continue processing.
  next();
}

module.exports = authMiddleware;
