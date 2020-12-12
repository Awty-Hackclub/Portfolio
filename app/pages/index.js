import Link from 'next/link'

import Navbar from '../utils/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/support">
          <a>Support</a>
        </Link>
      </li>
    </ul>
  )
}
