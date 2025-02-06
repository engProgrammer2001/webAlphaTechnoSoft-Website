import React from "react";

const LocaSeoPackages = () => {
  return (
    <div className="container mx-auto p-6 bg-background rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold py-8 text-center text-[#3b3663]">
        Local SEO Package
      </h1>
      <table className="min-w-full mt-4 border border-border">
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            <th className="p-4 bg-orange-400 border border-border">
              Local SEO Package
            </th>
            <th className="p-4 bg-blue-500 text-black border border-border">
              Basic
            </th>
            <th className="p-4 border border-border bg-yellow-400 text-black">
              Advanced
            </th>
            <th className="p-4 bg-green-500 text-black border border-border">
              Premium
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-border">
            On Page Optimization
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Google My Business Setup & Verification
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Google Places - Photo/Multimedia additions
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Business Listings / Local Citations
            </td>
            <td className="p-4 border border-border">3</td>
            <td className="p-4 border border-border">4</td>
            <td className="p-4 border border-border">7</td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Customer Reviews/Ratings
            </td>
            <td className="p-4 border border-border">1</td>
            <td className="p-4 border border-border">2</td>
            <td className="p-4 border border-border">3</td>
          </tr>
          <tr>
            <td className="p-4 border border-border font-bold" colSpan="4">
              Social Media Optimization (Per Month)
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-border">Social Bookmarking</td>
            <td className="p-4 border border-border">3</td>
            <td className="p-4 border border-border">5</td>
            <td className="p-4 border border-border">10</td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Google Plus Business Page Setup (One Time Activity if not existed)
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">Google Listing Updates</td>
            <td className="p-4 border border-border">2</td>
            <td className="p-4 border border-border">2</td>
            <td className="p-4 border border-border">5</td>
          </tr>
          <tr>
            <td className="p-4 border border-border">Profile listing</td>
            <td className="p-4 border border-border">2</td>
            <td className="p-4 border border-border">3</td>
            <td className="p-4 border border-border">5</td>
          </tr>
          <tr>
            <td className="p-4 border border-border font-bold" colSpan="4">
              Monthly Reporting
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-border">Google Rank Report</td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">SEO Activity Reports</td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Google Analytics Report
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Google My Business (GMB) Insights Report
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border font-bold" colSpan="4">
              Customer Support
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-border">Email, Chat, Phone</td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
          <tr>
            <td className="p-4 border border-border">
              Project Management Tool Tracking
            </td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
            <td className="p-4 border border-border"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4 border border-border font-bold" colSpan="1">
              Per Month Charges + GST (Pay in 50% Advance)
            </td>
            <td className="p-4 text-lg border border-border">₹ 15,999.00 + GST</td>
            <td className="p-4 text-lg border border-border">₹ 21,999.00 + GST</td>
            <td className="p-4 text-lg border border-border">₹ 34,999.00 + GST</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default LocaSeoPackages;
