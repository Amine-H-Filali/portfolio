import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "UML Diagrams Generator",
        description: "Application Java permettant d'extraire les classes et packages d'un projet et de générer automatiquement des diagrammes UML à partir de fichiers XML.",
        tech: "Java - Reflection Api",
        link: "https://github.com/Amine-H-Filali/UML-Diagrams-Generator",
    },
    {
        title: "BookConnect",
        description: "BookConnect est une application full-stack permettant de gérer des collections de livres, d'emprunter et de retourner des livres, avec une sécurité JWT et un backend Spring Boot",
        tech: "Spring boot - Docker",
        link: "https://github.com/Amine-H-Filali/BookConnect",
    },
    {
        title: "jobeemaroc E-recuitement plateforme",
        description: "Application E-recrutement développée avec Django et Next.js, permettant aux entreprises de publier des offres d'emploi et aux candidats de postuler, avec une gestion de profils, des filtres de recherche avancés et un tableau de bord pour suivre les candidatures.",
        tech: "Django - NextJS",
        link: "https://github.com/Amine-H-Filali/jobeemaroc",
    },
    {
        title: "micro service multi connecteurs",
        description: "Projet de microservice multi-connecteurs utilisant Spring Boot, supportant les protocoles REST, SOAP, gRPC et GraphQL pour intégrer et interagir avec différents systèmes de manière flexible et scalable.",
        tech: "Spring Boot",
        link: "https://github.com/Amine-H-Filali/Bank-Account-Micro-service",
    },
    
]

const techColors = {
    "Java - Reflection Api": " bg-yellow-500",
    "Django - NextJS": "bg-green-500",
    "Spring Boot": "bg-purple-500",
    "Spring boot - Docker": "bg-blue-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
            Projets en vedette
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}