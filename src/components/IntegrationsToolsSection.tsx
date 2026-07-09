const TOOLS = [
  {
    name: 'Zapier',
    icon: '/LumenNew/scanifly/logo-4.png',
    bg: '#FF4A00',
    description: 'Build and scale AI workflows and agents across 9000+ apps with zero code.',
  },
  {
    name: 'Enphase',
    icon: '/LumenNew/scanifly/logo-3b.png',
    bg: '#ffffff',
    description: 'Sync system performance data directly from your Enphase monitoring platform.',
  },
  {
    name: 'Google Sheets',
    icon: '/LumenNew/scanifly/logo-1.png',
    bg: '#ffffff',
    description: 'Transform your data into a living ecosystem with real-time spreadsheet sync.',
  },
  {
    name: 'Tesla',
    icon: '/LumenNew/scanifly/logo-3.png',
    bg: '#ffffff',
    description: 'Connect Tesla Powerwall and energy data straight into your project pipeline.',
  },
  {
    name: 'HubSpot',
    icon: '/LumenNew/scanifly/logo-6.png',
    bg: '#ffffff',
    description: 'Keep your CRM and marketing pipeline in perfect sync, automatically.',
  },
  {
    name: 'AI Assistant',
    icon: '/LumenNew/scanifly/logo-2.png',
    bg: '#ffffff',
    description: 'Let AI handle the busywork, from scheduling to smart follow-ups.',
  },
]

export function IntegrationsToolsSection() {
  return (
    <section className="integrations-tools-section">
      <div className="integrations-tools-header">
        <h2>
          All Your Tools, <span className="integrations-tools-accent">One Unified Platform</span>
        </h2>
        <p>
          Lumentrack brings together the best integrations to streamline your business. Whether it is automating
          emails, managing finances, or creating proposals with design tools, our platform ensures everything works
          together effortlessly.
        </p>
      </div>

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
    </section>
  )
}
