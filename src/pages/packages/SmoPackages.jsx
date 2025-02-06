import React from "react";

const SmoPackages = () => {
  return (
    <div>
      <div className="p-8 prose dark:prose-invert">
        <h1 className="text-3xl text-center py-8 font-bold text-[#3b3663] ">
          Our SMO Packages
        </h1>
        <div className="p-6 bg-background rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-foreground mb-4 text-[#3b3663]">
            SOCIAL MEDIA OPTIMIZATION
            (Facebook/Twitter/Instagram/Linkedin/GMB/Pinterest)
          </h2>
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-orange-400 text-black">
                <th className="border border-border p-2">
                  Page Creation/ Optimization
                </th>
                <th className="border border-border p-2">Platform-Any 2</th>
                <th className="border border-border p-2">Platform-Any 4</th>
                <th className="border border-border p-2">All Platform</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Posting (Per Week)</td>
                <td className="border border-border p-2">3</td>
                <td className="border border-border p-2">5</td>
                <td className="border border-border p-2">Daily</td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  Likes / Followers Growth
                </td>
                <td className="border border-border p-2">5%</td>
                <td className="border border-border p-2">15%</td>
                <td className="border border-border p-2">25%</td>
              </tr>
              <tr>
                <td className="border border-border p-2">Content Sharing</td>
                <td className="border border-border p-2"></td>
                <td className="border border-border p-2"></td>
                <td className="border border-border p-2"></td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  Price (Per Month Charges)
                </td>
                <td className="border border-border p-2">₹ 9999.00 + GST</td>
                <td className="border border-border p-2">₹ 23999.00 + GST</td>
                <td className="border border-border p-2">₹ 29999.00 + GST</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-4 text-[#3b3663]">
            SOCIAL MEDIA CREATIONS (Mandatory)
            (Facebook/Twitter/Instagram/Linkedin/GMB/Pinterest)
          </h2>
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-orange-400 text-black">
                <th className="border border-border p-2">Page Creation</th>
                <th className="border border-border p-2">Platform-Any 4</th>
                <th className="border border-border p-2">Platform-Any 6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2">Posting (Per Week)</td>
                <td className="border border-border p-2">3</td>
                <td className="border border-border p-2">4</td>
              </tr>
              <tr>
                <td className="border border-border p-2">
                  Price (Per Month Charges)
                </td>
                <td className="border border-border p-2">₹ 7999.00 + GST</td>
                <td className="border border-border p-2">₹ 25999.00 + GST</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SmoPackages;
