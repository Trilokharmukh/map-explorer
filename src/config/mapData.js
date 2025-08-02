export const MAP_DATA = {
  points: [
    {
      id: "point-1",
      type: "Point",
      name: "Taj Mahal",
      coordinates: [27.1751, 78.0421],
      properties: {
        category: "Monument",
        built: "1632-1653",
        architect: "Ustad Ahmad Lahauri",
        material: "White marble",
        unesco_site: true,
      },
    },
    {
      id: "point-2",
      type: "Point",
      name: "Gateway of India",
      coordinates: [18.9217, 72.8347],
      properties: {
        category: "Historical Site",
        built: "1911-1924",
        height: "26 meters",
        location: "Mumbai, Maharashtra",
        colonial_era: true,
      },
    },
    {
      id: "point-3",
      type: "Point",
      name: "Golden Temple",
      coordinates: [31.62, 74.8765],
      properties: {
        category: "Religious Site",
        built: "1604",
        religion: "Sikhism",
        pool: "Amrit Sarovar",
        visitors: "100,000+ daily",
      },
    },
    {
      id: "point-4",
      type: "Point",
      name: "Red Fort",
      coordinates: [28.6562, 77.241],
      properties: {
        category: "Fort",
        built: "1639-1648",
        emperor: "Shah Jahan",
        material: "Red sandstone",
        unesco_site: true,
      },
    },
    {
      id: "point-5",
      type: "Point",
      name: "Hawa Mahal",
      coordinates: [26.9239, 75.8267],
      properties: {
        category: "Palace",
        built: "1799",
        windows: "953",
        height: "15 meters",
        style: "Rajput architecture",
      },
    },
    {
      id: "point-6",
      type: "Point",
      name: "India Gate",
      coordinates: [28.6129, 77.2295],
      properties: {
        category: "War Memorial",
        built: "1921-1931",
        height: "42 meters",
        architect: "Edwin Lutyens",
        dedicated_to: "British Indian Army soldiers",
      },
    },
    {
      id: "point-7",
      type: "Point",
      name: "Qutub Minar",
      coordinates: [28.5245, 77.1855],
      properties: {
        category: "Minaret",
        built: "1193-1220",
        height: "73 meters",
        material: "Red sandstone and marble",
        unesco_site: true,
      },
    },
    {
      id: "point-8",
      type: "Point",
      name: "Mysore Palace",
      coordinates: [12.3051, 76.6552],
      properties: {
        category: "Palace",
        built: "1897-1912",
        style: "Indo-Saracenic",
        rooms: "245",
        illumination: "100,000 light bulbs",
      },
    },
  ],
  polygons: [
    {
      id: "polygon-1",
      type: "Area",
      name: "Delhi NCR Region",
      coordinates: [
        [
          [28.8, 76.8],
          [28.8, 77.4],
          [28.4, 77.4],
          [28.4, 76.8],
          [28.8, 76.8],
        ],
      ],
      properties: {
        state: "Delhi",
        population: "20 million",
        area: "1,484 sq km",
        capital: "New Delhi",
      },
    },
    {
      id: "polygon-2",
      type: "Area",
      name: "Mumbai Metropolitan Region",
      coordinates: [
        [
          [18.8, 72.6],
          [18.8, 73.2],
          [18.2, 73.2],
          [18.2, 72.6],
          [18.8, 72.6],
        ],
      ],
      properties: {
        state: "Maharashtra",
        population: "25 million",
        area: "4,355 sq km",
        financial_capital: "Mumbai",
      },
    },
    {
      id: "polygon-3",
      type: "Area",
      name: "Kolkata Metropolitan Area",
      coordinates: [
        [
          [22.4, 88.2],
          [22.4, 88.8],
          [21.8, 88.8],
          [21.8, 88.2],
          [22.4, 88.2],
        ],
      ],
      properties: {
        state: "West Bengal",
        population: "15 million",
        area: "1,886 sq km",
        cultural_capital: "Kolkata",
      },
    },
  ],
  multipolygons: [
    {
      id: "multipolygon-1",
      type: "Area",
      name: "Kaziranga National Park",
      coordinates: [
        [
          [
            [26.6, 93.2],
            [26.6, 93.4],
            [26.4, 93.4],
            [26.4, 93.2],
            [26.6, 93.2],
          ],
        ],
        [
          [
            [26.5, 93.3],
            [26.5, 93.5],
            [26.3, 93.5],
            [26.3, 93.3],
            [26.5, 93.3],
          ],
        ],
      ],
      properties: {
        category: "National Park",
        state: "Assam",
        area: "430 sq km",
        famous_for: "One-horned rhinoceros",
        unesco_site: true,
        wildlife: ["Rhinos", "Tigers", "Elephants", "Wild water buffalo"],
      },
    },
    {
      id: "multipolygon-2",
      type: "Area",
      name: "Sundarbans Mangrove Forest",
      coordinates: [
        [
          [
            [21.8, 88.8],
            [21.8, 89.2],
            [21.4, 89.2],
            [21.4, 88.8],
            [21.8, 88.8],
          ],
        ],
        [
          [
            [22.2, 88.6],
            [22.2, 89.0],
            [21.8, 89.0],
            [21.8, 88.6],
            [22.2, 88.6],
          ],
        ],
      ],
      properties: {
        category: "Mangrove Forest",
        states: ["West Bengal", "Bangladesh"],
        area: "10,000 sq km",
        famous_for: "Royal Bengal Tigers",
        unesco_site: true,
        ecosystem: "Largest mangrove forest in the world",
      },
    },
  ],
};
