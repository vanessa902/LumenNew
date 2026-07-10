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
    name: 'Aurora Solar',
    icon: '/LumenNew/scanifly/logo-2.png',
    bg: '#ffffff',
    description: 'Pull accurate solar designs and proposals straight from Aurora into your workflow.',
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
