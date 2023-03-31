const moods = [
  {
    id: "energized",
    title: "30 Minute at Home Strength Workout",
    description:
      "30 Minute at Home Strength Workout This workout is perfect for those who want to build strength without any equipment.",
    link: "https://www.youtube.com/embed/qWy_aOlB45Y",
    tags: "strength",
  },
  {
    id: "energized",
    title: "At Home Cardio Workout",
    description:
      "This cardio workout is ideal for anyone who wants to get their heart rate up and burn calories without leaving the house.",
    link: "https://www.youtube.com/embed/ml6cT4AZdqI",
    tags: "cardio",
  },
  {
    id: "energized",
    title: "Full Body Yoga Workout",
    description:
      "Full Body Yoga Workout by Yoga with Adriene (30 minutes) This yoga routine is perfect for those who want to stretch, strengthen, and tone their entire body.",
    link: "https://www.youtube.com/embed/9kOCY0KNByw",
    tags: "yoga",
  },
  {
    id: "stressed",
    title: "20 min Full Body STRETCH/YOGA for STRESS & ANXIETY Relief",
    description:
      "De-stress with this 20 minute calming yoga routine that includes light and easy full body stretches for stress relief and anxiety.",
    link: "https://www.youtube.com/embed/sTANio_2E0Q",
    tags: "yoga",
  },
  {
    id: "energized",
    title: "Total Body Pilates Workout",
    description:
      "Total Body Pilates Workout This Pilates workout is designed to tone and sculpt your entire body. The exercises focus on the core, arms, legs, and glutes, and can be done without any equipment.",
    link: "https://www.youtube.com/embed/zTLGjyt1GdQ",
    tags: "strength",
  },
  {
    id: "tired",
    title: "Yoga for Tired Legs",
    description:
      "This gentle yoga sequence is perfect for those who have been on their feet all day. The poses are designed to stretch and relax tired leg muscles.",
    link: "https://www.youtube.com/embed/2137wAXvufE",
    tags: "yoga",
  },

  {
    id: "tired",
    title: "Restorative Yoga for Relaxation",
    description:
      "This restorative yoga practice is perfect for anyone who needs to unwind and de-stress. The sequence includes gentle poses that are held for several minutes to promote deep relaxation.",
    link: "https://www.youtube.com/embed/5NhJd1PbXL4",
    tags: "recovery",
  },

  {
    id: "tired",
    title: "Yoga for Relaxation and Sleep",
    description:
      "This yoga practice is designed to help you relax and get a good night's sleep. The sequence includes gentle stretches and calming poses that promote relaxation and stress relief.",
    link: "https://www.youtube.com/embed/BiWDsfZ3zbo",
    tags: "recovery",
  },

  {
    id: "tired",
    title: "Deep Relaxation, Stretch, Relieve Anxiety and Heal",
    description:
      "This yoga practice is designed to help you relax and get a good night's sleep. The sequence includes gentle stretches and calming poses that promote relaxation and stress relief.",
    link: "https://www.youtube.com/embed/EzClp1CiW5o",
    tags: "recovery",
  },

  {
    id: "stressed",
    title: "Guided Meditation for Stress Relief",
    description:
      "This guided meditation is perfect for anyone who needs to reduce stress and anxiety. The meditation includes calming music and soothing visuals to help you relax and unwind.",
    link: "https://www.youtube.com/embed/CNgNzunfSSE",
    tags: "meditation",
  },

  {
    id: "stressed",
    title: "Box Breathing Meditation",
    description:
      "This meditation technique is designed to reduce stress and anxiety by controlling the breath.",
    link: "https://www.youtube.com/embed/FJJazKtH_9I",
    tags: "breathwork",
  },

  {
    id: "stressed",
    title: "Breath with Wim Hoff",
    description:
      "This guided meditation is designed to reduce stress and anxiety by focusing on the breath. The meditation includes visualizations and affirmations to help you feel calm and centered.",
    link: "https://www.youtube.com/embed/nzCaZQqAs9I",
    tags: "breathwork",
  },

  {
    id: "stressed",
    title: "Breathing Exercise for Stress Relief",
    description:
      "This breathing exercise is perfect for anyone who needs to reduce stress and anxiety quickly. The exercise involves taking a few deep breaths and then exhaling slowly to calm the mind and body.",
    link: "https://www.youtube.com/embed/F28MGLlpP90",
    tags: "breathwork",
  },
  {
    id: "stressed",
    title:
      "Guided Morning Meditation | 15 Minutes For Inner Peace & A Guaranteed Perfect Day",
    description:
      "Listen to this 15 minute guided meditation each morning to cultivate a balanced, healthy, and strong inner-peace that will set you on a path for a perfect day.",
    link: "https://www.youtube.com/embed/UAEqdo0Dn-k",
    tags: "meditation",
  },
];

export const getAllMoods = () => {
  return moods.map((mood) => ({
    id: mood.id,
    title: mood.title,
    description: mood.description,
    link: mood.link,
    tags: mood.tags,
  }));
};
