import Welcome from "./Welcome";
import Login from "./Login";

export default function Auth() {
  return (
    <div className="flex h-screen">
      <Welcome />
      <Login />
    </div>
  );
}
