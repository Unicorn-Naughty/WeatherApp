import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      404
      <Link to={"/"}>Go back</Link>
    </div>
  );
}
