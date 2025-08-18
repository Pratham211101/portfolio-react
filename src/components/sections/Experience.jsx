

const ExperienceItem = ({ logo, company, role, duration }) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-primary">
        <img src={logo} alt={company} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{company}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
      <div className="text-sm text-muted-foreground">{duration}</div>
    </div>
  )
}

const Experience = () => {
  const experiences = [
    {
      logo: '/companyimage.png',
      company: "Orange Essence Technologies",
      role: "Web Developer Intern",
      duration: "Jan 2025 - Apr 2025" //  
    }
  ]

  return (
    <section className="px-8 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

export default Experience
