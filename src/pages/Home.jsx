import React, { useState } from "react";
import { HeaderComponent } from "../components/header";
import { Slogan } from "../components/slogan";
import { Form } from "../components/form";
import { Footer } from "../components/footer";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverChange = (hovered) => {
    setIsHovered(hovered);
  };
  return (
    <div>
      <HeaderComponent onHoverChange={handleHoverChange} />
      <Slogan isHovered={isHovered} />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
