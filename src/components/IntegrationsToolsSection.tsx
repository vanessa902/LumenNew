import { ArrowRight } from 'lucide-react'
import { TypewriterSegments, type Segment } from './TypewriterSegments'

const TITLE_SEGMENTS: Segment[] = [
  { text: 'Simplify', className: 'font-medium text-primary' },
  { text: ' your', className: 'font-medium text-primary' },
  { text: ' workflow\n', className: 'font-medium text-primary' },
  { text: 'with', className: 'font-medium text-primary' },
  { text: ' Lumentrack', className: 'font-medium text-primary' },
  { text: ' Smart', className: 'font-medium text-primary' },
  { text: ' Integrations', className: 'font-medium text-primary' },
]

const TOOLS = [
  {
    name: 'Zapier',
    icon: '/LumenNew/scanifly/logo-4.png',
    bg: '#FF4A00',
    description:
      'Bring the full power of AI workflows and agents to your business with the industry’s leading automation platform for businesses worldwide.',
  },
  {
    name: 'Google Sheets',
    icon: '/LumenNew/scanifly/logo-1.png',
    bg: '#ffffff',
    description:
      'Process and interpret your business data faster than ever with access to Google Sheets, making centralizing information in Lumentrack easier.',
  },
  {
    name: 'Aurora Solar',
    icon: '/LumenNew/scanifly/logo-2.png',
    bg: '#ffffff',
    description:
      'Import all previously-created solar installations on Aurora Solar to Lumentrack, removing unnecessary steps and making it easier for your teams to get hands to work.',
  },
  {
    name: 'Enphase',
    icon: '/LumenNew/scanifly/logo-3b.png',
    bg: '#ffffff',
    description: 'Receive live, in-site information of all your Enphase power infrastructure with just one click.',
  },
  {
    name: 'BlueOps',
    bg: '#2A85FF',
    description: '',
  },
  {
    name: 'ServiceLoop',
    bg: '#14B8A6',
    description: '',
  },
  {
    name: 'FinalWalk',
    bg: '#CB30E0',
    description: '',
  },
]

export function IntegrationsToolsSection() {
  return (
    <section className="integrations-tools-section">
      <div className="integrations-tools-header">
        <h2>
          <TypewriterSegments segments={TITLE_SEGMENTS} />
        </h2>
        <p>
          More than a CRM. When used with our smart integrations, Lumentrack&reg; becomes the command center of your
          business.
        </p>
      </div>

      <div className="integrations-tools-grid-wrap">
        <div className="integrations-tools-grid">
          {TOOLS.map((tool, i) => (
            <div key={i} className="integrations-tool-card">
              <div className="integrations-tool-icon" style={{ background: tool.bg }}>
                {tool.icon ? (
                  <img src={tool.icon} alt={tool.name} />
                ) : (
                  <span className="integrations-tool-icon-fallback">{tool.name.charAt(0)}</span>
                )}
              </div>
              <h3>{tool.name}</h3>
              {tool.description && <p>{tool.description}</p>}
            </div>
          ))}

          <div className="integrations-tool-card integrations-tool-card--more">
            <p>And many more&hellip;</p>
          </div>
        </div>
      </div>

      <div className="integrations-tools-cta">
        <div className="btn-border-wrap mkt-start-btn-wrap">
          <button className="mkt-start-btn">
            Book a Demo
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
