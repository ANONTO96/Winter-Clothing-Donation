import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";
import Marquee from "react-fast-marquee";

const DonationCampaigns = () => {
    const data = useLoaderData();
    return (
        <div className="lg:w-[80%] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-l from-sky-500 to-purple-500 text-white rounded-3xl w-80 mx-auto mt-20 pb-1 cursor-pointer">
          Donation Campaigns
        </h2>
        <Marquee>
        <div className="text-center w-full text-black font-thin text-3xl lg:text-4xl mb-5 mt-8">
        Support our donation campaigns to spread kindness, bring warmth, and inspire hope. Together, we can transform lives and create a brighter, compassionate world.
          </div>
        </Marquee>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-3 gap-6 my-7">
        {
            data.map(campaign => <CampaignCard campaign={campaign}></CampaignCard>)
        }
        </div>
        </div>
    );
};

export default DonationCampaigns;