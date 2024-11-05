import React, { ReactNode } from "react";
import "../styles/sociallink.css";

interface SocialLinkProps {
  goto: string;
  children: ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ goto, children }) => {
  return (
    <a href={goto} target="_blank" className="sociallink">
      {children}
    </a>
  );
};

export default SocialLink;
