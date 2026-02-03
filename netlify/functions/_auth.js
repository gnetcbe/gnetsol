function decodeJwtPayload(token) {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid JWT structure");
  }

  const payload = parts[1];

  const decoded = Buffer.from(payload, "base64").toString("utf8");

  return JSON.parse(decoded);
}

async function verifyToken(authHeader) {
  if (!authHeader) {
    throw new Error("Authorization header missing");
  }

  const token = authHeader.replace("Bearer", "").trim();

  if (!token || token === "null" || token === "undefined") {
    throw new Error("Token missing or invalid");
  }

  let decoded;

  try {
    decoded = decodeJwtPayload(token);
  } catch (err) {
    console.error("JWT decode error:", err);
    throw new Error("Invalid token format");
  }

  // Required Supabase fields
  if (!decoded.sub || !decoded.email || !decoded.exp) {
    throw new Error("Invalid token payload");
  }

  // Expiry check
  if (decoded.exp * 1000 < Date.now()) {
    throw new Error("Token expired");
  }

  return decoded;
}

module.exports = { verifyToken };
