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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
  },
  {
    title: "Employees Management",
    description:
      "This project is a user registration and login system, Admin users will have full access to employee data, including viewing, updating, and deleting records. ",
    tags: [
      "React",
      "TypeScript",
      "React router",
      "Redux-toolkit",
      "Dotnet API",
      "Tailwind",
      "Redux",
    ],
    imageUrl: employeesapp,
  },
  {
    title: "Card Match Game",
    description:
      "The objective of this project is to create an engaging card-matching game which involve a deck of 52 playing cards, where players need to find and match pairs of cards. ",
    tags: ["React", "Typescript"],
    imageUrl: cardsmatchinggame,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
