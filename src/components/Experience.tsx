import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: " Stagiaire | Data Scientist", // TODO: Replace with actual role
        company: "3D Smart Factory SARL", // TODO: Replace with actual company name
        logo: "/3dsmarfactory.jpg", // TODO: Replace with actual logo
        duration: "2023 avril - 2023 juin",
        description:
        [
            "Optimisation du processus de sélection de candidats en intégrant des techniques NLP.",
            "Extraction et nettoyage de données provenant de LinkedIn et Indeed pour enrichir les modèles d’analyse.",
            "Application des modèles NER de Spacy et Roberta pour l’extraction d’entités et l’analyse des textes.",
            "Conception d’un algorithme de correspondance entre les CV et les descriptions de poste.",
        ],
        link: "https://3dsmartfactory.csit.ma/",
        images: ["/jobeemaroc1.png",
            "/jobeemaroc2.png"
        ],
    },
    {
        role: "Stagiaire | Développeur FullStack", // TODO: Replace with actual role
        company: "CloudLink LLC", // TODO: Replace with actual company name
        logo: "/cloudlinkus_logo.jpg", // TODO: Replace with actual logo
        duration: "2022 avril - 2022 juin",
        description:
        [
            "Développement d’une plateforme de streaming musical avec une interface de gestion pour les artistes.",
            "Rédaction des spécifications fonctionnelles et techniques selon les besoins utilisateurs.",
            "Ajout de fonctionnalités sociales et intégration de Stripe pour les paiements d’abonnement.",
            "Exécution de tests pour valider les fonctionnalités et leur intégration sur la plateforme.",
            "Développement d’un système de gestion des publicités avec prise en charge des abonnements premium.",
            "Suivi du projet et collaboration via les outils Atlassian (Jira, Confluence)."
        ],
        link: "https://cloudlink.us/",
        images: [
            "/uruploadz.png",
            "/uruploadz2.png",
        ],
    }
    
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">STAGES</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <div className="text-sm  mt-1 mb-4">
    <ul className="list-disc pl-6">
        {(Array.isArray(j.description) ? j.description : [j.description]).map((line, index) => (
            <li key={index} className="leading-relaxed text-left">
                {line}
            </li>
        ))}
    </ul>
</div>


                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}