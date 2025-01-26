import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import getDb from '@/lib/db';
import crypto from 'crypto';
import { sendEmail } from '@/lib/email'; // Resend or email service integration

export const POST = async (req) => {
  try {
    // Parse request body
    const { firstName, lastName, email, phone, password } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return new Response(
        JSON.stringify({ error: 'Password must be at least 8 characters.' }),
        { status: 400 }
      );
    }

    // Get database connection
    const db = await getDb();
    const users = db.collection('users');

    // Check if user with the given email already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'User already exists.' }),
        { status: 409 }
      );
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a secure email verification token
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');

    // Create a new user object
    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      emailVerified: false,
      emailVerificationToken,
      createdAt: new Date(),
    };

    // Insert the new user into the database
    const result = await users.insertOne(newUser);

    // Generate a JWT for the new user
    const token = jwt.sign(
      { userId: result.insertedId, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send a response with the JWT and a success message
    return new Response(
      JSON.stringify({
        message: 'User created successfully. Please verify your email.',
        token,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during signup:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500 }
    );
  }
};
