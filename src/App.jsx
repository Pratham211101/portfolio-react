import { ThemeProvider, useTheme } from "./components/ThemeProvider"
import FloatingDock from "./components/FloatingDock"
import Hero from "./components/sections/Hero"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"
import { FadeIn, FadeInStagger } from "./components/ui/fade-in"
import { BeamsBackground } from "./components/ui/beams-background"

function Main() {
  const { theme, setTheme } = useTheme()

  return (
    <BeamsBackground intensity="medium">
      <div className="relative z-10 min-h-screen">
        <FadeInStagger>
          {/* middle of the screen */}
          <main className="container mx-auto space-y-8 md:space-y-8 pb-16">
            <FadeIn delay={0}>
              <Hero />
            </FadeIn>
            <FadeIn delay={0.2}>
              <Experience />
            </FadeIn>
            <FadeIn delay={0.3}>
              <Education />
            </FadeIn>
            <FadeIn delay={0.4}>
              <Skills />
            </FadeIn>
            <FadeIn delay={0.5}>
              <Projects />
            </FadeIn>
            <FadeIn delay={0.6}>
              <Contact />
            </FadeIn>
          </main>
        </FadeInStagger>
          <FloatingDock theme={theme} setTheme={setTheme} />
        </div>
    </BeamsBackground>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}

export default App

// container mx-auto space-y-8 md:space-y-8 pb-16