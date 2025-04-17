interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "C++",
    description: "Primary language for computer graphics and interactive projects, including custom renderers and modellers.",
    icon: "cpp"
  },
  {
    name: "Docker",
    description: "Container-based deployment used extensively across personal and client projects, including infrastructure on a personal homelab.",
    icon: "docker"
  },
  {
    name: "Three.js",
    description: "WebGL framework used in viewers, allowing 3D models to be explored directly in the browser.",
    icon: "threejs"
  },
  {
    name: "Unity",
    description: "Used for building immersive applications with Meta SDK integration, targeting VR environments for real-time experiences.",
    icon: "unity"
  },
  {
    name: "3D Modeling & BIM",
    description: "Experienced in 3D modeling using Blender and SketchUp, with advanced BIM workflows in ArchiCAD for architectural design and visualization.",
    icon: "blender"
  },
  {
    name: "React",
    description: "Currently learning and building prototypes to deepen my understanding of modern frontend development and component-driven architecture.",
    icon: "react"
  },
];

export default hardSkills;
