import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { resolveHackathonLink } from '../../lib/resolveHackathonLink.js'

function LinkRenderer({ href, children, folder }) {
  const { href: resolved, internal } = resolveHackathonLink(href, folder)

  if (!resolved) {
    return (
      <span className="text-ink-faint italic" title="Materials coming soon">
        {children}
      </span>
    )
  }
  if (internal) {
    return (
      <Link to={resolved} className="text-cyan-text hover:text-cyan-strong underline underline-offset-2">
        {children}
      </Link>
    )
  }
  return (
    <a
      href={resolved}
      target="_blank"
      rel="noreferrer"
      className="text-cyan-text hover:text-cyan-strong underline underline-offset-2"
    >
      {children}
    </a>
  )
}

// Renders a hackathon prompt (or the shared submission guidelines) with the
// site's own styling. `folder` is that file's folder relative to
// prompts/hackathon/ — see resolveHackathonLink for how it's used to resolve
// the file's relative links.
export default function Markdown({ source, folder = '' }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="font-display text-2xl text-ink mt-10 mb-4 first:mt-0">{children}</h1>,
          h2: ({ children }) => <h2 className="font-display text-xl text-ink mt-10 mb-3 first:mt-0">{children}</h2>,
          h3: ({ children }) => <h3 className="font-display text-lg text-ink mt-8 mb-2">{children}</h3>,
          p: ({ children }) => <p className="text-ink-muted leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside space-y-1.5 text-ink-muted mb-4 pl-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside space-y-1.5 text-ink-muted mb-4 pl-1">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => <strong className="text-ink font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          hr: () => <hr className="border-ink-faint/20 my-8" />,
          code: ({ children }) => (
            <code className="font-mono text-xs bg-void-raised px-1.5 py-0.5 rounded text-cyan-text">{children}</code>
          ),
          a: ({ href, children }) => <LinkRenderer href={href} folder={folder}>{children}</LinkRenderer>,
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="text-left text-ink border-b border-ink-faint/20 py-2 pr-4 font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="text-ink-muted border-b border-ink-faint/10 py-2 pr-4 align-top">{children}</td>,
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}
