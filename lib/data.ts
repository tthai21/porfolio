import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import moviesapp from "@/public/Moviesapp.png";
import employeesapp from "@/public/Employeesapp.png";
import cardsmatchinggame from "@/public/Cardsmatchinggame.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Certificate 4 in Web development",
    location: "Holmesglen Institute, Melbourne, Australia",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Diploma of Information Technology(Web development)",
    location: "Monarch Institute, Melbourne",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Junior Developer",
    location: "Rotageek -Melbourne",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Movies App",
    description:
      "This website provides users with the ability to create accounts and save their favorite movies and TV shows.",
    tags: [
      "React",
      "Typescript",
      "React router",
      "Redux-toolkit",
      "Dotnet API",
      "Tailwind",
      "SQL",
    ],
    imageUrl: moviesapp,
    url: "https://movie-app-typescript-tau.vercel.app",
  },
  {
    title: "Employees Management",
    description:
      "This project is a user registration and login system, Admin users will have full access to employee data, including viewing, updating, and deleting records. ",
    tags: ["React", "TypeScript", "Redux-toolkit", "Dotnet API", "Tailwind"],
    imageUrl: employeesapp,
    url: "https://emanagement-ivory.vercel.app/",
  },
  {
    title: "Card Match Game",
    description:
      "The objective of this project is to create an engaging card-matching game which involve a deck of 52 playing cards, where players need to find and match pairs of cards. ",
    tags: ["React", "Typescript"],
    imageUrl: cardsmatchinggame,
    url: "https://card-match-game-plum.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQL",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "C#",
  ".Net",
] as const;
