import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TotalAmountBox from "../components/TotalAmountBox";
import { useLocation } from "react-router-dom";
import phonepayqr from "../assets/images/qrcode1.png";
import ocean from "../assets/images/ocean1.jpg";

const CheckoutPage = () => {
  // const total = useSelector((state) => state.packages.total);
  const location = useLocation();
  const { selectedPackages, total, quantities } = location.state;
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [advancePaid, setAdvancePaid] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Hotel booking - 1200 per night (max-2 people)",
      price: 1200,
    },
    {
      id: 2,
      name: "North Goa Sightseeing - 350 per person",
      price: 350,
    },
    {
      id: 3,
      name: "South Goa Sightseeing - 350 per person",
      price: 350,
    },
    {
      id: 4,
      name: "Scuba Diving + water activities - 350 per person",
      price: 350,
    },
    {
      id: 5,
      name: "Dudhsagar Waterfall - 2500 per person",
      price: 2500,
    },
    {
      id: 6,
      name: "Dinner Cruise - 1200 per person",
      price: 1200,
    },
  ];

  // Get details for the selected packages
  const selectedPackageDetails = packages.filter((pkg) =>
    selectedPackages.includes(pkg.id)
  );

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  // const handleFormSubmit = async () => {

  //   setIsLoading(true);
  //   const name = document.getElementById("name").value;
  //   const phone = document.getElementById("phone").value;

  //   // Create the payload with the form data and selected package details
  //   const bookingData = {
  //     name,
  //     phone,
  //     totalAmount: total,
  //     advancePaid, // Include the advance payment status
  //     selectedPackages: selectedPackages.map((pkgId) => {
  //       const pkg = packages.find((p) => p.id === pkgId);
  //       return {
  //         id: pkg.id,
  //         price: pkg.price,
  //         quantity: quantities[pkg.id]?.numberOfPeople || 1,
  //       };
  //     }),
  //   };

  //   // Send the data to the backend to create the booking
  //   try {
  //     const response = await fetch(
  //       "https://customizegoabackend.onrender.com/api/booking/create-booking",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(bookingData),
  //       }
  //     );

  //     const result = await response.json();
  //     if (response.status === 201) {
  //       alert("Booking Confirmed!");
  //       // Redirect to a confirmation page or thank you page
  //     } else {
  //       alert("Error creating booking: " + result.message);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while confirming the booking.");
  //   } finally {
  //     setIsLoading(false); // Reset loading state after submission
  //   }
  // };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // Create the payload with the form data and selected package details
    const bookingData = {
      name,
      phone,
      totalAmount: total,
      advancePaid, // Include the advance payment status
      selectedPackages: selectedPackages.map((pkgId) => {
        const pkg = packages.find((p) => p.id === pkgId);
        return {
          id: pkg.id,
          name: pkg.name,
          price: pkg.price,
          quantity: quantities[pkg.id]?.numberOfPeople || 1,
        };
      }),
    };

    // Generate the HTML email body
    const generateEmailHTML = (data) => {
      const packageRows = data.selectedPackages
        .map(
          (pkg) => `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">${pkg.name}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">₹${pkg.price}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">${pkg.quantity}</td>
        <td style="border: 1px solid #ddd; padding: 8px;">₹${
          pkg.price * pkg.quantity
        }</td>
      </tr>
    `
        )
        .join("");

      return `
      <h2>Booking Confirmation</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Advance Paid:</strong> ${
        data.advancePaid === "yes" ? "Yes" : "No"
      }</p>
      <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px;">Package Name</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${packageRows}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">Grand Total</td>
            <td style="border: 1px solid #ddd; padding: 8px;">₹${
              data.totalAmount
            }</td>
          </tr>
        </tfoot>
      </table>
    `;
    };

    const emailHTML = generateEmailHTML(bookingData);

    // Send email using nodemailer
    try {
      const response = await fetch(
        "https://customizegoabackend.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "brgawande@gmail.com", // Replace with your email
            subject: "New Booking Confirmation",
            html: emailHTML,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(
          "Booking Confirmed, You will recieve a Conformation call Shortly!"
        );
      } else {
        alert("Error sending email: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred Try Again or Contact on Whatsapp");
    } finally {
      setIsLoading(false); // Reset loading state after submission
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ocean})`, // Use the imported image in the background
        backgroundSize: "cover", // Ensure the image covers the full screen
        backgroundPosition: "center", // Center the image
      }}
      className="min-h-screen pb-10"
    >
      <Header />
      <TotalAmountBox total={total} />
      <div>
        <div className="max-w-4xl mx-auto p-6 pt-10">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Checkout Details
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Your Packages:
            </h2>
            {selectedPackageDetails.map((pkg) => (
              <div
                key={pkg.id}
                className="flex items-center justify-between mb-4 p-4 bg-teal-100 rounded-lg shadow-sm"
              >
                <div className="flex gap-5 items-center">
                  <h3 className="text-lg font-medium text-teal-700">
                    {pkg.name}
                  </h3>
                  <span className="text-teal-800 font-bold">
                    ₹{pkg.price} x {quantities[pkg.id]?.numberOfPeople || 1}
                  </span>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold text-teal-800 mt-6 text-right">
              Total: ₹{total}
            </div>
            <div className="text-center mt-8">
              <button
                className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                onClick={handleFormToggle}
              >
                Proceed to Advance Booking - ₹500
              </button>
            </div>
          </div>
        </div>

        {/* Conditional Form Rendering */}
        {isFormVisible && (
          <div className=" w-[90%] md:max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
              Complete Your Booking
            </h2>
            <div className="flex gap-8 items-center flex-col md:flex-row ">
              {/* Left side: Form Inputs */}
              <div className="flex flex-col w-[100%] md:w-1/2 gap-4">
                <label htmlFor="name" className="text-teal-700 font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your name"
                />

                <label htmlFor="phone" className="text-teal-700 font-semibold">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Enter your phone number"
                />

                {/* Advance Amount Paid selection */}
                <label className="text-teal-700 font-semibold mt-4">
                  Advance Amount Paid
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      checked={advancePaid === "yes"}
                      onChange={() => setAdvancePaid("yes")}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="no"
                      checked={advancePaid === "no"}
                      onChange={() => setAdvancePaid("no")}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              {/* Right side: QR Code */}
              <div className="flex justify-center items-center  w-[100%] md:w-1/2 ">
                <img
                  src={phonepayqr}
                  alt="QR Code"
                  className="w-[100%] h-[400px] md:h-[400px] object-contain border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                className={`${
                  isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600"
                } text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-teal-700 transition duration-300`}
                onClick={handleFormSubmit}
                disabled={isLoading} // Disable the button when loading
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin border-4 border-t-4 border-teal-600 w-6 h-6 rounded-full"></div>
                    <span className="ml-2">Submitting...</span>
                  </div>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
