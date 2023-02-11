import{_ as e,o as t,c as a,a as s}from"./app.d2d70541.js";const f=JSON.parse('{"title":"Altitude Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"altitude Type","slug":"altitude-type","link":"#altitude-type","children":[]},{"level":2,"title":"altitude Constraints","slug":"altitude-constraints","link":"#altitude-constraints","children":[]},{"level":2,"title":"altitude Examples","slug":"altitude-examples","link":"#altitude-examples","children":[]}],"relativePath":"specifications/vinv-cadastre/0.0.1/dereferenced-properties-location-properties-coordinates-properties-altitude.md","lastUpdated":null}'),n={name:"specifications/vinv-cadastre/0.0.1/dereferenced-properties-location-properties-coordinates-properties-altitude.md"},l=s(`<h1 id="altitude-schema" tabindex="-1">Altitude Schema <a class="header-anchor" href="#altitude-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/location/properties/coordinates/properties/altitude</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The altitude of the position in meters above mean sea level. (2 decimal places max)</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="altitude-type" tabindex="-1">altitude Type <a class="header-anchor" href="#altitude-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-location-properties-coordinates-properties-altitude.html">Altitude</a>)</p><h2 id="altitude-constraints" tabindex="-1">altitude Constraints <a class="header-anchor" href="#altitude-constraints" aria-hidden="true">#</a></h2><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>2500</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h2 id="altitude-examples" tabindex="-1">altitude Examples <a class="header-anchor" href="#altitude-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">130</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),i=[l];function r(d,o,p,c,u,h){return t(),a("div",null,i)}const b=e(n,[["render",r]]);export{f as __pageData,b as default};
