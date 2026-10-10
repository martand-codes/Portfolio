import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../Utils/animations';
import { 
  Code2, GitBranch, Cpu, Database, Activity, 
  Map, Camera, Network, Zap, ShieldAlert, FileSearch, ArrowRight,
  MonitorPlay, PlayCircle
} from 'lucide-react';
import { ProjectTelemetry } from './ProjectTelemetry';
import { ExportButton } from './ExportButton';
import { aankhoDekhaReport } from '../../data/reports';
import ReactMarkdown from 'react-markdown';
import incidentsData from '../../data/incidents-data.json';

const MarkdownComponents = {
  p: ({ children }: any) => <p className="mb-3 last:mb-0 text-white/80">{children}</p>,
  code: ({ children }: any) => (
    <code className="bg-red-500/10 px-1.5 py-0.5 rounded text-red-400 border border-red-500/20">{children}</code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-black/60 p-4 border-l-2 border-red-500/50 rounded-r overflow-x-auto my-3 font-mono text-xs">
      <code className="text-muted">{children}</code>
    </pre>
  ),
  strong: ({ children }: any) => <strong className="text-white font-bold">{children}</strong>,
  ul: ({ children }: any) => <ul className="list-disc list-inside space-y-1 mb-3 text-white/80">{children}</ul>,
  li: ({ children }: any) => <li>{children}</li>,
};

