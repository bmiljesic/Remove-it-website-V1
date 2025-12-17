/**
 * Script to generate a static SVG map from real geographic data
 * Run with: node scripts/generate-map.js
 * 
 * This script fetches real US Census TIGER/Line data and generates
 * a clean, static SVG map highlighting the service areas.
 */

import * as d3 from "d3-geo";
import { feature } from "topojson-client";
import fs from "fs";
import path from "path";

const SERVICE_AREAS = {
  pennsylvania: ["Delaware County"],
  delaware: "all",
  maryland: ["Cecil County", "Harford County"],
};

const WIDTH = 800;
const HEIGHT = 600;
const BRAND_COLOR = "#3b82f6"; // Blue accent color

async function generateMap() {
  try {
    console.log("Fetching geographic data...");

    // Fetch US states and counties from Natural Earth (via CDN)
    const [statesResponse, countiesResponse] = await Promise.all([
      fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"),
      fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json"),
    ]);

    const statesTopo = await statesResponse.json();
    const countiesTopo = await countiesResponse.json();

    console.log("Processing geographic data...");

    // Convert to GeoJSON
    const states = feature(statesTopo, statesTopo.objects.states);
    const counties = feature(countiesTopo, countiesTopo.objects.counties);

    // Filter to our region
    const regionStates = states.features.filter((f) =>
      ["Pennsylvania", "Delaware", "Maryland"].includes(f.properties.name)
    );

    // Create projection
    const projection = d3
      .geoAlbersUsa()
      .fitSize([WIDTH, HEIGHT], { type: "FeatureCollection", features: regionStates });

    const path = d3.geoPath().projection(projection);

    // Helper to check if county is in service area
    const isServiceArea = (stateName, countyName) => {
      if (stateName === "Pennsylvania") {
        return SERVICE_AREAS.pennsylvania.includes(countyName);
      }
      if (stateName === "Delaware") {
        return SERVICE_AREAS.delaware === "all";
      }
      if (stateName === "Maryland") {
        return SERVICE_AREAS.maryland.includes(countyName);
      }
      return false;
    };

    // Build SVG
    let svg = `<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" style="background: white;">
  <g>`;

    // Render non-service counties in light gray
    counties.features.forEach((county) => {
      const stateName = county.properties.state;
      const countyName = county.properties.name;

      if (!["Pennsylvania", "Delaware", "Maryland"].includes(stateName)) {
        return;
      }

      const isService = isServiceArea(stateName, countyName);
      if (!isService) {
        const d = path(county);
        if (d) {
          svg += `\n    <path d="${d}" fill="#e5e7eb" stroke="#d1d5db" stroke-width="0.5" />`;
        }
      }
    });

    // Render service area counties in brand color
    counties.features.forEach((county) => {
      const stateName = county.properties.state;
      const countyName = county.properties.name;

      if (!["Pennsylvania", "Delaware", "Maryland"].includes(stateName)) {
        return;
      }

      const isService = isServiceArea(stateName, countyName);
      if (isService) {
        const d = path(county);
        if (d) {
          svg += `\n    <path d="${d}" fill="${BRAND_COLOR}" fill-opacity="0.7" stroke="#1f2937" stroke-width="1" />`;
        }
      }
    });

    // Render state borders
    regionStates.forEach((state) => {
      const d = path(state);
      if (d) {
        svg += `\n    <path d="${d}" fill="none" stroke="#374151" stroke-width="1.5" />`;
      }
    });

    svg += `\n  </g>\n</svg>`;

    // Save to file
    const outputPath = path.join(process.cwd(), "public", "service-area-map.svg");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, svg);

    console.log(`✅ Map generated successfully: ${outputPath}`);
  } catch (error) {
    console.error("Error generating map:", error);
    process.exit(1);
  }
}

generateMap();

