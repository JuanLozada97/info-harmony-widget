interface Section {
  id: string;
  name: string;
}

interface ModalNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const ModalNavigation = ({ sections, activeSection, onSectionChange }: ModalNavigationProps) => (
  <div className="border-b border-medical-border">
    <nav className="flex overflow-x-auto">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
            activeSection === section.id
              ? "text-medical-primary border-b-2 border-medical-primary"
              : "text-medical-muted hover:text-medical-text hover:bg-medical-hover"
          }`}
        >
          {section.name}
        </button>
      ))}
    </nav>
  </div>
);

export default ModalNavigation;