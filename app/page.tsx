import { HelloPage1 } from "@/blocks/helloPage1/helloPage1";
import { TrendingCollection } from "@/blocks/trendingCollection/TrendingCollection";
import { TopCreators } from "@/blocks/topCreators/TopCreators";
import { BrowseCategories } from "@/blocks/browseCategories/BrowseCategories";
import { Discover } from "@/blocks/Discover/Discover";
import { MagicMashrooms } from "@/blocks/magicMashrooms/MagicMashrooms";
import { HoeItWorks } from "@/blocks/howItWorks/HowItWorks";
import { JoinUs } from "@/blocks/JoinUs/JoinUs";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <HelloPage1 />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <Discover />
      <MagicMashrooms />
      <HoeItWorks />
      <JoinUs />
    </div>
  );
}
