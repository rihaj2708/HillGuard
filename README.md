# 🏔️ HillGuard — Offline Landslide Reporter & Mesh Relay

HillGuard is a Progressive Web App (PWA) concept designed to help communities report slope hazards and relay emergency landslide alerts in areas with unreliable connectivity.

The current frontend provides three main sections:

- **Slope Hazard Reporting** — select a hazard photo and start an on-device analysis/report workflow.
- **P2P Mesh Alert Relay** — controls for broadcasting an emergency alert over Bluetooth and listening for nearby peer alerts.
- **Offline Incident Queue** — an area intended to display locally stored incident reports.

## ✨ Features

### 1. Slope Hazard Reporter
Users can select an image of a possible slope hazard such as:

- Ground cracks
- Seepage
- Retaining-wall deformation
- Other visible slope damage

The interface includes an image preview and an **Analyze & Save Report** action.

### 2. P2P Mesh Alert Relay
HillGuard includes controls for:

- **Broadcast Emergency Alert (Bluetooth)**
- **Listen for Nearby Peer Alerts**

This is intended to support last-mile alert propagation between nearby devices.

### 3. Offline Incident Queue
The UI includes an incident-log section for reports that are queued while the device is offline.

### 4. Emergency Alert Banner
The application contains a high-risk emergency banner intended to clearly communicate an official landslide warning.

## 🛠️ Technology

The provided frontend uses:

- **HTML5**
- **CSS3**
- **JavaScript**
- **PWA Web App Manifest**
- **MediaPipe Tasks Vision** (included in the current HTML)
- **Bluetooth / Web APIs** for the intended peer-relay functionality

The main page is `index.html`, and it loads application logic from:

```text
app.js
```

## 📁 Project Structure

```text
HillGuard/
├── index.html
├── app.js
└── README.md
```

> `app.js` must contain the JavaScript implementations for the buttons and functions referenced by the current HTML, including `analyzeAndReport()`, `broadcastAlert()`, and `listenForRelay()`.

## 🚀 Run Locally

### Option 1 — Simple local server

Because browser APIs such as camera, Bluetooth, and PWA functionality can have security-context requirements, it is recommended to run HillGuard through a local HTTP server rather than opening the HTML file directly.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2 — VS Code

1. Open the HillGuard folder in VS Code.
2. Add `app.js` beside `index.html`.
3. Install a local-server extension such as Live Server if needed.
4. Start the local server.
5. Open the displayed local URL in a supported browser.

## 📱 User Flow

```text
Open HillGuard
      ↓
Select a slope-hazard photo
      ↓
Preview the photo
      ↓
Analyze & Save Report
      ↓
Store incident locally
      ↓
If an emergency exists
      ↓
Broadcast alert to nearby peers
      ↓
Nearby devices listen and relay the alert
```

## ⚠️ Current Implementation Notes

The provided `index.html` defines the interface and references application functions in `app.js`. The actual AI classification, persistent offline storage, and Bluetooth peer-to-peer relay logic are not contained in the supplied HTML file, so those parts require their corresponding JavaScript implementation.

Also, the current HTML loads MediaPipe Tasks Vision from a **jsDelivr CDN**. Therefore, this exact version is **not completely self-contained/offline** until that dependency is bundled or cached locally.

The manifest is currently embedded directly in the HTML as a data URL.

## 🔐 Offline-First Roadmap

For a production-ready offline implementation, consider adding:

- Service Worker for offline application caching
- IndexedDB for incident/report storage
- Locally bundled AI model
- On-device image classification
- Bluetooth/Web Bluetooth or a native Android Bluetooth layer
- Signed/validated emergency messages
- Report timestamps and device IDs
- Retry queue for reports waiting for connectivity
- Background synchronization when connectivity returns
- Clear user-visible severity explanations

## 🧪 Testing Checklist

- [ ] App opens without internet after the required assets are cached.
- [ ] Hazard image can be selected.
- [ ] Image preview works.
- [ ] AI analysis returns a severity classification.
- [ ] Incident is saved locally.
- [ ] Saved incidents remain after restarting the app.
- [ ] Emergency alert can be broadcast.
- [ ] Nearby peer alerts can be received.
- [ ] Alerts are displayed clearly.
- [ ] Queued reports synchronize when connectivity returns.
- [ ] Emergency warnings are not confused with ordinary hazard reports.

## 🎯 Hackathon Value

HillGuard targets a critical communication gap in mountainous and landslide-prone regions: **collecting local hazard observations and helping emergency warnings reach people beyond normal internet coverage**.

The combination of on-device processing, offline storage, and peer-to-peer alert relay is intended to make the system useful even when conventional connectivity is unavailable.

## 📄 License

Add the project's chosen license here before public release, for example MIT, Apache-2.0, or another license appropriate for the hackathon/project.
