import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import ThemeToggle from "@/components/toggleTheme/ToggleTheme";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { FaUsers, FaGuitar, FaHeartbeat } from 'react-icons/fa';
import MotoCard from "@/components/Card/MotoCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center container">
      <div className="text-4xl md:text-6xl my-8 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Adelaide Nepal
      </div>
      <div className="w-full md:w-1/2 text-lg mb-8 font-bold">
        - Community, Culture & Wellbeing
      </div>
      <div className="w-full md:w-1/2 text-lg mb-8 text-justify">
        Welcome to Adelaide Nepal, a vibrant community-based non-profit
        organization dedicated to uniting, and supporting, the Nepali community
        in South Australia. Our motto is to unite, help, and lift up our
        community through cultural events, well-being activities, and by being
        there for each other.
      </div>
      <div className="flex gap-2 mb-8">
        <div>
          <Link href="/about">
            <PrimaryButton>Learn More</PrimaryButton>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <SecondaryButton>Our Events</SecondaryButton>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 container mx-auto">
      <MotoCard
        icon={FaUsers}
        title="Community"
        content="Building a supportive network for the Nepali community in South Australia."
      />
      <MotoCard
        icon={FaGuitar}
        title="Culture"
        content="Celebrating and preserving Nepali culture through vibrant events."
      />
      <MotoCard
        icon={FaHeartbeat}
        title="Wellbeing"
        content="Promoting health and wellness for a balanced, supportive lifestyle."
      />
    </div>
    </div>
  );
};

export default Home;
