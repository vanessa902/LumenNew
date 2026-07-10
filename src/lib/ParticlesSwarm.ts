import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

export class ParticlesSwarm {
  count: number
  container: HTMLElement
  speedMult: number
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  composer: EffectComposer
  dummy: THREE.Object3D
  color: THREE.Color
  target: THREE.Vector3
  pColor: THREE.Color
  geometry: THREE.ConeGeometry
  material: THREE.MeshBasicMaterial
  mesh: THREE.InstancedMesh
  positions: THREE.Vector3[]
  clock: THREE.Clock
  private rafId: number | null = null

  constructor(container: HTMLElement, count = 5000) {
    this.count = count
    this.container = container
    this.speedMult = 0.3

    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x000000, 0.01)
    this.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 2000)
    this.camera.position.set(0, 0, 100)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: true })
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.container.appendChild(this.renderer.domElement)

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.4, 0.85)
    bloomPass.strength = 1.8
    bloomPass.radius = 0.4
    bloomPass.threshold = 0
    this.composer.addPass(bloomPass)

    this.dummy = new THREE.Object3D()
    this.color = new THREE.Color()
    this.target = new THREE.Vector3()
    this.pColor = new THREE.Color()

    this.geometry = new THREE.ConeGeometry(0.1, 0.5, 4).rotateX(Math.PI / 2)
    this.material = new THREE.MeshBasicMaterial({ color: 0x2a85ff })

    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.count)
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.scene.add(this.mesh)

    this.positions = []
    for (let i = 0; i < this.count; i++) {
      this.positions.push(new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100))
      this.mesh.setColorAt(i, this.color.setHex(0x2a85ff))
    }

    this.clock = new THREE.Clock()
    this.animate = this.animate.bind(this)
    this.animate()
  }

  animate() {
    this.rafId = requestAnimationFrame(this.animate)
    const time = this.clock.getElapsedTime() * this.speedMult

    const count = this.count

    for (let i = 0; i < this.count; i++) {
      const target = this.target
      const color = this.pColor

      const r = 55
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi + time
      target.set(r * Math.cos(theta) * Math.sin(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(phi))
      color.setHex(0x2a85ff)

      this.positions[i].lerp(this.target, 0.1)
      this.dummy.position.copy(this.positions[i])
      this.dummy.updateMatrix()
      this.mesh.setMatrixAt(i, this.dummy.matrix)
      this.mesh.setColorAt(i, this.pColor)
    }
    this.mesh.instanceMatrix.needsUpdate = true
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true

    this.composer.render()
  }

  resize(width: number, height: number) {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
    this.composer.setSize(width, height)
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
    this.geometry.dispose()
    this.material.dispose()
    this.scene.remove(this.mesh)
    this.renderer.dispose()
    if (this.renderer.domElement.parentElement === this.container) {
      this.container.removeChild(this.renderer.domElement)
    }
  }
}
