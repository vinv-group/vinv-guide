import{_ as e,o as t,c as a,a as i}from"./app.d2d70541.js";const u=JSON.parse('{"title":"Height of trunk Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"Height of trunk Type","slug":"height-of-trunk-type","link":"#height-of-trunk-type","children":[]},{"level":2,"title":"height","slug":"height","link":"#height","children":[{"level":3,"title":"height Type","slug":"height-type","link":"#height-type","children":[]},{"level":3,"title":"height Constraints","slug":"height-constraints","link":"#height-constraints","children":[]},{"level":3,"title":"height Examples","slug":"height-examples","link":"#height-examples","children":[]}]},{"level":2,"title":"diameter","slug":"diameter","link":"#diameter","children":[{"level":3,"title":"diameter Type","slug":"diameter-type","link":"#diameter-type","children":[]},{"level":3,"title":"diameter Constraints","slug":"diameter-constraints","link":"#diameter-constraints","children":[]},{"level":3,"title":"diameter Examples","slug":"diameter-examples","link":"#diameter-examples","children":[]}]}],"relativePath":"basics/trunk-height/0.0.1/dereferenced.md","lastUpdated":1675706535000}'),n={name:"basics/trunk-height/0.0.1/dereferenced.md"},s=i(`<h1 id="height-of-trunk-schema" tabindex="-1">Height of trunk Schema <a class="header-anchor" href="#height-of-trunk-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/diameter_at_height/0.0.1.json</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Height in Meter where diameter is zero.</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json</a></td></tr></tbody></table><h2 id="height-of-trunk-type" tabindex="-1">Height of trunk Type <a class="header-anchor" href="#height-of-trunk-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced.html">Height of trunk</a>)</p><h1 id="height-of-trunk-properties" tabindex="-1">Height of trunk Properties <a class="header-anchor" href="#height-of-trunk-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#height">height</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-height.html" title="https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/height">Height of trunk</a></td></tr><tr><td style="text-align:left;"><a href="#diameter">diameter</a></td><td style="text-align:left;"><code>integer</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-diameter.html" title="https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/diameter">Height of trunk</a></td></tr></tbody></table><h2 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-hidden="true">#</a></h2><p>Height of the trunk.</p><p><code>height</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-height.html">Height</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-height.html" title="https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/height">Height of trunk</a></p></li></ul><h3 id="height-type" tabindex="-1">height Type <a class="header-anchor" href="#height-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-height.html">Height</a>)</p><h3 id="height-constraints" tabindex="-1">height Constraints <a class="header-anchor" href="#height-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>100</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h3 id="height-examples" tabindex="-1">height Examples <a class="header-anchor" href="#height-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">1.3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="diameter" tabindex="-1">diameter <a class="header-anchor" href="#diameter" aria-hidden="true">#</a></h2><p>Diameter at max Height.</p><p><code>diameter</code></p><ul><li><p>is required</p></li><li><p>Type: <code>integer</code> (<a href="./dereferenced-properties-diameter.html">Diameter</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-diameter.html" title="https://schema.vinv.io/diameter_at_height/0.0.1.json#/properties/diameter">Height of trunk</a></p></li></ul><h3 id="diameter-type" tabindex="-1">diameter Type <a class="header-anchor" href="#diameter-type" aria-hidden="true">#</a></h3><p><code>integer</code> (<a href="./dereferenced-properties-diameter.html">Diameter</a>)</p><h3 id="diameter-constraints" tabindex="-1">diameter Constraints <a class="header-anchor" href="#diameter-constraints" aria-hidden="true">#</a></h3><p><strong>constant</strong>: the value of this property must be equal to:</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>1000</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h3 id="diameter-examples" tabindex="-1">diameter Examples <a class="header-anchor" href="#diameter-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,33),r=[s];function l(h,d,o,p,c,g){return t(),a("div",null,r)}const f=e(n,[["render",l]]);export{u as __pageData,f as default};