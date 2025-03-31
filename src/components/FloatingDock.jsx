// import { Home, Mail, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react"
// import { Separator } from "./ui/separator"
// import { Toggle } from "./ui/toggle"
// import { motion } from "framer-motion"
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "./ui/hover-card"


// const IconLink = ({ href, icon: Icon, label, onClick, target }) => {
//   const handleClick = (e) => {
//     if (onClick) {
//       e.preventDefault()
//       onClick()
//     }
//   }

//   return (
//     <HoverCard>
//       <HoverCardTrigger asChild>
//         <a
//           href={href}
//           rel="noopener noreferrer"
//           target={target}
//           className="p-2 hover:text-primary transition-colors"
//           onClick={handleClick}
//         >
//           <Icon size={20} />
//         </a>
//       </HoverCardTrigger>
//       <HoverCardContent className="w-auto">
//         <p className="text-sm">{label}</p>
//       </HoverCardContent>
//     </HoverCard>
//   )
// }

// const FloatingDock = ({ theme, setTheme }) => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact")
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" })
//     }
//   }
  
//   return (
//     <motion.div 
//       className="fixed bottom-6 inset-x-0 mx-auto flex justify-center w-max bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 items-center gap-2 shadow-lg"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.8,
//         ease: "easeOut",
//       }}
//     >
//       <IconLink
//         href="#"
//         icon={Home}
//         label="Home"
//         onClick={scrollToTop}
//       />
//       <IconLink
//         href="#contact"
//         icon={Mail}
//         label="Contact"
//         onClick={scrollToContact}
//       />
//       <Separator orientation="vertical" className="h-6" />
//       <IconLink
//         href="https://github.com/Pratham211101"
//         icon={Github}
//         label="GitHub"
//         target="_blank"
//       />
//       <IconLink
//         href="https://www.linkedin.com/in/pratham-goswami-4a2a83228/"
//         icon={Linkedin}
//         label="LinkedIn"
//         target="_blank"
//       />
//       <IconLink
//         href="https://x.com/Pratham00565211"
//         icon={Twitter}
//         label="Twitter"
//         target="_blank"
//       />
//       <Separator orientation="vertical" className="h-6" />
//       <Toggle
//         aria-label="Toggle theme"
//         pressed={theme === "dark"}
//         onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
//       >
//         {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
//       </Toggle>
//     </motion.div>
//   )
// }

// export default FloatingDock
import React from "react"
import { Home, Mail, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react"
import { Separator } from "./ui/separator"
import { Toggle } from "./ui/toggle"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

// Constants for the dock animation
const DEFAULT_SIZE = 40
const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140

// DockIcon component that closely matches the original magicui implementation
const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = React.useRef(null)
  const padding = Math.max(6, size * 0.2)
  const [isHovered, setIsHovered] = React.useState(false)
  
  // Use the passed mouseX or create a default one if not provided
  const defaultMouseX = useMotionValue(Number.POSITIVE_INFINITY)
  
  // Calculate distance from mouse to icon center
  const distanceCalc = useTransform(mouseX || defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })
  
  // Transform size based on distance
  const sizeTransform = useTransform(
    distanceCalc, 
    [-distance, 0, distance], 
    [size, magnification, size]
  )
  
  // Add spring physics for smoother animation
  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  
  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize, padding }}
      className={`
        flex aspect-square cursor-pointer items-center justify-center rounded-full 
        transition-shadow duration-300 ease-in-out
        ${isHovered ? 'shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_5px_rgba(96,165,250,0.5)]' : ''}
        ${className || ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const IconLink = ({ href, icon: Icon, label, onClick, target, mouseX }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <DockIcon mouseX={mouseX}>
      <HoverCard>
        <HoverCardTrigger>
          <a
            href={href}
            rel="noopener noreferrer"
            target={target}
            className="p-2 hover:text-primary transition-colors flex items-center justify-center"
            onClick={handleClick}
          >
            <Icon size={20} />
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-auto">
          <p className="text-sm">{label}</p>
        </HoverCardContent>
      </HoverCard>
    </DockIcon>
  )
}

const FloatingDock = ({ theme, setTheme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  // Mouse position state for magnification effect
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  
  return (
    <motion.div 
      className="fixed bottom-6 inset-x-0 mx-auto flex justify-center w-max bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 items-center gap-2 shadow-lg supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.8,
        ease: "easeOut",
      }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
    >
      <IconLink
        href="#"
        icon={Home}
        label="Home"
        onClick={scrollToTop}
        mouseX={mouseX}
      />
      <IconLink
        href="#contact"
        icon={Mail}
        label="Contact"
        onClick={scrollToContact}
        mouseX={mouseX}
      />
      <Separator orientation="vertical" className="h-6" />
      <IconLink
        href="https://github.com/Pratham211101"
        icon={Github}
        label="GitHub"
        target="_blank"
        mouseX={mouseX}
      />
      <IconLink
        href="https://www.linkedin.com/in/pratham-goswami-4a2a83228/"
        icon={Linkedin}
        label="LinkedIn"
        target="_blank"
        mouseX={mouseX}
      />
      <IconLink
        href="https://x.com/Pratham00565211"
        icon={Twitter}
        label="Twitter"
        target="_blank"
        mouseX={mouseX}
      />
      <Separator orientation="vertical" className="h-6" />
      <DockIcon mouseX={mouseX}>
        <Toggle
          aria-label="Toggle theme"
          pressed={theme === "dark"}
          onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
          className="flex items-center justify-center"
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </Toggle>
      </DockIcon>
    </motion.div>
  )
}

export default FloatingDock