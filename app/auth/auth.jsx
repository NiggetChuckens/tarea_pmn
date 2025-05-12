"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from "react";

export const handleLogin = async (email, password, router) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, { email, password });
    if (response.data.success) {
      storeUserId(response.data.user_id);
      router.push('/chat');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again.');
  }
};

export const handleSignup = async (name, email, password) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, { name, email, password });
    if (response.data.success) {
      alert('Signup successful! Please log in.');
    } else {
      alert(response.data.message || 'Signup failed. Please try again.');
    }
  } catch (error) {
    console.error('Error during signup:', error);
    alert('An error occurred. Please try again.');
  }
};

export function storeUserId(userId, rememberMe) {
  if (rememberMe) {
    localStorage.setItem("userId", userId);
  } else {
    sessionStorage.setItem("userId", userId);
  }
}

export function getUserId() {
  return localStorage.getItem("userId") || sessionStorage.getItem("userId");
}