import img15001597Doctor2015AcrylicOnCanvas120X210Cm from "figma:asset/ee610ba909f750c5ea9594cf9d19cc9fc413c0e7.png";
import imgAtomouse1993AcrylicOnCanvas100X100CmCopy from "figma:asset/55c5fb9ebc30b9a9aed2fa06ceb48c81199b1e22.png";
import img501Check from "figma:asset/ae477011e5db3a5aa32347b9126237d86a4f5220.png";
import img502Check from "figma:asset/68cfa5451fd413bd4cd04a8aacd1ef95b04afe87.png";
import img28 from "figma:asset/c6688b2a951bd0fe9393e11639c0df577d986f04.png";
import img5 from "figma:asset/73121a771ce577694e8a10cd7a0bedb5f8999306.png";

export interface Artwork {
  id: number;
  images: string[];
  captions?: string[];
  title: string;
  subtitle: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    images: [
      img15001597Doctor2015AcrylicOnCanvas120X210Cm,
      imgAtomouse1993AcrylicOnCanvas100X100CmCopy,
      img501Check,
    ],
    captions: ["Installation view", "Sketch", "Detail"],
    title: "Project 308 number",
    subtitle: "Project 308 number",
  },
  {
    id: 2,
    images: [imgAtomouse1993AcrylicOnCanvas100X100CmCopy, img501Check, img502Check],
    captions: ["Sketch", "Detail", "Installation view"],
    title: "Project 308 number",
    subtitle: "Project 308 number",
  },
  {
    id: 3,
    images: [img501Check, img502Check, img28],
    captions: ["Detail", "Installation view", "Artwork"],
    title: "Project 308 number",
    subtitle: "Project 308 number",
  },
  {
    id: 4,
    images: [img502Check, img28, img5],
    captions: ["Installation view", "Artwork", "Detail"],
    title: "Project 308 number",
    subtitle: "Project 308 number",
  },
  {
    id: 5,
    images: [img28, img5, img15001597Doctor2015AcrylicOnCanvas120X210Cm],
    captions: ["Artwork", "Detail", "Installation view"],
    title: "Project 308 number",
    subtitle: "Project 308 number",
  },
  {
    id: 6,
    images: [img5, img15001597Doctor2015AcrylicOnCanvas120X210Cm, imgAtomouse1993AcrylicOnCanvas100X100CmCopy],
    captions: ["Detail", "Installation view", "Sketch"],
    title: "Project 308 number",
    subtitle: "Project 308 number",
  },
];

export default artworks;