export const AankhoDekha = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'backend' | 'evidence' | 'incidents'>('architecture');
  
  const aankhoIncidents = incidentsData.incidents.filter(i => i.projectName.toLowerCase() === 'aankhodekha');

  return (
    <motion.div variants={fadeUp} className="bg-panel rounded-2xl border border-white/5 shadow-2xl overflow-hidden group">
      {/* Header */}
      <div className="border-b border-white/5 bg-background/30 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-3xl font-bold text-white tracking-tight">AankhoDekha</h2>
              <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-accent font-bold tracking-widest">LIVE DEMO AWS EC2</span>
              </div>
            </div>
            <p className="text-accent font-mono text-sm mb-3">MULTI-CAMERA ANPR & TRAFFIC INTELLIGENCE PLATFORM</p>
            <p className="text-muted max-w-2xl text-sm leading-relaxed mb-4">
              Transforms independent camera observations into a unified, searchable view of vehicle movement across a city. Built for <span className="text-white font-semibold">Smart India Hackathon 2026</span>.
            </p>
            <ProjectTelemetry projectId="AankhoDekha" color="accent" />
          </div>
          
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <a href="http://54.146.92.165" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/30 text-success hover:bg-success/20 transition-colors rounded-lg text-xs font-mono font-bold">
              <MonitorPlay className="w-4 h-4" /> LIVE DEMO
            </a>
            <a href="https://youtu.be/wvSjrwR0wNw?si=nLNq-PNcOxDCLl3P&t=62s" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors rounded-lg text-xs font-mono">
              <PlayCircle className="w-4 h-4 text-[#FF0000]" /> WATCH EXPLANATION (1:02)
            </a>
            <ExportButton fileName="AankhoDekha_Architecture" content={aankhoDekhaReport} color="accent" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="border-b border-white/5 bg-background/10 p-4 px-8 flex flex-wrap gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
        <span className="px-2 py-1 border border-white/10 rounded">FastAPI</span>
        <span className="px-2 py-1 border border-white/10 rounded">YOLOv8</span>
        <span className="px-2 py-1 border border-white/10 rounded">PaddleOCR</span>
        <span className="px-2 py-1 border border-white/10 rounded">PostGIS</span>
        <span className="px-2 py-1 border border-white/10 rounded">AWS EC2</span>
        <span className="px-2 py-1 border border-white/10 rounded">Docker Compose</span>
        <span className="px-2 py-1 border border-white/10 rounded">WebSockets</span>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-white/5 bg-background/5">
        <button 
          onClick={() => setActiveTab('architecture')}
          className={`px-6 py-4 text-xs font-mono tracking-widest uppercase transition-colors ${activeTab === 'architecture' ? 'text-accent border-b-2 border-accent bg-accent/5' : 'text-muted hover:text-white hover:bg-white/5'}`}
        >
          Architecture
        </button>
        <button 
          onClick={() => setActiveTab('backend')}
          className={`px-6 py-4 text-xs font-mono tracking-widest uppercase transition-colors ${activeTab === 'backend' ? 'text-accent border-b-2 border-accent bg-accent/5' : 'text-muted hover:text-white hover:bg-white/5'}`}
        >
          Backend Code
        </button>
        <button 
          onClick={() => setActiveTab('evidence')}
          className={`px-6 py-4 text-xs font-mono tracking-widest uppercase transition-colors ${activeTab === 'evidence' ? 'text-accent border-b-2 border-accent bg-accent/5' : 'text-muted hover:text-white hover:bg-white/5'}`}
        >
          Visual Evidence
        </button>
        <button 
          onClick={() => setActiveTab('incidents')}
          className={`px-6 py-4 text-xs font-mono tracking-widest uppercase transition-colors ${activeTab === 'incidents' ? 'text-accent border-b-2 border-accent bg-accent/5' : 'text-muted hover:text-white hover:bg-white/5'}`}
        >
          Incidents
        </button>
      </div>

      {activeTab === 'architecture' && (
      <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in duration-500">
        
        {/* Left Column: Pipeline UI */}
        <div className="col-span-1 lg:col-span-5">
          <h3 className="text-sm font-mono text-white mb-6 flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent" /> ANPR PIPELINE
          </h3>
          
          <div className="flex flex-col font-mono text-xs">
            <div className="flex items-center gap-4 bg-background/50 border border-white/10 p-4 rounded-xl relative z-10">
              <Camera className="w-5 h-5 text-muted shrink-0" />
              <div>
                <div className="text-white">Video Frames</div>
                <div className="text-muted text-[10px] mt-1">Multi-camera ingestion stream</div>
              </div>
            </div>
            
            <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-white/10"></div></div>
            
            <div className="flex items-center gap-4 bg-accent/5 border border-accent/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(255,30,30,0.05)]">
              <Cpu className="w-5 h-5 text-accent shrink-0" />
              <div>
                <div className="text-accent font-bold">YOLOv8 Detector</div>
                <div className="text-muted text-[10px] mt-1">Plate & vehicle bounding boxes (CUDA/CPU)</div>
              </div>
            </div>

            <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-accent/20"></div></div>

            <div className="flex items-center gap-4 bg-accent/5 border border-accent/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(255,30,30,0.05)]">
              <FileSearch className="w-5 h-5 text-accent shrink-0" />
              <div>
                <div className="text-accent font-bold">PaddleOCR & Validation</div>
                <div className="text-muted text-[10px] mt-1">Indian plate format + RTO state code checks</div>
              </div>
            </div>

            <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-accent/20"></div></div>

            <div className="flex items-center gap-4 bg-background/50 border border-white/10 p-4 rounded-xl relative z-10">
              <Network className="w-5 h-5 text-muted shrink-0" />
              <div>
                <div className="text-white">Temporal Clustering</div>
                <div className="text-muted text-[10px] mt-1">Groups multi-frame reads into one clean event</div>
              </div>
            </div>

            <div className="flex justify-center -my-1 relative z-0"><div className="w-px h-8 bg-white/10"></div></div>

            <div className="flex items-center gap-4 bg-success/5 border border-success/20 p-4 rounded-xl relative z-10 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
              <Database className="w-5 h-5 text-success shrink-0" />
              <div>
                <div className="text-success font-bold">PostgreSQL + PostGIS</div>
                <div className="text-muted text-[10px] mt-1">Persists plate, camera_id, GPS, timestamp</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent" /> TELEMETRY & OBSERVABILITY
            </h3>
            <div className="bg-[#0a0a0a] border border-white/5 p-5 rounded-xl space-y-5">
              <div>
                <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  Queue Backpressure Monitoring
                </h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Tracks ingestion rate vs inference throughput. If the YOLO/OCR worker queue spikes, the system actively detects backpressure and dynamically routes processing to CPU fallback threads to prevent memory exhaustion.
                </p>
              </div>
              <div className="w-full h-px bg-white/5"></div>
              <div>
                <h4 className="text-white font-mono text-[11px] mb-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  Spatiotemporal Delta Engine
                </h4>
                <p className="text-muted text-[11px] leading-relaxed">
                  Continuously queries PostGIS to calculate the <span className="text-blue-400/80 font-semibold">Δt</span> (time delta) and <span className="text-blue-400/80 font-semibold">Δd</span> (distance) between consecutive sightings of the exact same license plate across different physical camera nodes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Flexes */}
        <div className="col-span-1 lg:col-span-7 space-y-8">
          <div>
            <h3 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent" /> CORE ENGINEERING FEATURES
            </h3>
            
            <div className="space-y-6">
              <div className="bg-background/40 border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-mono text-sm">Device-Aware CUDA Inference</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed">
                  The ANPR pipeline is computationally expensive. Developed using an NVIDIA RTX 4060 (3,072 CUDA cores) for accelerated PyTorch/Ultralytics inference, but deployed to a cost-effective AWS EC2 t3.large (CPU-only). The detector selects execution devices at runtime dynamically — identical correctness, scaling throughput based on hardware.
                </p>
              </div>

              <div className="bg-background/40 border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-mono text-sm">Cloned Plate Anomaly Detection</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed">
                  Uses PostGIS spatial data and timestamps to calculate implied travel speeds between cameras. If a vehicle is detected at Camera A, and then Camera B in a timeframe that implies travel speeds over 120km/h, the system flags the plates as cloned/duplicated.
                </p>
              </div>

              <div className="bg-background/40 border border-white/5 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Map className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-mono text-sm">Cross-Camera Trajectory Reconstruction</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed">
                  Instead of treating cameras as isolated, every event stores <span className="font-mono bg-white/5 px-1 rounded text-accent">plate, camera_id, lat, lng, timestamp</span>. The system pieces these together to reconstruct city-wide vehicle flow, using OSRM to map exact physical road networks between sightings.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-mono text-white mb-4 mt-8 flex items-center gap-2">
              <Database className="w-4 h-4 text-accent" /> POSTGIS SCHEMA ARCHITECTURE
            </h3>
            <div className="bg-[#0a0a0a] border border-white/5 p-5 rounded-xl font-mono text-[11px] overflow-x-auto text-muted leading-relaxed">
              <div className="text-accent/80 mb-2">// Core Entity-Relationship Design (Optimized for Spatiotemporal Queries)</div>
              <div className="flex flex-col gap-2">
                <div><span className="text-accent font-bold">TABLE</span> Camera <br/>( id UUID PRIMARY KEY, location GEOMETRY(POINT, 4326) <span className="text-accent/50">/* GIST Index */</span> )</div>
                <div><span className="text-accent font-bold">TABLE</span> PlateEvent <br/>( id UUID, plate_text VARCHAR, camera_id FK, timestamp TIMESTAMPTZ <span className="text-accent/50">/* BRIN Index */</span> )</div>
                <div><span className="text-accent font-bold">TABLE</span> Blacklist <br/>( plate_text VARCHAR PRIMARY KEY <span className="text-accent/50">/* B-Tree Index */</span> )</div>
              </div>
            </div>
          </div>

          <a href="https://github.com/sam28iksha/AankhoDekha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-accent/10 border border-white/10 hover:border-accent/50 text-white transition-colors rounded-lg text-xs font-mono group mt-4">
            <GitBranch className="w-4 h-4 text-accent" />
            VIEW FULL SOURCE REPOSITORY
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      )}

      {activeTab === 'backend' && (
        <div className="p-8 space-y-12 animate-in fade-in duration-500">
          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-accent" /> FASTAPI ASYNC INGESTION ROUTE
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Core ingestion route from backend/api/ingest.py. Handles file uploads, extracts frames, and passes them to YOLO and PaddleOCR asynchronously.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4">
              <pre className="text-white/80 leading-relaxed">
<span className="text-purple-400">@router.post</span>(<span className="text-accent">"/upload"</span>){"\n"}
<span className="text-purple-400">async def</span> <span className="text-blue-400">upload_and_detect</span>({"(\n"}
{"    "}background_tasks: BackgroundTasks,{"\n"}
{"    "}file: UploadFile = <span className="text-blue-400">File</span>(...),{"\n"}
{"    "}camera_id: str | <span className="text-orange-400">None</span> = <span className="text-blue-400">Form</span>(<span className="text-orange-400">None</span>),{"\n"}
{"    "}db: AsyncSession = <span className="text-blue-400">Depends</span>(get_db),{"\n"}
{"    "}_user: User = <span className="text-blue-400">Depends</span>(require_role(<span className="text-accent">"investigator"</span>)),{"\n"}
{"):"}{"\n"}
{"    "}<span className="text-purple-400">if</span> ext <span className="text-purple-400">in</span> _IMAGE_EXTS:{"\n"}
{"        "}frame = cv2.<span className="text-blue-400">imread</span>(<span className="text-blue-400">str</span>(dest_path)){"\n"}
{"        "}<span className="text-purple-400">if</span> frame <span className="text-purple-400">is</span> <span className="text-orange-400">None</span>:{"\n"}
{"            "}<span className="text-purple-400">raise</span> <span className="text-blue-400">HTTPException</span>(status_code=<span className="text-orange-400">400</span>, detail=<span className="text-accent">"Could not read uploaded image."</span>){"\n"}
{"        \n"}
{"        "}loop = asyncio.<span className="text-blue-400">get_running_loop</span>(){"\n"}
{"        \n"}
{"        "}<span className="text-muted"># 1. Plate detection (YOLO)</span>{"\n"}
{"        "}detections = <span className="text-purple-400">await</span> loop.<span className="text-blue-400">run_in_executor</span>(<span className="text-orange-400">None</span>, plate_detector.detect, frame){"\n"}
{"        \n"}
{"        "}<span className="text-muted"># 2. Vehicle detection (Only runs if a plate is detected)</span>{"\n"}
{"        "}vehicle_dets = []{"\n"}
{"        "}<span className="text-purple-400">if</span> detections:{"\n"}
{"            "}vehicle_dets = <span className="text-purple-400">await</span> loop.<span className="text-blue-400">run_in_executor</span>(<span className="text-orange-400">None</span>, vehicle_detector.detect, frame){"\n"}
{"            \n"}
{"        "}results = []{"\n"}
{"        "}<span className="text-purple-400">for</span> det <span className="text-purple-400">in</span> detections:{"\n"}
{"            "}<span className="text-muted"># Associate plate with a specific vehicle bounding box</span>{"\n"}
{"            "}vehicle = <span className="text-blue-400">_associate_vehicle</span>(det, vehicle_dets){"\n"}
{"            \n"}
{"            "}<span className="text-muted"># 3. OCR (PaddleOCR)</span>{"\n"}
{"            "}plate_text, ocr_conf = <span className="text-purple-400">await</span> loop.<span className="text-blue-400">run_in_executor</span>(<span className="text-orange-400">None</span>, plate_ocr.read, det.crop){"\n"}
{"            "}<span className="text-purple-400">if not</span> plate_text <span className="text-purple-400">or</span> ocr_conf &lt; settings.OCR_CONFIDENCE_THRESHOLD:{"\n"}
{"                "}<span className="text-purple-400">continue</span>{"\n"}
{"                \n"}
{"            "}combined_conf = (det.confidence * ocr_conf) ** <span className="text-orange-400">0.5</span>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
              <Database className="w-4 h-4 text-accent" /> SQLALCHEMY PERSISTENCE
            </h3>
            <p className="text-muted text-xs font-mono mb-4">
              // Flush execution for PlateEvent mapping, utilizing the SQLAlchemy Identity Map for efficient entity updates.
            </p>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-xs overflow-x-auto p-4">
              <pre className="text-white/80 leading-relaxed">
{"    "}<span className="text-muted"># Persist observation</span>{"\n"}
{"    "}db_event = <span className="text-blue-400">PlateEvent</span>({"(\n"}
{"        "}vehicle_id=vehicle_id,{"\n"}
{"        "}plate_number=plate_event.plate_number,{"\n"}
{"        "}camera_id=plate_event.camera_id,{"\n"}
{"        "}timestamp=plate_event.timestamp,{"\n"}
{"        "}confidence=plate_event.confidence,{"\n"}
{"        "}vehicle_type=plate_event.vehicle_type <span className="text-purple-400">or</span> <span className="text-accent">"unknown"</span>,{"\n"}
{"        "}color=plate_event.color <span className="text-purple-400">or</span> <span className="text-accent">"unknown"</span>,{"\n"}
{"        "}frame_snapshot_path=plate_event.frame_snapshot_path,{"\n"}
{"    )"}{"\n"}
{"    "}db.<span className="text-blue-400">add</span>(db_event){"\n"}
{"    "}<span className="text-purple-400">await</span> db.<span className="text-blue-400">flush</span>()  <span className="text-muted"># Flush to get the ID without committing the transaction yet</span>{"\n"}
{"\n"}
{"    "}<span className="text-muted"># Update Vehicle last_seen entity using SQLAlchemy Identity Map</span>{"\n"}
{"    "}vehicle = <span className="text-purple-400">await</span> db.<span className="text-blue-400">get</span>(Vehicle, vehicle_id){"\n"}
{"    "}<span className="text-purple-400">if</span> vehicle:{"\n"}
{"        "}vehicle.last_seen = plate_event.timestamp
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
                <Network className="w-4 h-4 text-accent" /> DOCKER COMPOSE ARCHITECTURE
              </h3>
              <p className="text-muted text-xs font-mono mb-4">
                // PostGIS database mapping and FastAPI service health checks.
              </p>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-[10px] sm:text-xs overflow-x-auto p-4 h-full">
                <pre className="text-white/80 leading-relaxed">
<span className="text-accent">  db:</span>{"\n"}
{"    "}<span className="text-purple-400">image:</span> <span className="text-blue-400">postgis/postgis:16-3.4</span>{"\n"}
{"    "}<span className="text-purple-400">container_name:</span> <span className="text-blue-400">aankhodekha_db</span>{"\n"}
{"    "}<span className="text-purple-400">restart:</span> <span className="text-blue-400">unless-stopped</span>{"\n"}
{"    "}<span className="text-purple-400">volumes:</span>{"\n"}
{"      "}<span className="text-blue-400">- pg_data:/var/lib/postgresql/data</span>{"\n"}
{"      "}<span className="text-blue-400">- ./backend/db/init-scripts:/docker-entrypoint-initdb.d:ro</span>{"\n"}
{"    "}<span className="text-purple-400">healthcheck:</span>{"\n"}
{"      "}<span className="text-purple-400">test:</span> <span className="text-blue-400">[ "CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB" ]</span>{"\n"}
{"      "}<span className="text-purple-400">interval:</span> <span className="text-blue-400">5s</span>{"\n"}
{"\n"}
<span className="text-accent">  backend:</span>{"\n"}
{"    "}<span className="text-purple-400">build:</span>{"\n"}
{"      "}<span className="text-purple-400">context:</span> <span className="text-blue-400">./backend</span>{"\n"}
{"    "}<span className="text-purple-400">container_name:</span> <span className="text-blue-400">aankhodekha_backend</span>{"\n"}
{"    "}<span className="text-purple-400">environment:</span>{"\n"}
{"      "}<span className="text-blue-400">- YOLO_WEIGHTS_PATH=/app/models/best.pt</span>{"\n"}
{"    "}<span className="text-purple-400">volumes:</span>{"\n"}
{"      "}<span className="text-blue-400">- ./data:/app/data</span>{"\n"}
{"      "}<span className="text-blue-400">- ./models:/app/models</span>{"\n"}
{"    "}<span className="text-purple-400">depends_on:</span>{"\n"}
{"      "}<span className="text-purple-400">db:</span>{"\n"}
{"        "}<span className="text-purple-400">condition:</span> <span className="text-blue-400">service_healthy</span>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-accent" /> LIVE SYSTEM LOGS
              </h3>
              <p className="text-muted text-xs font-mono mb-4">
                // Catching a "plate cloning" incident in real-time.
              </p>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-[10px] sm:text-xs overflow-x-auto p-4 h-full">
                <pre className="text-white/80 leading-relaxed whitespace-pre-wrap">
<span className="text-muted">INFO:     Started server process [1284]</span>{"\n"}
<span className="text-muted">INFO:     Uvicorn running on http://0.0.0.0:8000</span>{"\n"}
<span className="text-blue-400">INFO:api.ingest:</span>Ingestion started for camera 'cam_01' (Main Gate){"\n"}
<span className="text-blue-400">INFO:anpr.detector:</span>YOLOv8 Plate Detector loaded from /app/models/best.pt in 1.2s{"\n"}
<span className="text-blue-400">INFO:anpr.pipeline:</span>Processing frame 145 - Detected 1 plate(s).{"\n"}
{"\n"}
<span className="text-red-400 font-bold">WARNING:api.ingest:🚨 POSSIBLE PLATE CLONING: DL8CAF5030 at South Gate</span>{"\n"}
<span className="text-orange-400">Possible plate inconsistency: plate DL8CAF5030 was previously observed on a white car, but is now observed on a black motorcycle.</span>{"\n"}
{"\n"}
<span className="text-blue-400">INFO:api.alert_manager:</span>Broadcasted plate_cloning alert to connected WebSocket clients.{"\n"}
<span className="text-success">INFO:api.ingest:</span>Ingestion complete for cam_01: 342 events written.
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'evidence' && (
        <div className="p-8 space-y-12 animate-in fade-in duration-500">
          <div>
            <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-6">
              <Activity className="w-4 h-4 text-accent" /> REACT.JS ANALYTICS DASHBOARD
            </h3>
            <div className="border border-white/10 rounded-xl overflow-hidden bg-black/50 p-2">
              <img src="/Projects/Aankhodekha/Dashboard.png" alt="Aankhodekha Dashboard" className="w-full rounded-lg border border-white/5" />
            </div>
            <p className="text-muted font-mono text-xs mt-4">
              // Live dashboard visualizing geospatial plate sightings, alert states, and camera node statuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-6">
                <Camera className="w-4 h-4 text-accent" /> PIPELINE PREVIEW
              </h3>
              <div className="border border-white/10 rounded-xl overflow-hidden bg-black/50 p-2 h-64">
                <img src="/Projects/Aankhodekha/OCR_Preview.png" alt="OCR Pipeline Preview" className="w-full h-full object-cover rounded-lg border border-white/5" />
              </div>
              <p className="text-muted font-mono text-xs mt-4">
                // Raw inference frames showing YOLOv8 bounding boxes and OCR confidence scores.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-mono text-white flex items-center gap-2 mb-6">
                <Database className="w-4 h-4 text-accent" /> SYSTEM AUDIT LOGS
              </h3>
              <div className="border border-white/10 rounded-xl overflow-hidden bg-black/50 p-2 h-64">
                <img src="/Projects/Aankhodekha/AuditLogs.png" alt="Audit Logs" className="w-full h-full object-cover rounded-lg border border-white/5 object-top" />
              </div>
              <p className="text-muted font-mono text-xs mt-4">
                // Immutable audit trail for flagged vehicles and system anomalies.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'incidents' && (
        <div className="p-8 space-y-8 animate-in fade-in duration-500">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-8">
            <ShieldAlert className="w-6 h-6 text-red-500" />
            <h2 className="text-xl font-bold text-white font-mono">Verified Engineering Incidents</h2>
          </div>
          
          {aankhoIncidents.map((incident) => (
            <div key={incident.id} className="border border-white/5 bg-[#0a0a0a] rounded-xl relative group overflow-hidden shadow-2xl hover:border-red-500/30 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white hover:text-accent transition-colors">
                    <a href={incident.githubUrl} target="_blank" rel="noopener noreferrer">
                      {incident.title}
                    </a>
                  </h3>
                  <a href={incident.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted hover:text-white flex items-center gap-2 transition-colors border border-white/10 px-3 py-1.5 rounded bg-white/5">
                    ISSUE #{incident.number}
                  </a>
                </div>

                <div className="space-y-6 font-mono text-sm">
                  {incident.failure && (
                    <div>
                      <div className="text-red-400 mb-2 text-xs tracking-widest flex items-center gap-1">FAILURE</div>
                      <div className="text-white/90 bg-red-500/5 p-4 rounded-lg border border-red-500/20">
                        <ReactMarkdown components={MarkdownComponents}>{incident.failure}</ReactMarkdown>
                      </div>
                    </div>
                  )}

                  {incident.rootCause && (
                    <div>
                      <div className="text-orange-400 mb-2 text-xs tracking-widest">ROOT_CAUSE</div>
                      <div className="text-white/90 bg-orange-500/5 p-4 rounded-lg border border-orange-500/20">
                        <ReactMarkdown components={MarkdownComponents}>{incident.rootCause}</ReactMarkdown>
                      </div>
                    </div>
                  )}

                  {incident.resolution && (
                    <div>
                      <div className="text-success mb-2 text-xs tracking-widest">RESOLUTION</div>
                      <div className="text-white/90 bg-success/5 p-4 rounded-lg border border-success/20">
                        <ReactMarkdown components={MarkdownComponents}>{incident.resolution}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
