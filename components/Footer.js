
import Image from 'next/image'


export default function Footer() {

  return (
    <>
      <div className="footer">
        <p>©2023 Team Campus </p>
        <div className="social">
          <Image src="/github-mark.png" width={35} height={35} />
          <Image src="/fb-logo-rb.png" width={35} height={35} />
        </div>
      </div>
    </>

  )

}
