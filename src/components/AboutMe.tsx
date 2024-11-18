import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>À propos de moi</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    Étudiant en Master Qualité du Logiciel, passionné par le développement logiciel et les nouvelles technologies, avec des compétences
en programmation (Java, JavaScript, PHP, Python) et en technologies (Spring, JEE, Node.js, Laravel, React). À la recherche d’un stage
de fin d’études pour contribuer à des projets innovants.
                </p>
            </CardContent>
        </Card>
    )
}