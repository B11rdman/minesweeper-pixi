import { Spines } from "../../assets";

export const spines = {
  fish: {
    animations: {
      confused: "confused",
      happy: "happy",
      hungryIdle: "hungry_idle",
      hungryStart: "hungry_start",
      scared: "scared",
      panic: "panic",
    },
  },
};

export const getFishSpineConfig = () => Spines.fish;
