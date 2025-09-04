const data = {
  menu: {
    products: [
      "Pay Station",
      "Anti-Fraud",
      "Subscriptions",
      "Site Builder",
      "In-Game Services",
      "Login",
    ],
    solutions: [
      "Web Shop",
      "Mobile Buy Button",
      "Publishing Suite",
      "Payments",
      "Xsolla Pay",
      "Xsolla Offerwall",
      "Xsolla Gold",
      "Cloud Gaming",
      "Metasites",
      "Funding",
      "Xsolla Mobile SDK",
      "Xsolla Backpack",
      "Loyalty as a Service",
      "Rewards",
      "Partner Network",
      "Xsolla Backend",
      "Xsolla Mall",
    ],
    aboutXsolla: [
      "About us",
      "Our culture",
      "Our security",
      "Sponsorships",
      "Ecosystem marketplace",
      "Careers",
      "Xsolla in Numbers",
    ],
    resources: [
      "Blog",
      "Newsroom",
      "Events",
      "Partner Spotlight",
      "The Xsolla Report",
      "Xsolla World Map",
      "Podcast",
      "Tax management",
      "Press kit",
      "Site map",
    ],
    contactUs: ["Sales Team", "Customer Support", "Partnerships"],
  },
};
// menuController.js
export const getMenuData = (req, res) => {
  res.json({
    success: true,
    data
  });
};
