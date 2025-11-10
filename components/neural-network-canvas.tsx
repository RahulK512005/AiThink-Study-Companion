"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
}

export function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const particleCount = 60
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 1.5 + 0.5,
      })
    }
    particlesRef.current = particles

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      frameRef.current++

      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = "rgba(12, 24, 48, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse attraction
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const attraction = Math.max(0, 200 - distance) / 200

        p.vx += (dx / distance) * attraction * 0.02
        p.vy += (dy / distance) * attraction * 0.02

        // Natural drift
        p.vx += (Math.random() - 0.5) * 0.01
        p.vy += (Math.random() - 0.5) * 0.01
        p.vz += (Math.random() - 0.5) * 0.001

        // Damping
        p.vx *= 0.98
        p.vy *= 0.98
        p.vz *= 0.98

        // Update position
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        // Wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        if (p.z < 0) p.z = 2
        if (p.z > 2) p.z = 0

        // Draw particle with depth
        const brightness = (p.z / 2) * 100 + 100
        ctx.fillStyle = `hsl(220, 80%, ${brightness}%)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (p.z / 2 + 0.5), 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = Math.max(0, 1 - distance / 150) * 0.3
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-60" />
}
