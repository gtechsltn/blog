'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
const REPO_NAME = 'antosubash/blog-comments'
export default function Comments({ slug }: { slug: string }) {
  const commentNodeId = 'comments-' + slug
  const { theme } = useTheme()
  const utterancesTheme = theme === 'light' ? 'github-light' : 'photon-dark'

  useEffect(() => {
    const scriptParentNode = document.getElementById(commentNodeId)
    if (!scriptParentNode) return

    // docs - https://utteranc.es/
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', REPO_NAME)
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'comment :speech_balloon:')
    script.setAttribute('theme', utterancesTheme)
    script.setAttribute('crossorigin', 'anonymous')

    scriptParentNode.appendChild(script)

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node)
    }
  }, [commentNodeId, utterancesTheme])
  return <div className="pt-8" id={commentNodeId} />
}