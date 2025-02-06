import React from "react";

const SoftwareDevelopment = () => {
  const checkmarkStyle = {
    color: 'green'
  };

  const Checkmark = () => <span style={checkmarkStyle}>&#10004;</span>;

  return (
    <div>
      <div className="container my-5">
        <h2 className="text-3xl py-8 font-bold mb-4 text-center text-[#3b3663]">
          Software Development Packages
        </h2>
        <div className="overflow-auto">
          <table className="table table-bordered">
            {/* Added bg-orange-400 to thead */}
            <thead className="bg-orange-400">
              <tr>
                <th>Software Development Package</th>
                <th>Basic</th>
                <th>Advanced</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {/* Project Planning & Analysis Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Project Planning & Analysis
                </td>
              </tr>
              <tr>
                <td>Requirement Gathering</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Project Feasibility Analysis</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Technical Specification Documentation</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Design Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Design
                </td>
              </tr>
              <tr>
                <td>UI/UX Design</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Prototype Development</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Wireframing</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Development Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Development
                </td>
              </tr>
              <tr>
                <td>Front-End Development</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Back-End Development</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Database Design and Integration</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>API Development</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Integration with Third-Party Services</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Testing & Quality Assurance Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Testing & Quality Assurance
                </td>
              </tr>
              <tr>
                <td>Unit Testing</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Integration Testing</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>User Acceptance Testing (UAT)</td>
                <td></td>
                <td></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Performance Optimization</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Deployment Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Deployment
                </td>
              </tr>
              <tr>
                <td>Basic Deployment</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Continuous Integration/Continuous Deployment (CI/CD)</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Maintenance & Support Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Maintenance & Support
                </td>
              </tr>
              <tr>
                <td>Bug Fixes</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Feature Enhancements</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Security Patches</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Customer Support Section */}
              <tr>
                <td colSpan="4" className="font-semibold bg-gray-200">
                  Customer Support
                </td>
              </tr>
              <tr>
                <td>Email, Chat, Phone Support</td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              <tr>
                <td>Project Management Tool Tracking</td>
                <td></td>
                <td><Checkmark /></td>
                <td><Checkmark /></td>
              </tr>
              {/* Charges Section */}
              <tr>
                <td>
                  <strong>Per Month Charges + GST (Pay 50% Advance)</strong>
                </td>
                <td>49,999.00 + GST</td>
                <td>89,999.00 + GST</td>
                <td>1,49,999.00 + GST</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
