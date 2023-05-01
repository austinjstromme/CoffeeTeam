import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import "d3";
import mapboxgl from "mapbox-gl";
import { geoMercator } from "d3-geo";
const GlobalMap_svelte_svelte_type_style_lang = "";
const NorthernTriangleClimate_svelte_svelte_type_style_lang = "";
const App_svelte_svelte_type_style_lang = "";
const Scroller_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "svelte-scroller-outer.svelte-xdbafy{display:block;position:relative}svelte-scroller-background.svelte-xdbafy{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-xdbafy{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-xdbafy::after{content:' ';display:block;clear:both}svelte-scroller-background-container.svelte-xdbafy{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}",
  map: null
};
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let widthStyle;
  let { top = 0 } = $$props;
  let { bottom = 1 } = $$props;
  let { threshold = 0.5 } = $$props;
  let { query = "section" } = $$props;
  let { parallax = false } = $$props;
  let { index = 0 } = $$props;
  let { count = 0 } = $$props;
  let { offset = 0 } = $$props;
  let { progress = 0 } = $$props;
  let { visible = false } = $$props;
  let outer;
  let foreground;
  let background;
  let offset_top = 0;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$6);
  style = `
		position: ${"absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${1};
	`;
  widthStyle = "";
  return `

<svelte-scroller-outer class="svelte-xdbafy"${add_attribute("this", outer, 0)}><svelte-scroller-background-container class="background-container svelte-xdbafy" style="${escape(style, true) + escape(widthStyle, true)}"><svelte-scroller-background class="svelte-xdbafy"${add_attribute("this", background, 0)}>${slots.background ? slots.background({}) : ``}</svelte-scroller-background></svelte-scroller-background-container>

	<svelte-scroller-foreground class="svelte-xdbafy"${add_attribute("this", foreground, 0)}>${slots.foreground ? slots.foreground({}) : ``}</svelte-scroller-foreground>
</svelte-scroller-outer>`;
});
const Map_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".map.svelte-if4095{width:100%;height:100vh;position:absolute;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s;outline:blue solid 0px}.map.visible.svelte-if4095{opacity:1;visibility:visible}",
  map: null
};
const Map$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { geoJsonToFit } = $$props;
  mapboxgl.accessToken = "pk.eyJ1IjoiZXVuaGFlMTU3MCIsImEiOiJjbGdsNGlzMGIwMGpqM3BtZXZ3MHRzZWM2In0.VyD5HQxUxjsF9gkC7Z5TgQ";
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.geoJsonToFit === void 0 && $$bindings.geoJsonToFit && geoJsonToFit !== void 0)
    $$bindings.geoJsonToFit(geoJsonToFit);
  $$result.css.add(css$5);
  {
    if (index === 4) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1s9kg0l_START --><link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"><!-- HEAD_svelte-1s9kg0l_END -->`, ""}

<div class="${["map svelte-if4095", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}></div>`;
});
const Map1_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".map.svelte-p7w6q1{width:100%;height:100vh;position:absolute;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s;outline:blue solid 0px}.map.visible.svelte-p7w6q1{opacity:1;visibility:visible}",
  map: null
};
const Map1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { geoJsonToFit } = $$props;
  mapboxgl.accessToken = "pk.eyJ1IjoiZXVuaGFlMTU3MCIsImEiOiJjbGdsNGlzMGIwMGpqM3BtZXZ3MHRzZWM2In0.VyD5HQxUxjsF9gkC7Z5TgQ";
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.geoJsonToFit === void 0 && $$bindings.geoJsonToFit && geoJsonToFit !== void 0)
    $$bindings.geoJsonToFit(geoJsonToFit);
  $$result.css.add(css$4);
  {
    if (index >= 6 && index < 11) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-szwil1_START --><link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"><!-- HEAD_svelte-szwil1_END -->`, ""}

  <div class="${["map svelte-p7w6q1", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}></div>`;
});
const MapBelt_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".map.svelte-p7w6q1{width:100%;height:100vh;position:absolute;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s;outline:blue solid 0px}.map.visible.svelte-p7w6q1{opacity:1;visibility:visible}",
  map: null
};
const MapBelt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { geoJsonToFit } = $$props;
  mapboxgl.accessToken = "pk.eyJ1IjoiZXVuaGFlMTU3MCIsImEiOiJjbGdsNGlzMGIwMGpqM3BtZXZ3MHRzZWM2In0.VyD5HQxUxjsF9gkC7Z5TgQ";
  let container;
  const beanbeltData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [[[-180, 23.5], [-180, -23.5], [180, -23.5], [180, 23.5], [-180, 23.5]]],
          "type": "Polygon"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [-160, 0],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [-140, 0],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [-120, 0],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [-100, 0],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [-80, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [-60, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [-40, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [-20, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [0, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [20, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [40, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [60, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [80, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [100, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [120, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [140, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [160, 0], "type": "Point" }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": { "coordinates": [180, 0], "type": "Point" }
      }
    ]
  };
  const filter_equator = (feature) => {
    return feature.properties.line === "equator";
  };
  const filter_belt = (feature) => {
    return feature.properties.line === "belt";
  };
  beanbeltData.features.filter(filter_equator);
  beanbeltData.features.filter(filter_belt);
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.geoJsonToFit === void 0 && $$bindings.geoJsonToFit && geoJsonToFit !== void 0)
    $$bindings.geoJsonToFit(geoJsonToFit);
  $$result.css.add(css$3);
  {
    if (index === 5) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-f34ff9_START --><link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"><!-- HEAD_svelte-f34ff9_END -->`, ""}
  
  <div class="${["map svelte-p7w6q1", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}></div>`;
});
const MapMigration_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".flowmap.svelte-toeph5{width:100%;height:100vh;position:absolute;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s;outline:blue solid 0px}.flowmap.visible.svelte-toeph5{opacity:1;visibility:visible}",
  map: null
};
const MapMigration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$2);
  {
    if (index === 9) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `<iframe width="800" height="600" title="flow" class="flowmap svelte-toeph5" src="https://flowmap.blue/1ODcincYj0MjnBWdE6v2FFHltR2JCNV6buBM3aQlLhc0/embed?v=20.173050%2C-94.563081%2C4.77%2C0%2C0&a=1&as=1&b=1&bo=88&c=0&ca=0&cz=4&d=0&fe=1&lt=0&lfm=ALL&t=19900101T000000%2C20210101T000000&col=BuGn&f=19" frameborder="0" allowfullscreen></iframe>

  <div class="${["flowmap svelte-toeph5", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}></div>`;
});
const Background_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".image.svelte-mbqlu{width:100%;height:100vh;position:absolute;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s}.image.visible.svelte-mbqlu{opacity:1;visibility:visible}img.svelte-mbqlu{margin:10em;width:500px}",
  map: null
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  {
    if (index < 1) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `<div class="${["image svelte-mbqlu", isVisible ? "visible" : ""].join(" ").trim()}"><img src="./images/coffee.png" alt="coffee" class="svelte-mbqlu"></div>

`;
});
const ScrollyTeller_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');.background.svelte-focz00{width:105%;height:100vh;position:relative;top:0px;left:-8px;outline:green solid 0px}.foreground.svelte-focz00{width:90%;margin:0 auto;height:auto;position:relative}section.svelte-focz00{height:80vh;background-color:rgba(255, 255, 255, 0);max-width:100%;color:black;padding:3em 2em;margin:1em 0 2em 45em;text-align:center;font-family:'Poppins', sans-serif;font-size:18px;line-height:1.65}.aboutCoffee.svelte-focz00{height:90vh;max-width:750px;padding:3em 2em 3em 2em;margin:15em auto 5em}.farmerStory.svelte-focz00{height:120vh;max-width:80%;padding:5em 2em;margin:2em auto;background-color:rgba(255, 255, 255, 0.65)}.flowmap.svelte-focz00{height:80vh;max-width:900px;padding:0;margin:0 auto}.ending.svelte-focz00{height:80vh;max-width:750px;padding:10em 0 0 0;margin:10em auto}p.svelte-focz00{text-align:center;font-family:'Poppins', sans-serif;line-height:1.65;margin:1em}button.svelte-focz00{background-color:white;border-style:none}.bean.svelte-focz00{margin:2em auto}.credit.svelte-focz00{font-size:12px;color:gray;margin:13em 0 0 0}",
  map: null
};
const ScrollyTeller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count, index, offset, progress;
  let width, height;
  let geoJsonToFit = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [1, 0] }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [0, 1] }
      }
    ]
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    geoMercator().fitSize([width, height], geoJsonToFit);
    $$rendered = `${validate_component(Scroller, "Scroller").$$render(
      $$result,
      {
        top: 0,
        bottom: 1,
        threshold: 0.5,
        count,
        index,
        offset,
        progress
      },
      {
        count: ($$value) => {
          count = $$value;
          $$settled = false;
        },
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        },
        offset: ($$value) => {
          offset = $$value;
          $$settled = false;
        },
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        }
      },
      {
        foreground: () => {
          return `<div class="foreground svelte-focz00" slot="foreground"><section class="intro svelte-focz00"><br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      Hi there, how&#39;s the coffee?
      <br>
      <br>
      Have you ever wondered where your coffee comes from? Let&#39;s take a step back.
      <br>
      <br>
      <button class="svelte-focz00"><img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30"></button></section>

    <section class="intro svelte-focz00">[enter some kind of fancy transition]
      <br>
      <br>
      <br>
      <img class="smallbean" src="./images/smallbean-hor.png" alt="coffeebean" width="50">
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <img class="smallbean" src="./images/smallbean-hor.png" alt="coffeebean" width="50">
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30"></section>

    <section class="aboutCoffee svelte-focz00"><img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <h3>Coffee Fun Fact #1</h3>
      <p class="svelte-focz00">Coffee&#39;s flavor and quality depend on factors like plant type, soil chemistry, climate conditions such as rainfall and sunshine, altitude, and minimal pests or diseases that affect the plants.
      </p> 
        <br>
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <h3>Coffee Fun Fact #2</h3>
      <p class="svelte-focz00">The optimal temperature range of the Coffea arabica tree—source of 70% of the world&#39;s coffee—is 64°–70°F (18°C–21°C), while it can tolerate up to 73°F (24°C). 
        </p>
        <br>
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <h3>Coffee Fun Fact #3</h3>
      <p class="svelte-focz00">Generally, coffee needs 1500-2500mm annual rainfall, spread evenly, with a dry season under three months. However, some plants tolerate different conditions depending on the growing region.
      </p>
      <br>
      <br>
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <br>
      <br>
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <br>
      <br>
      <img class="smallbean" src="./images/smallbean.png" alt="coffeebean" width="30">
      <br>
      <br>
      Now it&#39;s your turn!
    </section>
    <section class="aboutCoffee svelte-focz00"><img class="coffeegame" src="./images/coffeegame_result.png" alt="coffeegame" width="750">
      <br></section>

    <section class="chapterOne svelte-focz00">Here’s a map of the world. And these are the countries that produce coffee.
      <br>
      <br>
      Hover over each country to see how much coffee they produce.

      <br>
      <br>
      Do you notice a pattern?
    </section>
    <section class="beanBelt svelte-focz00">Coffee trees grow best in a region called &quot;The Bean Belt,&quot; which is located near the Equator, between latitudes 23.5 degrees North and 23.5 degrees South. 
      <br>
      <br>
      <br>
      The coffee belt passes through some 70 countries, which have tropical climates that provide rich environments that are perfect for growing coffee.
    </section>
    

    <section class="chapterTwo svelte-focz00"><br>
        <br>
        <br>
      Let’s zoom into a region in Central America called the “Northern Triangle.” 
      <br>
      <br>
      <br>
      This region includes: <br>Guatemala, <br>Honduras <br>and <br>El Salvador. 
    </section>
    <section class="farmerStory svelte-focz00"><img class="farmer" src="./images/farmer.png" alt="farmer" width="600">
      <br>
      <br>
      Meet Juan, <br>a smallholder coffee farmer in the Huehuetenango region in Guatemala.
    </section>
    <section class="farmerStory svelte-focz00">Continue Farmer story
    </section>
    <section class="chapterThree svelte-focz00">Climate change in Northern Triangle
    </section>
    <section class="chapterThree svelte-focz00">Natural disasters in Norther Triangle</section>
    <section class="chapterThree svelte-focz00">Coffee production in Northern Triangle</section>
    <section class="flowmap svelte-focz00"><h1>Migration from the Northern Triangle</h1>
      <p class="svelte-focz00">Click the &quot;play&quot; button on the bottom to see how migration flow changes over the years.
        <br>
        Hover outside the map to continue scrolling down.</p>
      <iframe width="100%" height="600" title="flowmap" src="https://flowmap.blue/1ODcincYj0MjnBWdE6v2FFHltR2JCNV6buBM3aQlLhc0?v=23.301426%2C-92.632810%2C4.43%2C0%2C0&a=1&as=1&b=1&bo=84&c=0&ca=0&cz=4&d=0&fe=1&lt=0&lfm=ALL&t=19900101T000000%2C19960101T000000&col=BuGn&f=19" frameborder="0" allowfullscreen></iframe>
        <br></section>
    
    <section class="ending svelte-focz00">Learned something new? Go out there an spill the beans!
      <br>
      Click the bean to learn more.
      <br>
      <button class="svelte-focz00"><img class="bean svelte-focz00" src="./images/coffeebean.png" alt="coffeebean" width="500"></button>

      <br>
      <p class="credit svelte-focz00">Copyright info
      </p></section></div>`;
        },
        background: () => {
          return `<div class="background svelte-focz00" slot="background">${validate_component(Background, "Background").$$render($$result, { index }, {}, {})}

    ${validate_component(Map$1, "Map").$$render(
            $$result,
            { index, geoJsonToFit },
            {
              geoJsonToFit: ($$value) => {
                geoJsonToFit = $$value;
                $$settled = false;
              }
            },
            {}
          )}
    
    ${validate_component(MapBelt, "MapBelt").$$render(
            $$result,
            { index, geoJsonToFit },
            {
              geoJsonToFit: ($$value) => {
                geoJsonToFit = $$value;
                $$settled = false;
              }
            },
            {}
          )}
    

    ${validate_component(Map1, "Map1").$$render(
            $$result,
            { index, geoJsonToFit },
            {
              geoJsonToFit: ($$value) => {
                geoJsonToFit = $$value;
                $$settled = false;
              }
            },
            {}
          )} 

    ${validate_component(MapMigration, "MapMigration").$$render(
            $$result,
            { index, geoJsonToFit },
            {
              geoJsonToFit: ($$value) => {
                geoJsonToFit = $$value;
                $$settled = false;
              }
            },
            {}
          )}
    
  
    </div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main>${validate_component(ScrollyTeller, "ScrollyTeller").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
