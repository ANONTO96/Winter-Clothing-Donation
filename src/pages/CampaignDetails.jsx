import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Toaster } from "react-hot-toast";

const CampaignDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const details = data.find((item) => item.id === parseInt(id));

    const { donationToast } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        additionalNotes: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        donationToast();
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="min-h-screen bg-gray-100 py-8">
                <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6">
                    {/* Campaign Details */}
                    <div className="mb-6">
                        <img
                            src={details.image}
                            alt={details.title}
                            className="w-full h-64 object-contain rounded-lg"
                        />
                        <h2 className="text-2xl font-bold mt-4">{details.title}</h2>
                        <p className="text-gray-700 mt-2">{details.description}</p>
                        <div className="mt-4">
                            <span className={`mr-2 badge ${details.status === "Ongoing"
                                ? "badge-warning"
                                : "badge-secondary"
                                }`}>{details.status}</span>
                            <span className="badge badge-outline">{details.division}</span>
                        </div>
                        <p className="mt-2 text-gray-500">Contact: {details.contactInfo}</p>
                    </div>

                    {/* Donation Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h3 className="text-xl font-semibold">Donate Items</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="Enter quantity"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Type</span>
                            </label>
                            <select
                                name="itemType"
                                value={formData.itemType}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="" disabled>
                                    Select item type
                                </option>
                                <option value="Blanket">Blanket</option>
                                <option value="Jacket">Jacket</option>
                                <option value="Sweater">Sweater</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input
                                type="text"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                placeholder="Enter your location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Additional Notes (Optional)</span>
                            </label>
                            <textarea
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                placeholder="Any additional instructions"
                                className="textarea textarea-bordered w-full"
                            />
                        </div>
                        <button type="submit" className="btn btn-info w-full">
                            <Toaster></Toaster>
                            Submit Donation
                        </button>
                    </form>
                </div>
            </div>
    );
};

export default CampaignDetails;