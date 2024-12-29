import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce solution with Next.Js, and Fireabse.",
      image: "/pro.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Eccomerce-website"
    },
    {
      title: "Governot IT Website",
      description: "A sleek, responsive Governor IT website built with Nex.JS and Tailwind ",
      image: "/gov.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Governor-IT"
    },
    {
      title: "Church Website",
      description: "A responsive web church website using Next.JS .",
      image: "/church.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Saint-Patrick-s"
    },
    {
      title: "Gym Website",
      description: "A sleek, responsive Gym website built with HTML , CSS and JavaScript ",
      image: "/gym.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Hotel-Room"
    },
    {
      title: "Hotel Website",
      description: "A sleek, responsive hotel Room website built with HTML , CSS and JavaScript ",
      image: "/hotel.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/New-Gym-Website"
    },
    {
      title: "Portfolio Website",
      description: "A sleek, responsive Portfolio website built with HTML , CSS and JavaScript ",
      image: "/port.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Potfolio-Website"
    },
     {
      title: "Gym Website",
      description: "A sleek, responsive Gym website built with HTML , CSS and JavaScript ",
      image: "/gym2.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/My-Gym-Website"
    },
     {
      title: "Silicitor Website",
      description: "A sleek, responsive Silicitor website built with HTML , CSS and JavaScript ",
      image: "/sili.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Solicitor-Website"
    },
    {
      title: "Spotfinder Website",
      description: "A sleek, responsive Spotfinder website built with HTML , CSS and JavaScript ",
      image: "/spot.jpg?height=300&width=400",
      link: "https://github.com/abdulmajeed229/Spot-Finder-Clone"
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase text-[25px]">Projects</h2>
          
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <a 
                    href={project.link} 
                    className="mt-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

