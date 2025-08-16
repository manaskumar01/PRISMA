import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
function Login() {
  return (
    <>
        <header>
      <SignedOut>
        <SignInButton afterSignInUrl="/" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </header>
    </>
  )
}

export default Login