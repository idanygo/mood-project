import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {

  return (
    <>
      <div className="footer">
        <p>©2023 Team Campus </p>
        <div className="social">
          <Link href={"https://github.com/idanygo/mood-project"}> <Image src="/github-mark.png" width={35} height={35} /> </Link>
          <Image src="/fb-logo-rb.png" width={35} height={35} />
        </div>
      </div>
    </>

  )

}
