import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin, Phone, Paperclip } from "lucide-react";

import resume from "@/assets/resume.pdf";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-tech opacity-10" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">
              {t("hero.title").split(" ").slice(0, 2).join(" ")}
            </span>
            <br />
            <span className="text-foreground">
              {t("hero.title").split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button asChild size="lg" className="gap-2">
              <a
                href="mailto:anmdahamadullah@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
                {t("hero.email")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://github.com/im-ahamad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                {t("hero.github")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://linkedin.com/in/im-ahamad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                {t("hero.linkedin")}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Paperclip className="h-5 w-5" />
                CV
              </a>
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
            <Phone className="h-4 w-4" />
            <span>+880 13043 46264</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
