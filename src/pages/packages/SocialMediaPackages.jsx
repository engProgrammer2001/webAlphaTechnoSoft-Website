import React from "react";

const SocialMediaManagement = () => {
  const checkmarkStyle = {
    color: 'green'
  };

  return (
    <div>
      <div className="container my-5">
        <h2 className="text-3xl py-8 font-bold mb-4 text-center text-[#3b3663]">
          Social Media Management Packages
        </h2>
        <div className="overflow-auto">
          <table className="table table-bordered">
            <thead className="bg-orange-400">
              <tr>
                <th>Social Media Management Package</th>
                <th>3 Month</th>
                <th>6 Months</th>
                <th>12 Months</th>
              </tr>
            </thead>
            <tbody>
              {/* Account Set-Up Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Account Set-Up
                </td>
              </tr>
              <tr>
                <td>1. Facebook</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>2. Instagram</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              {/* Content Creation & Scheduling Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Content Creation & Scheduling
                </td>
              </tr>
              <tr>
                <td>8-10 Artwork or Video Reels, Post in a Month</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span> + 5-8 post (Offer)</td>
              </tr>
              <tr>
                <td>Manage Social Media Account (SMM)</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Holiday Covers (Artwork)</td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Monthly Report</td>
                <td></td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              {/* Facebook & Instagram Ads Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Facebook and Instagram Ads
                </td>
              </tr>
              <tr>
                <td>Creating, Consulting & Management of Facebook Ads</td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Continuous Monitoring for Optimal Performance</td>
                <td></td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Lead Generation for Enhanced Conversions</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Creative Graphic Design to Make Your Ads</td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Engaging Content Writing - Ad Text, Captions, Taglines</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Results and Reports for Ads</td>
                <td></td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Campaign Creation (2-3 Monthly)</td>
                <td></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Ad Management Fee: 20% of Monthly Ad Spend</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Target Location: India</td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
                <td><span style={checkmarkStyle}>&#10004;</span></td>
              </tr>
              <tr>
                <td>Total Tax and Extra: 0 INR</td>
                <td>0 INR</td>
                <td>0 INR</td>
                <td>0 INR</td>
              </tr>
              {/* Charges Section */}
              <tr className="text-xl text-[#3b3663]">
                <td>
                  <strong>Total Price (INR) + GST (Pay 50% Advance)</strong>
                </td>
                <td>14,999/- + GST</td>
                <td>29,999/- + GST</td>
                <td>59,999/- + GST</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
