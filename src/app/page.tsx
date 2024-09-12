import SigninButton from "./components/signin-button.component";
import SignOutButton from "./components/signout-button.component";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SigninButton />
      <SignOutButton />
    </div>
  );
}
