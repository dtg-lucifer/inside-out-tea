"use client";

import { useParams } from "next/navigation";
import React from "react";


const ProductPage = () => {
  const params = useParams<{ mood: string }>();
  return <section></section>;
};

export default ProductPage;
