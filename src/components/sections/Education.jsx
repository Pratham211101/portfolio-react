const EducationItem = ({ logo, institution, degree, cgpa, duration, percentage }) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-primary">
        <img src={logo} alt={institution} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{institution}</h3>
        <p className="text-muted-foreground">{degree}</p>
        {/* if percentage show it if cgpa show it */}
        {percentage && <p className="text-sm text-muted-foreground">Percentage: {percentage}</p>}
        {cgpa && <p className="text-sm text-muted-foreground">CGPA: {cgpa}</p>}
      </div>
      <div className="text-sm text-muted-foreground">{duration}</div>
    </div>
  )
}

const Education = () => {
  const education = [
    {
      logo: "/collegeimage.jpg",
      institution: "Dr. Ambedkar Institue of Technology",
      degree: "B.E. in Computer Science and Engineering",
      cgpa: "8.33", //change
      duration: "Nov 2021 - Aug 2025"
    },
    {
      logo: "/schoollogo.png",
      institution: "Central Academy Senior Secondary School", //change this
      degree: "CBSE Class XII", //change
      percentage: "90.3%", //change
      duration: "July 2019 - July 2020" 
    }
  ]

  return (
    <section className="py-20 pb-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div>
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  )
}

export default Education
