import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto relative z-10 pl-12">
      <ul className="w-full flex items-center space-x-12 p-8 text-white">
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/Skills'>Skills</Link>
        </li>
        <li>
          <Link href='/About'>About</Link>
        </li>
        <li>
          <Link href='/Project'>Project</Link>
        </li>
        <li>
          <a target="_blank" rel="noopener no referrer" href='https://anujshaanblog.vercel.app/' >Blog</a>
        </li>
        <li>
          <Link href='/Contact'>Contact</Link>
        </li>
        <li>
          <Link href='/Socials'>Socials</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar