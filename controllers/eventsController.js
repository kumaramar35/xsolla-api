export const getUpcomingEvents = (req, res) => {
  const upcomingEvents = [
    {
      paxWest: {
        name: "PAX West",
        location: "Seattle, Washington, United States",
        date: "29-1",
        month: "AUGUST",
        logoUrl:
          "https://storage.googleapis.com/strapi-v2-bucket-prod/pax_west_logo_black_97015661be/pax_west_logo_black_97015661be.png",
      },
    },
    {
      liveServiceGamingSummit: {
        name: "Live Service Gaming Summit",
        location: "London, United Kingdom Novotel London West",
        date: "9-10",
        month: "SEPTEMBER",
        logoUrl:
          "https://storage.googleapis.com/strapi-v2-bucket-prod/ls_gaming_summit_logo_0d6e1f3f4c/ls_gaming_summit_logo_0d6e1f3f4c.png",
      },
    },
    {
      wnCyprus: {
        name: "WN Cyprus",
        location: "Limassol, Cyprus",
        date: "11-12",
        month: "SEPTEMBER",
        logoUrl:
          "https://storage.googleapis.com/strapi-v2-bucket-prod/wn_cyprus_logo_0f4e6b1f0e/wn_cyprus_logo_0f4e6b1f0e.png",
      },
    },
    {
      diceEurope : {
        name: "DICE Europe",
        location: "Edinburgh, Scotland InterContinental Edinburgh the George",
        date: "15-17",
        month: "SEPTEMBER",
        logoUrl:
          "https://storage.googleapis.com/strapi-v2-bucket-prod/dice_europe_logo_3a5f6c8b1e/dice_europe_logo_3a5f6c8b1e.png",
      },
    },
    {
      "Money20/20" : {
        name: "Money20/20 ",
        location:
          "Riyadh, Saudi Arabia Riyadh Exhibition and Convention Center",
        date: "15-17",
        month: "SEPTEMBER",
        logoUrl:
          "https://storage.googleapis.com/strapi-v2-bucket-prod/money20_20_logo_3b5f7d9c2f/money20_20_logo_3b5f7d9c2f.png",
      },
    },
  ];

  res.json({
    success: true,
    data: upcomingEvents,
  });
};
