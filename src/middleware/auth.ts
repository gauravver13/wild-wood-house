import jwt from 'jsonwebtoken';

// Define JwtPayload type if it does not exist in the module
interface JwtPayload {
  userId: string;
}

// Function to set token in local storage and cookies
export function setToken(token: string) {
  // Store token in local storage
  localStorage.setItem('token', token);

  // Store token in cookies
  document.cookie = `token=${token}; path=/;`;
}

// Function to get token from local storage or cookies
export function getToken(): string | null {
  // Retrieve token from local storage
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }

  // Retrieve token from cookies
  const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
  if (match) {
    return match[2];
  }

  return null;
}

// Middleware to authenticate JWT token and attach userId
export function authenticate(request: Request): JwtPayload | null {
  console.log('Authenticating request...');
  const authHeader = request.headers.get('Authorization');
  console.log('Authorization header:', authHeader);
  // const token = authHeader?.split(' ')[1]; // Expecting "Bearer token"
  const token = authHeader; // Expecting "Bearer token"

  if (!token) {
    console.log("No token provided");
    return null; // No token provided
  }

  try {
    // Decode the token using the secret from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    console.log("DECODED:", decoded);
    console.log("Successfully retreiving profile data");
    return decoded;
  } catch (error) {
    return null; // Invalid or expired token
  }
}

// Dummy code to demonstrate setting and getting items in localStorage and cookies
export function setItem(key: string, value: string) {
  // Store item in local storage
  localStorage.setItem(key, value);

  // Store item in cookies
  document.cookie = `${key}=${value}; path=/;`;
}

export function getItem(key: string): string | null {
  // Retrieve item from local storage
  const value = localStorage.getItem(key);
  if (value) {
    return value;
  }

  // Retrieve item from cookies
  const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
  if (match) {
    return match[2];
  }

  return null;
}