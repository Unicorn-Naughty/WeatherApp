import { InfinitySpin } from "react-loader-spinner";
export default function Spinner() {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#000200"
      ariaLabel="infinity-spin-loading"
    />
  );
}
