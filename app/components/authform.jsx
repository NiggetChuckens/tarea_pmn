"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AuthPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    console.log("Signing in with:", { email, password })
    router.push("/chat")
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log("Signing up with:", { name, email, password })
    setIsLogin(true)
    router.push("/chat")
  }

  return (
    <div className="container-fluid vh-100 p-0 overflow-hidden">
      <div className="row h-100 m-0">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center position-relative p-4 p-md-5">
          {/* Logo */}
          <div className="position-absolute top-0 start-0 m-4">
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center bg-primary rounded"
                style={{ width: "32px", height: "32px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                  style={{ width: "16px", height: "16px" }}
                >
                  <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                  <path d="M4 12h16" />
                  <path d="M9 12v4" />
                  <path d="M15 12v4" />
                </svg>
              </div>
              <span className="fs-5 fw-bold ms-2">Feeling Analyzer</span>
            </div>
          </div>

          {/* Form container */}
          <div className="mx-auto" style={{ maxWidth: "400px" }}>
            <div className="position-relative overflow-hidden">
              <div
                className="d-flex"
                style={{
                  transform: isLogin ? "translateX(-424px)" : "translateX(0)",
                  transition: "transform 500ms ease-in-out",
                  width: "800px",
                }}
              >
                {/* Sign Up Form */}
                <div className="w-75 flex-shrink-0 me-4" style={{ maxWidth: "400px" }}>
                  <div className="mb-4">
                    <p className="text-muted small">Start your journey</p>
                    <h1 className="mt-1 fs-3 fw-bold">Sign Up to Feeling Analyzer</h1>
                  </div>

                  <form onSubmit={handleSignUp}>
                    <div className="mb-3">
                      <label htmlFor="signup-name" className="form-label small fw-medium">
                        Full Name
                      </label>
                      <div className="position-relative">
                        <input
                          id="signup-name"
                          type="text"
                          className="form-control"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <div className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signup-email" className="form-label small fw-medium">
                        E-mail
                      </label>
                      <div className="position-relative">
                        <input
                          id="signup-email"
                          type="email"
                          className="form-control pe-5"
                          placeholder="example@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: "16px", height: "16px" }}
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="signup-password" className="form-label small fw-medium">
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          className="form-control pe-5"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="btn btn-link position-absolute top-50 end-0 translate-middle-y pe-3 text-muted p-0"
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                              <line x1="2" x2="22" y1="2" y2="22" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-4">
                      Sign Up
                    </button>
                  </form>

                  <div className="position-relative d-flex align-items-center py-2 mb-4">
                    <div className="flex-grow-1 border-top border-light"></div>
                    <span className="mx-3 text-muted small">or sign up with</span>
                    <div className="flex-grow-1 border-top border-light"></div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                          <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-center small">
                    Have an account?{" "}
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="btn btn-link p-0 fw-medium text-decoration-none"
                    >
                      Sign In
                    </button>
                  </div>
                </div>

                {/* Login Form */}
                <div className="w-100 flex-shrink-0" style={{ maxWidth: "400px" }}>
                  <div className="mb-4">
                    <p className="text-muted small">Welcome back</p>
                    <h1 className="mt-1 fs-3 fw-bold">Sign In to Feeling Analyzer</h1>
                  </div>

                  <form onSubmit={handleSignIn}>
                    <div className="mb-3">
                      <label htmlFor="login-email" className="form-label small fw-medium">
                        E-mail
                      </label>
                      <div className="position-relative">
                        <input
                          id="login-email"
                          type="email"
                          className="form-control pe-5"
                          placeholder="example@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <div className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: "16px", height: "16px" }}
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <label htmlFor="login-password" className="form-label small fw-medium mb-0">
                          Password
                        </label>
                        <a href="#" className="small fw-medium text-decoration-none">
                          Forgot password?
                        </a>
                      </div>
                      <div className="position-relative mt-2">
                        <input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          className="form-control pe-5"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="btn btn-link position-absolute top-50 end-0 translate-middle-y pe-3 text-muted p-0"
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                              <line x1="2" x2="22" y1="2" y2="22" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mb-4 form-check">
                      <input type="checkbox" className="form-check-input" id="remember-me" />
                      <label className="form-check-label small" htmlFor="remember-me">
                        Remember me
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-4">
                      Sign In
                    </button>
                  </form>

                  <div className="position-relative d-flex align-items-center py-2 mb-4">
                    <div className="flex-grow-1 border-top border-light"></div>
                    <span className="mx-3 text-muted small">or sign in with</span>
                    <div className="flex-grow-1 border-top border-light"></div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                          <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          style={{ width: "20px", height: "20px" }}
                        >
                          <path
                            d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-center small">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={toggleForm}
                      className="btn btn-link p-0 fw-medium text-decoration-none"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with background image */}
        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="w-100 h-100 position-relative">
            <Image
              src="https://storage.googleapis.com/chile-travel-cdn/2021/08/completo-italiano.jpg"
              alt="App background image"
              fill
              sizes="50vw"
              priority
              className="object-fit-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
