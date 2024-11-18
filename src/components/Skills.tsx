import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["Java","JEE", "Spring/SpringBoot", "JavaScript", "NodeJS", "ReactJS", "NextJS", "HTML5", "CSS3", "PHP", "Laravel", "Api Rest", "Soap", "GraphQL", "SQL", "MySQL", "MongoDB", "PostgreSQL", "Git", "Docker", "Maven", "JUnit", "Python", "Django"]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}