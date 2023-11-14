import React from "react";

type SectionHeadingProps = { title: string };

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="font-medium text-3xl capitalize mb-8 text-center">
      {title}
    </h2>
  );
}
