import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const CampaignCard = ({ campaign }) => {
  const { user } = useContext(AuthContext)
  return (
    <Link
     to={user? `/donationCampaigns/${campaign.id}` : '/login'}>
                <div key={campaign.id} className="card bg-white shadow-xl rounded-xl border">
                  <figure>
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-[70%] h-72 rounded-t-lg"
                    />
                  </figure>
                  <div className="card-body p-4 h-64">
                    <h2 className="card-title text-xl font-semibold">
                      {campaign.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {campaign.description}
                    </p>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span className="badge badge-outline">{campaign.division}</span>
                      <span
                        className={`badge ${campaign.status === "Ongoing"
                            ? "badge-warning"
                            : "badge-secondary"
                          }`}
                      >
                        {campaign.status}
                      </span>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <Link to={`/donationCampaigns/${campaign.id}`}
                        className="btn text-white bg-gradient-to-r from-sky-500 to-purple-500"
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>
                </div>
                </Link>
  );
};

export default CampaignCard;