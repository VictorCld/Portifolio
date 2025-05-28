"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail, Linkedin } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "OrdemGest",
    description:
      "Sistema de Gerenciamento de Ordens de Serviço desenvolvido em Java. Aplicação para controle e organização de ordens de serviço com interface web responsiva.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    github: "https://github.com/VictorCld/OrdemGest",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    name: "Semáforo",
    description:
      "Simulação de sistema de controle de semáforo desenvolvido em Java. Implementa lógica de temporização e controle de estados para gerenciamento de tráfego.",
    tech: ["C", "HTML", "CSS"],
    github: "https://github.com/VictorCld/semaforo",
    demo: null,
    featured: true,
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-red-900 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-red-500 font-mono text-sm">VG</div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
                Sobre
              </a>
              <a href="#work" className="text-gray-300 hover:text-red-500 transition-colors">
                Projetos
              </a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
                Contato
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent"
              >
                Resumo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-red-500 font-mono text-sm">Olá, meu nome é</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">Victor Gabriel.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400">Desenvolvedor de Software.</h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Sou estudante de engenharia de software especializado em criar aplicações web e soluções de software.
              Atualmente focado em desenvolvimento full-stack e ciência de dados.
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent px-8 py-3"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                Veja meu trabalho
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">Sobre mim</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Olá! Sou Victor, estudante de engenharia de software apaixonado por tecnologia e inovação. Minha
                  jornada na programação começou com curiosidade sobre como as coisas funcionam, e hoje estou focado em
                  criar soluções que fazem a diferença.
                </p>
                <p>
                  Atualmente, estou explorando diferentes áreas da tecnologia, com interesse especial em desenvolvimento
                  full-stack, arquitetura de sistemas e ciência de dados. Acredito que a tecnologia deve ser acessível e
                  resolver problemas reais.
                </p>
                <p>Aqui estão algumas tecnologias com as quais tenho trabalhado:</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm font-mono text-red-500">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>
                  JavaScript
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>
                  React
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>
                  Java & Spring Boot
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>
                  Python
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>C
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>
                  MySQL
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">▹</span>
                  HTML & CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Projetos que construí</h2>
          <div className="space-y-12">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card key={project.id} className="bg-gray-900 border-red-900 hover:bg-gray-800 transition-colors">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(project.github, "_blank")}
                            className="text-gray-400 bg-transparent p-0"
                          >
                            <Github className="h-5 w-5" />
                          </Button>
                          {project.demo && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => project.demo && window.open(project.demo, "_blank")}
                              className="text-gray-400 hover:text-red-500 hover:bg-red-500/10 bg-transparent p-0"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>

                      <p className="text-gray-300 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-red-500 font-mono text-sm bg-red-500/10 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-red-500 font-mono text-sm mb-4">E agora?</p>
          <h2 className="text-4xl font-bold text-white mb-6">Entre em contato</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Estou sempre aberto a novas oportunidades e conversas interessantes. Se você tem um projeto em mente ou
            apenas quer dizer oi, ficarei feliz em conversar!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500/10 bg-transparent px-8 py-3"
            onClick={() => window.open("mailto:victor@email.com", "_blank")}
          >
            Diga olá
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-red-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com/VictorCld", "_blank")}
              className="text-gray-400 bg-transparent p-0"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://linkedin.com/in/victor-gabriel", "_blank")}
              className="text-gray-400 bg-transparent p-0"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("mailto:victor@email.com", "_blank")}
              className="text-gray-400 bg-transparent p-0"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-500 text-sm font-mono">Construído por Victor Gabriel</p>
        </div>
      </footer>
    </div>
  )
}
