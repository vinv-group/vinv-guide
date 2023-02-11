import{_ as e,o as t,c as a,a as s}from"./app.d2d70541.js";const f=JSON.parse('{"title":"Latitude Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"latitude Type","slug":"latitude-type","link":"#latitude-type","children":[]},{"level":2,"title":"latitude Constraints","slug":"latitude-constraints","link":"#latitude-constraints","children":[]},{"level":2,"title":"latitude Examples","slug":"latitude-examples","link":"#latitude-examples","children":[]}],"relativePath":"specifications/vinv-cadastre/0.0.1/dereferenced-properties-location-properties-coordinates-properties-latitude.md","lastUpdated":null}'),n={name:"specifications/vinv-cadastre/0.0.1/dereferenced-properties-location-properties-coordinates-properties-latitude.md"},l=s(`<h1 id="latitude-schema" tabindex="-1">Latitude Schema <a class="header-anchor" href="#latitude-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-cadastre/0.0.1.json#/properties/location/properties/coordinates/properties/latitude</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The decimal north/south position of a point. (7 decimal places max)</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="latitude-type" tabindex="-1">latitude Type <a class="header-anchor" href="#latitude-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-location-properties-coordinates-properties-latitude.html">Latitude</a>)</p><h2 id="latitude-constraints" tabindex="-1">latitude Constraints <a class="header-anchor" href="#latitude-constraints" aria-hidden="true">#</a></h2><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>1e-7</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>90</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-90</code></p><h2 id="latitude-examples" tabindex="-1">latitude Examples <a class="header-anchor" href="#latitude-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">-12.4563</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">50.5627874</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),i=[l];function r(o,d,p,c,u,h){return t(),a("div",null,i)}const b=e(n,[["render",r]]);export{f as __pageData,b as default};
