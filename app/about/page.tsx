import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BottomNav from '@/components/bottom-nav';
import TopBlur from '@/components/top-blur';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-[480px] mx-auto pb-28 pt-16">
      {/* Top blur effect */}
      <TopBlur />

      {/* Back button */}
      <div className="px-6 py-4 relative z-0">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
      </div>

      {/* Header */}
      <header className="px-6 mb-6">
        <h1 className="font-['Instrument_Serif'] text-3xl font-bold tracking-tight text-primary">
          About Me
        </h1>
      </header>

      {/* Bio Section */}
      <section className="px-6 mb-8">
        <p className="text-sm mb-4">
          When I'm not designing or coding, you can find me on the golf course or spending time away
          from the screen with family and friends.
        </p>
        <Image
          src="/golf-course.png"
          alt="On the golf course"
          width={280}
          height={280}
          className="w-full rounded-lg object-cover mb-4"
        />
      </section>

      {/* Skills Section */}
      <section className="px-6 mb-8">
        <h2 className="font-['Instrument_Serif'] text-xl font-bold mb-4">Skills & Expertise</h2>

        <div className="grid grid-cols-3 gap-4">
          <SkillCategory
            title="Design"
            skills={['Design Systems', 'Prototyping', 'User Research']}
          />

          <SkillCategory title="Frontend" skills={['React', 'TypeScript']} />

          <SkillCategory title="Tools" skills={['Figma', 'Cursor']} />
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 mb-8">
        <h2 className="font-['Instrument_Serif'] text-xl font-bold mb-4">Experience</h2>

        <div className="space-y-4">
          <ExperienceCard
            title="Senior Product Designer"
            company="Cequence Security"
            period="2022 - Present"
            description="Leading the design of enterprise security products, focusing on user experience and accessibility."
          />

          <ExperienceCard
            title="Product Designer"
            company="Quest Diagnostics"
            period="2020 - 2022"
            description="Designed patient-facing applications and internal tools for healthcare providers."
          />
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <div className="flex flex-col gap-1">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="justify-start font-normal">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base font-medium">{title}</h3>
          <span className="text-xs text-muted-foreground">{period}</span>
        </div>
        <p className="text-sm font-medium text-muted-foreground mb-2">{company}</p>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
