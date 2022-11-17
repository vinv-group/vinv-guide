import{_ as e,c as t,o as a,a as l}from"./app.939b5bfd.js";const g=JSON.parse('{"title":"Coordinates Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"Coordinates Type","slug":"coordinates-type","link":"#coordinates-type","children":[]},{"level":2,"title":"longitude","slug":"longitude","link":"#longitude","children":[{"level":3,"title":"longitude Type","slug":"longitude-type","link":"#longitude-type","children":[]},{"level":3,"title":"longitude Constraints","slug":"longitude-constraints","link":"#longitude-constraints","children":[]},{"level":3,"title":"longitude Examples","slug":"longitude-examples","link":"#longitude-examples","children":[]}]},{"level":2,"title":"latitude","slug":"latitude","link":"#latitude","children":[{"level":3,"title":"latitude Type","slug":"latitude-type","link":"#latitude-type","children":[]},{"level":3,"title":"latitude Constraints","slug":"latitude-constraints","link":"#latitude-constraints","children":[]},{"level":3,"title":"latitude Examples","slug":"latitude-examples","link":"#latitude-examples","children":[]}]},{"level":2,"title":"altitude","slug":"altitude","link":"#altitude","children":[{"level":3,"title":"altitude Type","slug":"altitude-type","link":"#altitude-type","children":[]},{"level":3,"title":"altitude Constraints","slug":"altitude-constraints","link":"#altitude-constraints","children":[]},{"level":3,"title":"altitude Examples","slug":"altitude-examples","link":"#altitude-examples","children":[]}]}],"relativePath":"basics/coordinates/0.0.1/dereferenced.md","lastUpdated":null}'),n={name:"basics/coordinates/0.0.1/dereferenced.md"},i=l(`<h1 id="coordinates-schema" tabindex="-1">Coordinates Schema <a class="header-anchor" href="#coordinates-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/coordinates/0.0.1.json</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Anchor point of the Object on a map. Array of longitude, latitude and [altitude] coordinate. Reference system: WGS84 Web Mercator with longitude and latitude units of decimal degrees.</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json" title="open original schema">dereferenced.doc.json</a></td></tr></tbody></table><h2 id="coordinates-type" tabindex="-1">Coordinates Type <a class="header-anchor" href="#coordinates-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced.html">Coordinates</a>)</p><h1 id="coordinates-properties" tabindex="-1">Coordinates Properties <a class="header-anchor" href="#coordinates-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#longitude">longitude</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-longitude.html" title="https://schema.vinv.io/coordinates/0.0.1.json#/properties/longitude">Coordinates</a></td></tr><tr><td style="text-align:left;"><a href="#latitude">latitude</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-latitude.html" title="https://schema.vinv.io/coordinates/0.0.1.json#/properties/latitude">Coordinates</a></td></tr><tr><td style="text-align:left;"><a href="#altitude">altitude</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-altitude.html" title="https://schema.vinv.io/coordinates/0.0.1.json#/properties/altitude">Coordinates</a></td></tr></tbody></table><h2 id="longitude" tabindex="-1">longitude <a class="header-anchor" href="#longitude" aria-hidden="true">#</a></h2><p>The decimal east/west position of a point. (7 decimal places max)</p><p><code>longitude</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-longitude.html">Longitude</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-longitude.html" title="https://schema.vinv.io/coordinates/0.0.1.json#/properties/longitude">Coordinates</a></p></li></ul><h3 id="longitude-type" tabindex="-1">longitude Type <a class="header-anchor" href="#longitude-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-longitude.html">Longitude</a>)</p><h3 id="longitude-constraints" tabindex="-1">longitude Constraints <a class="header-anchor" href="#longitude-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>1e-7</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>180</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-180</code></p><h3 id="longitude-examples" tabindex="-1">longitude Examples <a class="header-anchor" href="#longitude-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">-130.5627874</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">130.5627874</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="latitude" tabindex="-1">latitude <a class="header-anchor" href="#latitude" aria-hidden="true">#</a></h2><p>The decimal north/south position of a point. (7 decimal places max)</p><p><code>latitude</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-latitude.html">Latitude</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-latitude.html" title="https://schema.vinv.io/coordinates/0.0.1.json#/properties/latitude">Coordinates</a></p></li></ul><h3 id="latitude-type" tabindex="-1">latitude Type <a class="header-anchor" href="#latitude-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-latitude.html">Latitude</a>)</p><h3 id="latitude-constraints" tabindex="-1">latitude Constraints <a class="header-anchor" href="#latitude-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>1e-7</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>90</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-90</code></p><h3 id="latitude-examples" tabindex="-1">latitude Examples <a class="header-anchor" href="#latitude-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">-12.4563</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">50.5627874</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="altitude" tabindex="-1">altitude <a class="header-anchor" href="#altitude" aria-hidden="true">#</a></h2><p>The altitude of the position in meters above mean sea level. (2 decimal places max)</p><p><code>altitude</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-altitude.html">Altitude</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-altitude.html" title="https://schema.vinv.io/coordinates/0.0.1.json#/properties/altitude">Coordinates</a></p></li></ul><h3 id="altitude-type" tabindex="-1">altitude Type <a class="header-anchor" href="#altitude-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-altitude.html">Altitude</a>)</p><h3 id="altitude-constraints" tabindex="-1">altitude Constraints <a class="header-anchor" href="#altitude-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>2500</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h3 id="altitude-examples" tabindex="-1">altitude Examples <a class="header-anchor" href="#altitude-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">130</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,47),s=[i];function d(o,r,p,c,u,h){return a(),t("div",null,s)}const f=e(n,[["render",d]]);export{g as __pageData,f as default};
