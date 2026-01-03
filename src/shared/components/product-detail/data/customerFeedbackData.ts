export interface customerFeedbackType {
  id: string;
  username: string;
  rating: number;
  message: string;
  date: string;
}

export const customerFeedbackData: customerFeedbackType[] = [
  {
    id: "0",
    username: "Kristin Watson",
    rating: 4,
    message: "Duis at ullamcorper nulla, eu dictum eros.",
    date: "2 min ago",
  },
  {
    id: "1",
    username: "Jane Cooper",
    rating: 4,
    message: `Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.`,
    date: "30 Apr, 2021",
  },
  {
    id: "2",
    username: "Jacob Jones",
    rating: 4,
    message:
      " Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
    date: "2 min ago",
  },
  {
    id: "3",
    username: "Ralph Edwards",
    rating: 5,
    message:
      "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA",
    date: "2 min ago",
  },
];
