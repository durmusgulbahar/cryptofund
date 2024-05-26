"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { deploy } from "../services/contractCreation";

type Props = {};

export default function page({ }: Props) {

  return (
    <div>
      <Button
        onClick={() => {
          deploy("name", "surname", "ownerMail", 123, "projectName", 1000);
        }}
      >
        Deploy
      </Button>
    </div>
  );
}
