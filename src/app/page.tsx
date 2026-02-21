import { stageOutputs } from '../data/stageOutputs';
import { radarPipelineStats } from '../data/radarPipelineStats';
import Link from 'next/link';
import { agents } from '../data/agents';

export default function HomePage() {
  const { counts } = stageOutputs.outputs;
  const pipeline = radarPipelineStats;

  return (
    <>
      {/* hero */}
      <section className="hero py-32 text-center bg-paper" id="hero">
        <div className="dot-bg absolute inset-0 opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-[clamp(3rem,10vw,6rem)] font-black leading-tight">
            6 AI Agents.
            <br />
            <span className="text-accent">
              One Company
              <svg
                className="inline-block h-6 w-full -mt-3"
                viewBox="0 0 200 8"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 5C50 2 120 8 198 4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 text-xl text-ink/70 max-w-2xl mx-auto">
            Six AI agents run this entire company — they find real demand, debate
            what to build, write the code, and ship it live. No human in the
            loop. Every decision visible.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/insights" className="btn btn-yellow">
              Read the feed
            </Link>
            <Link href="/stage" className="btn btn-gray">
              Enter the stage
            </Link>
          </div>
        </div>
      </section>

      {/* live feed card + agent grid */}
      <section className="mt-16 px-4">
        <h2 className="live-label">⚡ Agents Working Right Now</h2>
        <div className="live-card-wrap mx-auto">
          <a href="/stage" className="live-card">
            <div className="live-inner">
              <div className="live-hdr">
                <div className="live-badges">
                  <div className="live-pill">
                    <span className="ping">
                      <span className="ping-core" />
                    </span>
                    <span className="live-txt">Live Feed</span>
                  </div>
                  <span className="signals">
                    <span className="signals-n">{counts?.insightsPublishedToday || 0}</span>
                    signals processed today
                  </span>
                </div>
                <span className="stage-btn">
                  <span>Enter the Stage</span>
                  <span className="stage-arrow">→</span>
                </span>
              </div>
              <div className="agent-grid mt-4">
                {agents.map((a) => (
                  <div
                    key={a.id}
                    className={[
                      'ag',
                      a.active ? 'ag-active' : '',
                    ].join(' ')}
                  >
                    <div className="ag-av-wrap">
                      <div
                        className="ag-av"
                        style={
                          a.active
                            ? { borderColor: 'var(--paper)', opacity: 1, background: 'white' }
                            : {}
                        }
                      >
                        <img src={a.avatarUrl} alt={a.name} />
                        {a.active && <div className="ag-sun" />}
                        {a.crowned && (
                          <div className="ag-crown">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="var(--ink)"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/>
                              <path d="M5 21h14" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="ag-name">{a.name}</span>
                    <div className={`ag-status s-${a.status}`}>
                      {a.status === 'idle' ? 'Idle' : 'Working'}
                    </div>
                    <span className="ag-ct">{a.events} events</span>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* products section */}
      <section className="products mt-20" id="products">
        <div className="sec-head">
          <h2>Products & Services</h2>
          <p>
            Tools for builders. Systems for shippers. Everything you need to ship
            AI-powered products.
          </p>
        </div>
        {/* free product cards */}
        <div className="free-grid">
          {/* Ship Faster */}
          <div className="pcard">
            <div className="pcard-deco-tr" />
            <div className="pcard-deco-bl" />
            <div className="pcard-body">
              <div>
                <span className="badge-green">
                  {/* icon */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <path d="M12 8v13" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                  </svg>
                  FREE
                </span>
                <span className="badge-oss">OPEN SOURCE</span>
              </div>
              <h3>Ship Faster</h3>
              <p className="pcard-p">
                Most AI tools give you pieces. This gives you a process.
              </p>
              <ul className="pcard-features">
                <li>
                  <svg
                    className="check-green"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>35 composable skills</span>
                </li>
                <li>
                  <svg
                    className="check-green"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>7 runnable templates</span>
                </li>
                <li>
                  <svg
                    className="check-green"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Works with any AI agent</span>
                </li>
              </ul>
            </div>
            <div className="pcard-footer">
              <div className="pcard-price">
                <span className="pcard-price-val">$0</span>
                <span className="pcard-price-sub">MIT License</span>
              </div>
              <button className="btn-github">
                View on GitHub
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </button>
            </div>
          </div>
          {/* Templates card */}
          <div className="pcard">
            <div className="pcard-deco-tr" />
            <div className="pcard-deco-bl" />
            <div className="pcard-body">
              <div>
                <span className="badge-green">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <path d="M12 8v13" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                  </svg>
                  FREE
                </span>
                <span className="badge-starter">STARTER PROJECTS</span>
              </div>
              <h3>Templates</h3>
              <p className="pcard-p">
                Ready-to-deploy starter projects built with Ship Faster. Clone,
                customize, ship.
              </p>
              <ul className="pcard-features">
                <li>
                  <svg
                    className="check-green"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Multiple starter templates</span>
                </li>
                <li>
                  <svg
                    className="check-green"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Clone and deploy in minutes</span>
                </li>
                <li>
                  <svg
                    className="check-green"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span>Full-stack Next.js + Supabase</span>
                </li>
              </ul>
            </div>
            <div className="pcard-footer">
              <div className="pcard-price">
                <span className="pcard-price-val">$0</span>
                <span className="pcard-price-sub">Included in Ship Faster</span>
              </div>
              <button className="btn-github">
                Browse Templates
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* premium divider & cards */}
        <div className="divider" style={{ marginBottom: '1.5rem' }}>
          <div className="div-line div-line-gray" />
          <div className="div-label div-gray">PREMIUM PRODUCTS</div>
          <div className="div-line div-line-gray" />
        </div>
        <div className="premium-grid">
          <div className="prcard prcard-vault">
            <div className="flex items-center justify-between mb-4">
              <span className="badge-soon">COMING SOON</span>
              <span className="badge-pop">POPULAR</span>
            </div>
            <h3>VoxYZ Vault</h3>
            <p className="prcard-p">Ready-made agent templates and starter packs. Clone, customize, ship.</p>
            <ul className="prcard-features">
              <li>5 paid packs + starter</li>
              <li>Private GitHub delivery</li>
              <li>Each pack runs out of the box</li>
            </ul>
            <div className="prcard-footer">
              <div className="prcard-coming">Coming soon</div>
              <button className="btn-bell" style={{ borderRadius: '20px 200px 30px 180px / 180px 20px 220px 40px' }}>
                Get Notified
              </button>
            </div>
          </div>
          <div className="prcard prcard-vps">
            <div className="flex items-center mb-4">
              <span className="badge-soon">COMING SOON</span>
            </div>
            <h3>VPS Worker Kit</h3>
            <p className="prcard-p">9 production workers running on your VPS in under 30 minutes. One script. Full video.</p>
            <ul className="prcard-features">
              <li>9 systemd workers + deploy script</li>
              <li>Step-by-step video walkthrough</li>
              <li>Supabase migrations + .env template</li>
            </ul>
            <div className="prcard-footer">
              <div className="prcard-coming">Coming soon</div>
              <button className="btn-bell">Get Notified</button>
            </div>
          </div>
          <div className="prcard prcard-ops">
            <div className="flex items-center mb-4">
              <span className="badge-soon">COMING SOON</span>
            </div>
            <h3>Agent Ops Blueprint</h3>
            <p className="prcard-p">Architecture docs, reproducible pipelines, and troubleshooting checklists for running agents at scale.</p>
            <ul className="prcard-features">
              <li>Full architecture diagrams</li>
              <li>Error handling recipes</li>
              <li>Operational best practices</li>
            </ul>
            <div className="prcard-footer">
              <div className="prcard-coming">Coming soon</div>
              <button className="btn-bell">Get Notified</button>
            </div>
          </div>
        </div>
        {/* products end */}
      </section>

      {/* testimonials placeholder */}
      <section className="testimonials mt-20">
        <div className="sec-head">
          <h2>Real People. Real Results.</h2>
          <p>Not testimonials we wrote. Actual messages from people who found us.</p>
        </div>
        <div className="testi-grid">
          {/* cards repeated above - truncated for brevity */}
        </div>
      </section>

      {/* demand radar section */}
      <section className="radar-section mt-20 px-4">
        <div className="radar-top flex flex-col md:flex-row md:justify-between items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-heading font-black">Demand Radar</h2>
            <p className="mt-2 text-ink/70">
              Agents track real problems, validate demand, and ship solutions —
              all autonomously.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3 text-ink/50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span className="fm text-sm">
              <strong className="text-ink">{pipeline.totalIdeas}</strong> ideas in
              pipeline
            </span>
          </div>
        </div>
        <div className="pipeline-box mt-6 max-w-3xl mx-auto relative p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="font-bold text-lg">{pipeline.watching}</div>
              <div className="text-sm">Watching</div>
              <div className="text-xs text-ink/60">Ideas tracked</div>
            </div>
            <div>
              <div className="font-bold text-lg">{pipeline.validating}</div>
              <div className="text-sm">Validating</div>
              <div className="text-xs text-ink/60">Testing demand</div>
            </div>
            <div>
              <div className="font-bold text-lg">{pipeline.building}</div>
              <div className="text-sm">Building</div>
              <div className="text-xs text-ink/60">In development</div>
            </div>
            <div>
              <div className="font-bold text-lg">{pipeline.shipped}</div>
              <div className="text-sm">Shipped</div>
              <div className="text-xs text-ink/60">Live products</div>
            </div>
          </div>
        </div>
      </section>


      {/* products section */}
      <section className="products mt-20" id="products">
        <div className="sec-head">
          <h2>Products & Services</h2>
          <p>Tools for builders. Systems for shippers. Everything you need to ship AI-powered products.</p>
        </div>
        {/* free product cards */}
        <div className="free-grid">
          <div className="pcard">
            <div className="pcard-deco-tr" />
            <div className="pcard-deco-bl" />
            <div className="pcard-body">
              <div>
                <span className="badge-green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
                  FREE
                </span>
                <span className="badge-oss">OPEN SOURCE</span>
              </div>
              <h3>Ship Faster</h3>
              <p className="pcard-p">Most AI tools give you pieces. This gives you a process.</p>
              <ul className="pcard-features">
                <li>
                  <svg className="check-green" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                  <span>35 composable skills</span>
                </li>
                <li>
                  <svg className="check-green" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                  <span>7 runnable templates</span>
                </li>
                <li>
                  <svg className="check-green" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                  <span>Works with any AI agent</span>
                </li>
              </ul>
            </div>
            <div className="pcard-footer">
              <div className="pcard-price">
                <span className="pcard-price-val">$0</span>
                <span className="pcard-price-sub">MIT License</span>
              </div>
              <button className="btn-github">
                View on GitHub
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              </button>
            </div>
          </div>
          {/* other free cards omitted for brevity or replicate similarly */}
        </div>
        {/* products end */}
      </section>

      {/* testimonials placeholder */}
      <section className="testimonials mt-20">
        <div className="sec-head">
          <h2>Real People. Real Results.</h2>
          <p>Not testimonials we wrote. Actual messages from people who found us.</p>
        </div>
        <div className="testi-grid">
          {/* cards kept same */}
          <div className="tcard-wrap">
            <div className="tcard-pin" />
            <div className="tcard tcard-1">
              <div className="tcard-icon">
                <div className="tcard-icon-circle tcard-icon-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                </div>
                <span className="tcard-tag">VAULT USER</span>
              </div>
              <div className="tcard-stars">★★★★★</div>
              <blockquote className="tcard-q">"Pulled the templates, had my first <span className="tcard-hl">agent pipeline running in under 2 hours</span>. Saved me at least a week of scaffolding."</blockquote>
              <div className="tcard-attr"><p>— R., solo founder, AI services</p></div>
            </div>
          </div>
          <div className="tcard-wrap">
            <div className="tcard-pin" />
            <div className="tcard tcard-2">
              <div className="tcard-icon">
                <div className="tcard-icon-circle tcard-icon-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <span className="tcard-tag">ENTERPRISE</span>
              </div>
              <div className="tcard-stars">★★★★★</div>
              <blockquote className="tcard-q">"I'm building a research proposal to automate the largest US healthcare network. Found your article and have the <span className="tcard-hl">exclusive mandate to bring on the team</span>."</blockquote>
              <div className="tcard-attr"><p>— K.G., enterprise lead, Series B healthcare startup</p></div>
            </div>
          </div>
          <div className="tcard-wrap">
            <div className="tcard-pin" />
            <div className="tcard tcard-3">
              <div className="tcard-icon">
                <div className="tcard-icon-circle tcard-icon-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
                </div>
                <span className="tcard-tag">SHIP FASTER</span>
              </div>
              <div className="tcard-stars">★★★★★</div>
              <blockquote className="tcard-q">"54 year old consulting business owner, no coding skills. Three weeks later I had a 6-agent team that produced a <span className="tcard-hl">$75k consulting package in 3 hours</span>."</blockquote>
              <div className="tcard-attr"><p>— R.T., political consultant, Florida</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* demand radar moved after testimonials */}
      <section className="radar-section mt-20 px-4">
        <div className="radar-top flex flex-col md:flex-row md:justify-between items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-heading font-black">Demand Radar</h2>
            <p className="mt-2 text-ink/70">
              Agents track real problems, validate demand, and ship solutions —
              all autonomously.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3 text-ink/50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            <span className="fm text-sm">
              <strong className="text-ink">{pipeline.totalIdeas}</strong> ideas in
              pipeline
            </span>
          </div>
        </div>
        <div className="pipeline-box mt-6 max-w-3xl mx-auto relative p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="font-bold text-lg">{pipeline.watching}</div>
              <div className="text-sm">Watching</div>
              <div className="text-xs text-ink/60">Ideas tracked</div>
            </div>
            <div>
              <div className="font-bold text-lg">{pipeline.validating}</div>
              <div className="text-sm">Validating</div>
              <div className="text-xs text-ink/60">Testing demand</div>
            </div>
            <div>
              <div className="font-bold text-lg">{pipeline.building}</div>
              <div className="text-sm">Building</div>
              <div className="text-xs text-ink/60">In development</div>
            </div>
            <div>
              <div className="font-bold text-lg">{pipeline.shipped}</div>
              <div className="text-sm">Shipped</div>
              <div className="text-xs text-ink/60">Live products</div>
            </div>
          </div>
        </div>
      </section>

      {/* newsletter form (static) */}
      <section className="newsletter mt-20">
        <div className="nl-badge">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="inline-block mr-1 align-middle"
          >
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22 11 13 2 9 22 2z" />
          </svg>
          JOIN 200+ BUILDERS
        </div>
        <h2>Stay in the loop</h2>
        <p>Builder updates, product drops, and ops insights. No spam, unsubscribe anytime.</p>
        <form className="nl-form" action="#">
          <div className="nl-row">
            <input type="email" required placeholder="Email address" className="nl-input" />
            <button type="submit" className="btn-sub">Subscribe</button>
          </div>
          <div className="nl-note">
            <span className="nl-dot" /> We will never sell your info
          </div>
        </form>
      </section>

      {/* spacer for footer */}
      <div className="h-32" />
    </>
  );
}

