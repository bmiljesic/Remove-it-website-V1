# Static Service Area Map Generation

This document explains how to generate a professional static SVG map from real US Census TIGER/Line geographic data.

## Current Implementation

The `StaticServiceAreaMap` component uses a simplified SVG with approximate boundaries. For production use with accurate geographic data, follow the steps below.

## Option 1: Using Mapbox Static Images API (Recommended)

The easiest way to get a professional, accurate static map is using Mapbox Static Images API:

```typescript
// Example API call
const mapboxToken = 'YOUR_MAPBOX_TOKEN';
const serviceAreas = [
  { state: 'Pennsylvania', county: 'Delaware' },
  { state: 'Delaware', county: 'all' },
  { state: 'Maryland', counties: ['Cecil', 'Harford'] }
];

// Generate static image URL
const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/` +
  `geojson(${encodeURIComponent(geoJsonString)})/` +
  `-75.5,39.5,7/800x600?access_token=${mapboxToken}`;
```

## Option 2: Generate SVG from TopoJSON (Server-Side)

### Prerequisites

```bash
npm install d3-geo topojson-client
```

### Generation Script

Create a Node.js script to generate the SVG:

```javascript
import * as d3 from 'd3-geo';
import { feature } from 'topojson-client';
import fs from 'fs';

async function generateMap() {
  // Fetch US Census TIGER/Line data
  const states = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
  const counties = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json');
  
  const statesTopo = await states.json();
  const countiesTopo = await counties.json();
  
  // Convert to GeoJSON
  const statesGeo = feature(statesTopo, statesTopo.objects.states);
  const countiesGeo = feature(countiesTopo, countiesTopo.objects.counties);
  
  // Filter to service area states
  const regionStates = statesGeo.features.filter(f => 
    ['Pennsylvania', 'Delaware', 'Maryland'].includes(f.properties.name)
  );
  
  // Create projection
  const projection = d3.geoAlbersUsa()
    .fitSize([800, 600], { type: 'FeatureCollection', features: regionStates });
  
  const path = d3.geoPath().projection(projection);
  
  // Generate SVG paths for each county
  // ... (render logic)
  
  // Save to file
  fs.writeFileSync('public/service-area-map.svg', svg);
}
```

### Run the Script

```bash
node scripts/generate-map.js
```

## Option 3: Use Online Tools

1. **QGIS** (Free GIS software):
   - Download US Census TIGER/Line shapefiles
   - Filter to your service areas
   - Export as SVG

2. **Mapshaper** (Online tool):
   - Upload TopoJSON/Shapefile
   - Simplify and export as SVG

3. **Datawrapper** (Online):
   - Create choropleth map
   - Export as SVG

## Data Sources

- **US Census TIGER/Line**: https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
- **Natural Earth**: https://www.naturalearthdata.com/
- **US Atlas (TopoJSON)**: https://github.com/topojson/us-atlas

## Service Areas

- **Pennsylvania**: Delaware County only
- **Delaware**: Entire state
- **Maryland**: Cecil County and Harford County only

## Styling Guidelines

- **Service Areas**: Brand color (hsl(var(--accent))) with 70% opacity
- **Non-Service Areas**: Light gray (#e5e7eb)
- **State Borders**: Dark gray (#374151), 2px width
- **County Borders**: Medium gray (#6b7280), dashed, 1.5px width
- **Water Bodies**: Light blue (#bfdbfe), 25% opacity
- **Background**: White

## Integration

The generated SVG can be:
1. Embedded directly in the component (current approach)
2. Saved as a static file in `/public` and referenced
3. Inlined in the HTML for optimal performance

## Performance

- Static SVG: ~10-50KB (depending on detail level)
- No JavaScript required for rendering
- Fast load time
- Scalable to any size

