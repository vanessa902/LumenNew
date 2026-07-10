import { ParticlesSphereBackground } from './ParticlesSphereBackground'

const TOOLS = [
  {
    name: 'Zapier',
    icon: '/LumenNew/scanifly/logo-4.png',
    bg: '#FF4A00',
    description:
      'Build and scale AI workflows and agents across 9000+ apps with Zapier—the most connected AI orchestration platform. Trusted by 3 million+ businesses.',
  },
  {
    name: 'Enphase',
    icon: '/LumenNew/scanifly/logo-3b.png',
    bg: '#ffffff',
    description: 'Integrate Enphase inverter monitoring directly for project-specific system insights.',
  },
  {
    name: 'Google Sheets',
    icon: '/LumenNew/scanifly/logo-1.png',
    bg: '#ffffff',
    description:
      'Transform your data into a living ecosystem with the Google Sheets integration, the ultimate bridge for automating workflows and centralizing information in real-time.',
  },
  {
    name: 'Aurora Solar',
    icon: '/LumenNew/scanifly/logo-2.png',
    bg: '#ffffff',
    description: 'Create a highly accurate solar design by using Aurora Solar.',
  },
]

export function IntegrationsToolsSection() {
  return (
    <section className="integrations-tools-section">
      <div className="integrations-tools-header">
        <h2>All your tools, one unified platform</h2>
        <p>
          Lumentrack brings together the best integrations to streamline your business. Whether it is automating
          emails, managing finances, or creating proposals with design tools, our platform ensures everything works
          together effortlessly.
        </p>
      </div>

      <div className="integrations-tools-grid-wrap">
        <ParticlesSphereBackground />
        <div className="integrations-tools-grid">
          {TOOLS.map((tool, i) => (
            <div key={i} className="integrations-tool-card">
              <div className="integrations-tool-icon" style={{ background: tool.bg }}>
                <img src={tool.icon} alt={tool.name} />
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
