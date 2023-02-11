import{_ as e,o as t,c as n,a as s}from"./app.d2d70541.js";const m=JSON.parse('{"title":"Longitude Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"longitude Type","slug":"longitude-type","link":"#longitude-type","children":[]},{"level":2,"title":"longitude Constraints","slug":"longitude-constraints","link":"#longitude-constraints","children":[]},{"level":2,"title":"longitude Examples","slug":"longitude-examples","link":"#longitude-examples","children":[]}],"relativePath":"basics/location/0.0.1/dereferenced-properties-coordinates-properties-longitude.md","lastUpdated":1668718410000}'),a={name:"basics/location/0.0.1/dereferenced-properties-coordinates-properties-longitude.md"},l=s(`<h1 id="longitude-schema" tabindex="-1">Longitude Schema <a class="header-anchor" href="#longitude-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/location/0.0.1.json#/properties/coordinates/properties/longitude</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The decimal east/west position of a point. (7 decimal places max)</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="longitude-type" tabindex="-1">longitude Type <a class="header-anchor" href="#longitude-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-coordinates-properties-longitude.html">Longitude</a>)</p><h2 id="longitude-constraints" tabindex="-1">longitude Constraints <a class="header-anchor" href="#longitude-constraints" aria-hidden="true">#</a></h2><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>1e-7</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>180</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-180</code></p><h2 id="longitude-examples" tabindex="-1">longitude Examples <a class="header-anchor" href="#longitude-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">-130.5627874</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">130.5627874</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),i=[l];function o(d,r,p,c,u,h){return t(),n("div",null,i)}const f=e(a,[["render",o]]);export{m as __pageData,f as default};
