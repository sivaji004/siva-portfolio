import html from "../app/assets/svg/skills/html.svg";
import css from "../app/assets/svg/skills/css.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import react from "../app/assets/svg/skills/react.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import firebase from "../app/assets/svg/skills/firebase.svg";
import materialui from "../app/assets/svg/skills/materialui.svg";
import git from "../app/assets/svg/skills/git.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();

  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "bootstrap":
      return bootstrap;
    case "tailwind":
      return tailwind;
    case "firebase":
      return firebase;
    case "materialui":
      return materialui;
    case "git":
      return git;
    default:
      return null;
  }
};

