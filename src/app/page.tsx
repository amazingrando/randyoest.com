import Image from "next/image";
import Randy from '@/assets/images/randy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faAt, faSwords, faMicrophone } from '@fortawesome/pro-solid-svg-icons';

export default function Home() {
  return (
    <main className="bg-blue-600 text-white h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex flex-row no-wrap gap-1 items-center w-max">
        <Image
          src={Randy}
          alt="Randy"
          className="w-[4rem] h-[4rem]"
        />
        <div>
          <h1 className="uppercase text-xl md:text-2xl font-bold">
            Randy Oest
          </h1>
        </div>
      </div>

      <ul className="flex flex-row no-wrap gap-1 items-center w-max text-2xl">
        <li><a href="https://www.linkedin.com/in/randyoest/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://www.youtube.com/playlist?list=PL752rfJII3mLqPLfDIb8mYxB-kYHV3-1e"><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href="https://github.com/amazingrando"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://bsky.app/profile/amazingrando.com"><FontAwesomeIcon icon={faBluesky} /></a></li>
        <li><a href="https://drinkinganddragons.com/wiki/Main_Page"><FontAwesomeIcon icon={faSwords} /></a></li>
      </ul>
    </main >
  );
}