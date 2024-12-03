import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import "./subscription.css";

const subscriptionData = [
  {
    id: 1,
    name: "Basic Plan",
    price: "₹999/year",
    features: [
      "Access to basic profiles",
      "Limited daily matches",
      "Basic matchmaking filters",
    ],
    description: "Perfect for starters who are looking for essential services.",
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "₹1999/year",
    features: [
      "Access to all profiles",
      "Priority listing",
      "Advanced matchmaking filters",
      "Unlimited daily matches",
    ],
    description:
      "A great choice for users looking to explore more detailed matches.",
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "₹2999/year",
    features: [
      "Personalized matchmaking services",
      "Dedicated Relationship Manager",
      "Profile highlight and promotion",
      "Unlimited chat requests",
    ],
    description:
      "Ideal for users seeking a personalized experience and premium support.",
  },
];

const SubscriptionPlans = () => {
  return (
    <div className="accounts1">
    <Sidebar />
    <div className="accountsContainer1">
      <Navbar />
    <div className="subscription-container">
      <h2 className="title2">Subscription Plans</h2>
      <div className="plans">
        {subscriptionData.map((plan) => (
          <div className="plan-card" key={plan.id}>
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default SubscriptionPlans;
