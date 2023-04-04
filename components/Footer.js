import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p>©2023 Team Campus </p>
        <div className="mapWrapper">
          <Link href={"https://goo.gl/maps/EmmoMeEQH7Y8ZNt58"}>
            {" "}
            <Image alt="" src="/map-icon.png" width={35} height={35} />
          </Link>
          <p>Solnavägen 3h, 113 63 Stockholm</p>
        </div>
        <div className="social">
          <Link href={"https://github.com/idanygo/mood-project"}>
            {" "}
            <Image alt="" src="/github-mark.png" width={35} height={35} />{" "}
          </Link>

          <Image alt="" src="/fb-logo-rb.png" width={35} height={35} />
        </div>
      </div>
    </>
  );
}
