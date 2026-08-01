import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img src="/logo.svg" alt="RCO Social" className="footer-logo" />
            <p style={{ maxWidth: 320 }}>
              Senior-level web development, next-gen SEO &amp; agentic discovery,
              AI content, and social media marketing for ambitious brands.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/seo-agentic-discovery">SEO &amp; Agentic Discovery</Link></li>
              <li><Link href="/services/ai-content">AI Video &amp; Image Content</Link></li>
              <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link href="/services/custom">Custom AI Services</Link></li>
              <li><Link href="/ai-chat-agent">AI Chat Agent</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/real-estate">Real Estate</Link></li>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:grow@rcosocial.com">grow@rcosocial.com</a></li>
              <li><Link href="/#contact">Request a free audit</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RCO Social. All rights reserved.</span>
          <span>Built for senior-level digital growth.</span>
        </div>
      </div>
    </footer>
  );
}
